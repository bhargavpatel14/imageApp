const mongoose = require('mongoose');
const image = mongoose.model('Image');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const imageListAll = (req, res) => {
    image
        .find()
        .exec((err, imagedata) => {
            if (err) {
                sendJSONResponse(res, 404, err);
                return;
            } else if (imagedata.length <= 0) {
                sendJSONResponse(res, 404, { 'message': 'image list empty' });
                return;
            } else {
                sendJSONResponse(res, 200, imagedata);
            }
        });
};

const imageListCreate = (req, res) => {
    image
        .create({
            url: req.body.url,
            photographer: req.body.photographer,
            img_name: req.body.img_name,
            tags: req.body.tags,
            aprture: req.body.aprture,
            shut_speed: req.body.shut_speed,
        }, (err, imagedata) => {
            if (err) {
                sendJSONResponse(res, 400, err);
            } else {
                sendJSONResponse(res, 200, imagedata);
            }
        });
};

const imageListReadOne = (req, res) => {
    if (req.params && req.params.imageid) {
        image
            .findById(req.params.imageid)
            .exec((err, imagedata) => {
                if (!imagedata) {
                    sendJSONResponse(res, 404, { 'message': 'imageid not found' });
                    return;
                } else if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                } else {
                    sendJSONResponse(res, 200, imagedata);
                }
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'No imageid in request' });
    }
};

const imageListUpdateOne = (req, res) => {
    if (!req.params.imageid) {
        sendJSONResponse(res, 404, { 'message': 'imageid is required' });
        return;
    }
    image
        .findById(req.params.imageid)
        .exec((err, imagedata) => {
            if (!imagedata) {
                sendJSONResponse(res, 404, { 'message': 'no imagedata found' });
                return;
            } else if (err) {
                sendJSONResponse(res, 400, err);
                return
            }
            imagedata.url = req.body.url;
            imagedata.photographer = req.body.photographer;
            imagedata.img_name = req.body.img_name;
            imagedata.tags = req.body.tags;
            imagedata.aprture = req.body.aprture;
            imagedata.shut_speed = req.body.shut_speed;
            imagedata.save((err, imagedata) => {
                if (err) {
                    sendJSONResponse(res, 400, err);
                } else {
                    sendJSONResponse(res, 200, imagedata);
                }
            });
        });
};

const imageListDeleteOne = (req, res) => {
    const imageid = req.params.imageid;
    if (imageid) {
        image
            .findByIdAndRemove(imageid)
            .exec((err, imagedata) => {
                if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    } else {
        sendJSONResponse(res, 404, { 'message': 'imageid is required' });
    }
};

module.exports = {
    imageListAll,
    imageListCreate,
    imageListReadOne,
    imageListUpdateOne,
    imageListDeleteOne
};