module.exports = function (opts) {
    var app = opts.app,
        config = opts.config,
        controllers = opts.controllers,
        static = opts.static;

    app.get('/', static.index);
    app.get('/search', static.search);
    app.get('*', static.status404);

    return app;
};
