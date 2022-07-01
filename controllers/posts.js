const Post = require("../models/post");

const PostsController = {

  Index: (req, res) => {
    Post.find().sort({message: 'desc'})
      .exec((err, posts) => {
        if (err) {
          throw err;
        }
        res.render("posts/index", {
          posts: posts
        });
    });
  }

};

module.exports = PostsController;