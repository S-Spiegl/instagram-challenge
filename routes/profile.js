var express = require('express');
var router = express.Router();

const ProfileController = require("../controllers/profile");

/* GET profile page. */
/* needs user_id after the / */
router.get('/:potato', ProfileController.Index)
//the string that follows the / can be anything, as long as it is
//preceded by a colon. 
//leaving this as potato for now to illustrate this
module.exports = router;
