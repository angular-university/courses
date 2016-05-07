

var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
    .then(function(){

        return builder.bundle(
            'app',
            'dist/bundle.js'
        );

    });


