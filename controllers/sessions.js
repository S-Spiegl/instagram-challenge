const User = require("../models/user");

const SessionsController = {

  New: (req, res) => {
    res.render('sessions/new', { title: 'Login' });
    //the address inside render tells it where to look for the view
  },

  Create: (req, res) => {
    console.log("trying to log in");
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
      if (!user) {
        res.redirect("/sessions/new");
      } else if (user.password != password) {
        res.redirect("/sessions/new");
      } else {
        req.session.user = user;
        //need to understand the above line better
        //where is user defined? (I think this is coming from the name of the table)
        //is session/req.session.user a predefined term referring to whoever is logged in
        //or have we defined it ourselves (I think it's the former)
        //are we assigning the value of user to req.session.user or 
        //the other way round? (I think it's the former, i.e. we're saying
        //that the user whose credentials match the login details will be the session
        //user)
        res.redirect(`/profile/${req.session.user._id}`); 
      }
    });
  },

  Destroy: (req, res) => {
    console.log("logging out");
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    res.redirect("/sessions/new");
  },
};

module.exports = SessionsController;