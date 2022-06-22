const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

//places mongoose connection is established/mongoose tables are created/edited:
//www file
//the model
//the controller 