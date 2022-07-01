const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
});

const Post = mongoose.model("Post", PostSchema);
// Post.find({}).sort([['message', -1]]).exec(function(err, docs) { 
   
// });

module.exports = Post;