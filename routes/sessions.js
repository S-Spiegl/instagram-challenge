var express = require('express');
var router = express.Router();

const SessionsController = require("../controllers/sessions");

/* GET login page. */
router.get('/new', SessionsController.New)

module.exports = router;