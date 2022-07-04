const mongoose = require("mongoose");

require("../mongodb_helper");
const Post = require("../../models/post");

describe("Post model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it('has a message', () => {
    const post = new Post({ message: "Hallo!"})
    expect(post.message).toEqual("Hallo!");
  });

  it('can list all posts', (done) => {
  //looks at the collection and verifies that it is empty. Not sure how this verifies that it can list all posts...
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    })
  })

  it("can list all posts take two", (done) => {
    //own test for clarification. Probably superfluous, pretty much the same as the next one
    
  const post = new Post({ message: 'hello'})
    post.save((err) => {
      expect(err).toBeNull();
    
      Post.find((err, posts) => {
        expect(err).toBeNull();
        expect(posts[0].message).toEqual("hello");
        expect(posts.length).toEqual(1)
        done();
      });
    });
  });

  it("can save a post", (done) => {
    const post = new Post({ message: "Hallo again" });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "Hallo again" });
        expect(posts.length).toEqual(1)
        done();
      });
    });
  });

  it("can save two posts", (done) => {
    //own test for clarification
    const post = new Post({ message: "Hallo again" });
    
    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "Hallo again" });
        expect(posts.length).toEqual(1);
      });
    });
  
    const postTwo = Post({ message: "Goodbye"})

    postTwo.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[1]).toMatchObject({ message: "Goodbye" });
        expect(posts.length).toEqual(2)
        done();
      });
    });
  });

  it("can list all posts in reverse chronological order", (done) => {
    //compare order here to order in "saves two posts" - both work
    //does this test belong here? Is it possible to reverse the order of the database using the model? Or do 
    //we just do it in the controller/view? In which case would it be an integration test?
    //if doing it through the database, need a timestamp, which seems sensible enough...
    //then can definitely sort in compass, so should be able to do something using the controller...
    const postOne = new Post({ message: "First" });
    const postTwo = new Post({ message: "Second" });

    postOne.save((err) => {
      expect(err).toBeNull();

      Post.find().sort({message: 'desc'})
        .exec((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "First" });

        postTwo.save((err) => {
          expect(err).toBeNull();

          Post.find().sort({message: 'desc'})
          .exec((err, posts) => {
            expect(err).toBeNull();

            expect(posts).toMatchObject([
              { message: "Second" },
              { message: "First" },
            ]);
            done();
          });
        });
      });
    });
  });
})
