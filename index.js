/* jshint node: true */
'use strict';
var HTMLBarsWrapHelpers = require('./lib/htmlbars/wrap-helpers');

module.exports = {
    name: 'ember-cli-hot-loader',
    serverMiddleware: function (config){
      var lsReloader = require('./lib/hot-reloader')(config.options);
      lsReloader.run();
    },
    setupPreprocessorRegistry: function(type, registry) {
      registry.add('htmlbars-ast-plugin', {
        name: "wrap-helpers",
        plugin: HTMLBarsWrapHelpers
      });
    }
};
