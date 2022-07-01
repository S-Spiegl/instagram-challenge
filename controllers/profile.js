const User = require("../models/user");

const ProfileController = {

  Index: (req, res) => {
    const user = req.params.potato;
    User.findOne({ _id: user }).exec((err, user) => {
      //goes to mongoDB user document(?) and finds a user whose id 
      //is the same as the user_id entered in the params, or rather,
      //is the same as whatever string is in the route after /:, again,
      //potato used for illustrative purposes 
      //I guess what will eventually be done is that we'll send the 
      //user, upon signing in, to their profile, using profile/user_id (or
      //something similar),taking the id from the database and using
      //it to direct them to their own page
      if (err) {
        throw err;
      }

      // user.profileOwner = req.params.user_id === req.session.user._id
      // console.log(req.params.user_id)
      // console.log(req.session.user_id)
      // console.log(user.profileOwner)

      res.render("profile/index", {
        session: req.session.user,
        user: user,
        //this last line is highly confusing.
        //I believe it means that for the purposes of rendering the page (and 
        //interpolating via handlebars, anything referred to as session will reference
        //the person logged in (i.e. the req.session.user) and anything referred to as 
        //user (i.e. the user before the colon) will reference the user rendered on the page,
        //in this case whoever's profile we've been directed to (in this instance the two
        //are the same, but I've illustrated how it might be used, e.g. to say, hello,
        //{session user}, you're looking at {user}'s profile ))
      });
    });
  },
}

module.exports = ProfileController;