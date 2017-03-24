(function (global) {

    //map tells the System loader where to look for things
    var map = {

        '@angular': '/node_modules/@angular', // sufficient if we didn't pin the version
        '@angular/router': '/node_modules/@angular/router' ,
        '@angular/forms': '/node_modules/@angular/forms',
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router-deprecated',
        'upgrade',
        'forms',
        'router'
    ];

    // Add map entries for each angular package
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = '/node_modules/@angular/' + pkgName;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {

        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};

        // Individual files (~300 requests):
        //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    document.SYSTEMJS_CONFIG = config;

})(this);

