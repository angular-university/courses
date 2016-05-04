var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
  .then(function(){
	  return builder.bundle(
          'app - [app/**/*]', // build app and remove the app code - this leaves only 3rd party dependencies
          'dist/libs-bundle.js');
  })
  .then(function(){
	  console.log('library bundles built successfully!');
  });
