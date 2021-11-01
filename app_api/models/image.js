const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    review_txt: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    photographer: {
        type: String,
        required: true
    },
    img_name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    aprture: {
        type: String,
        required: true,
        'default': "0"
    },
    shut_speed: {
        type: String,
        required: true,
        'default': "1/500"
    },
    reviews: [reviewSchema]
});

mongoose.model('Image', imageSchema);