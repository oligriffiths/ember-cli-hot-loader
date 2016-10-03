/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-hot-loader',
    serverMiddleware: function (config){
        var lsReloader = require('./lib/hot-reloader')(config.options);
        lsReloader.run();
    }
};
