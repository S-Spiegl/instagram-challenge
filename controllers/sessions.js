const SessionsController = {

  New: (req, res) => {
    res.render('sessions/new', { title: 'Login' });
    //the address inside render tells it where to look for the view
  },
};

module.exports = SessionsController;