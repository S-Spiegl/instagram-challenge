const User = require("../models/user");

const UsersController = {

  New: (req, res) => {
    res.render('users/new', { title: 'Sign Up' });
    //the address inside render tells it where to look for the view
  },

  Create: (req, res) => {
    const user = new User(req.body);
    //create new user in database using the req body
    user.save((err) => {
      if (err) {
        throw err;
      }
      //take an error message as a callback, throw an error if there's an error...
      res.status(201).redirect("/sessions/new");
    });
  },

  
  Index: (req, res) => {
    User.find().sort({name: 'desc'})
      .exec((err, users) => {
        if (err) {
          throw err;
        }

        res.render("users/index", {
          users: users
        });
    })
  },
};

module.exports = UsersController;

//define a route in the app, 
//then go the relevant route, tell the server(?) how to handle visits to different addresses associated with that route
//e.g. for users you might have '/' and 'new'
//here you can specify how to handle get and post requests
//either use res.send to send some text directly to the page
//or route to the controller, where you can tell the server(?) which view to use to render the page depending on which handler was specified in the route