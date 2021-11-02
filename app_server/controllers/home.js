const index =
    function(req, res, next) {
        res.render('index', { title: 'Image Gallery' });
    };

module.exports = {
    index
};