var express = require('express');
var router = express.Router();

const UsersController = require("../controllers/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', UsersController.New)
router.post('/new', UsersController.New) 
router.post('/', UsersController.Create)
//add a button to logout, call UsersController.Destroy

module.exports = router;
