const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

//why aren't these appearing in the test_database?????
//ok, now they are... I have no idea what changed...
//but now the second 'table' I created isn't appearing,
//so I can see users but not posts... do I just wait?
//half an hour later, posts have appeared... 

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a name", () => {
    const user = new User({
      name: "Bob Belcher",
      email: "bob@fake.com",
      password: "guest",
    });
    expect(user.name).toEqual("Bob Belcher");
  });

  it("has an email address", () => {
    const user = new User({
      name: "Bob Belcher",
      email: "bob@fake.com",
      password: "guest",
    });
    expect(user.email).toEqual("bob@fake.com");
  });

  it('has a password', () => {
    const user = new User({
      name: "Bob Belcher",
      email: "bob@fake.com",
      password: "guest",
    });
    expect(user.password).toEqual('guest')
  })

  it("can save a user", (done) => {
    const user = new User({
      name: "Bob Belcher",
      email: "bob@fake.com",
      password: "guest",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          name: "Bob Belcher",
          email: "bob@fake.com",
        });
        done();
      });
    });
  });
})