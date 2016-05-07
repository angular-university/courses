System.config({
    map: {
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'app': 'dist',
        'symbol-observable': 'node_modules/symbol-observable'
    },
    packages: {
        '@angular/core': {
            main: 'index'
        },
        '@angular/compiler': {
            main: 'index'
        },
        '@angular/common': {
            main: 'index'
        },
        '@angular/platform-browser': {
            main: 'index'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index'
        },
        'rxjs': {
            main: "Rx"
        },
        'app': {
            main: 'main'
        },
        'symbol-observable': {
            'main':'index'
        }
    }
});
