const express = require('express');
const router = express.Router();
const cntrlImages = require('../controllers/image');

// image items
router
    .route('/imagelist')
    .get(cntrlImages.imageListAll)
    .post(cntrlImages.imageListCreate);
router
    .route('/imagelist/:imageid')
    .get(cntrlImages.imageListReadOne)
    .put(cntrlImages.imageListUpdateOne)
    .delete(cntrlImages.imageListDeleteOne);

module.exports = router;