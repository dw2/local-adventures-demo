module.exports = {
    index: function (req, res) {
        res.render('index', {pageTitle: 'Local Adventures', bodyId: 'pageHome'});
    },
    search: function (req, res) {
        res.render('search', {pageTitle: 'Find an Adventure', bodyId: 'pageMap'});
    },
    status404: function (req, res) {
        res.render('404', {status: 404, pageTitle: 'Missing Page', bodyId: 'status404'});
    },
    status500: function (req, res, error) {
        res.render('500', {status: 500, pageTitle: 'Server Hiccup', bodyId: 'status500', error: (error === 'undefined' ? '' : error) });
    }
};
