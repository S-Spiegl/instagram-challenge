const HomeController = {
  Index: (req, res) => {
    res.render('home/index', { title: 'Instagram' });
    //the address inside render tells it where to look for the view
  },
};

module.exports = HomeController;