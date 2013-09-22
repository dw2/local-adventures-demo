module.exports = function (opts) {
    var app = opts.app,
        config = opts.config,
        express = opts.express,
        helpers = opts.helpers;

    app.configure(function () {
        app.set('port', process.env.PORT || 3000);
        app.set('views', './app/views');
        app.set('view engine', 'jade');
        app.use(express.logger('production'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.cookieSession({ secret: config.session.secret }));
        app.use(express.static('./public'));
        app.use(function(req, res, next) {
            // Ensure correct domain
            if (config.baseUrl.indexOf(req.host) === -1) {
                return res.redirect(config.baseUrl + req.path);
            }
            res.locals.bodyId = '';
            res.locals.bodyClass = '';
            if (!!req.user) {
                res.locals.signedIn = true;
                res.locals.currentUser = req.user;
            } else {
                res.locals.signedIn = false;
            }
            next();
        });
    });
    return app;
};
