var
    _ = require('underscore'),
    config = require('getconfig'),
    express = require('express'),
    util = require('util'),
    async = require('async'),
    md = require("node-markdown").Markdown,
    app = express(),
    helpers = require('./app/helpers')({ config: config }),
    static = require('./app/controllers/static');

// Config
app = require('./config/environments/' + (process.env.NODE_ENV || 'development') + '.js')({
    app: app,
    config: config,
    express: express,
    helpers: helpers
});

// Routes
app = require('./config/routes.js')({
    app: app,
    config: config,
    static: static
});

// Get the show on the road
var port = process.env.PORT || config.http.port;
app.listen(port);
console.log('node server running on port: ' + port);
