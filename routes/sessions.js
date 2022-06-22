var express = require('express');
var router = express.Router();

const SessionsController = require("../controllers/sessions");

/* GET login page. */
router.get('/new', SessionsController.New)
router.post('/new', SessionsController.New)
router.post('/', SessionsController.Create)

module.exports = router;