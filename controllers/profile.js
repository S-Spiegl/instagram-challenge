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
      });
    });
  },
}

module.exports = ProfileController;