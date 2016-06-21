System.config({
    map: {
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'app': 'dist'
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
        '@angular/forms': {
            main: 'index'
        },
        'rxjs': {
            main: "Rx"
        },
        'app': {
            main: '01-mvc-hello-world/hello_world'
        }
    }
});
