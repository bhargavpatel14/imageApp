// test
var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/home");
// var ctrlAbout = require("../controllers/about");
var ctrlimage = require("../controllers/image");

/* GET home page. */
router.get('/', ctrlHome.index);
// router.get('/about', ctrlAbout.aboutus);
router.get('/list', ctrlimage.mobiles);
// router.get('/mobile-info/:mobileid', ctrlimage.mobileInfo);
// router.get('/display', ctrlimage.mobile);
// router.route('/new')
//     .get(ctrlimage.addNewMobile)
//     .post(ctrlimage.doAddNewMobile);

module.exports = router;