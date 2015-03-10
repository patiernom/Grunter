module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../demo/example',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha','chai'],


        // list of files / patterns to load in the browser
        files: [
            'src/*.js',
            'tests/*.js'
        ],


        // list of files to exclude
        exclude: [
            '**/*.swp'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        reporters: ['progress', 'html', 'coverage', 'junit'],

        junitReporter: {
            outputFile: '../demo/tests/testReport/test-results.xml',
            suite: ''
        },

        coverageReporter : {
            type : 'html',
            dir : '../demo/tests/testReport/coverage/'
        },

        htmlReporter: {
            outputFile: '../demo/tests/testReport/result.html'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows) ,'C:\\Program\ Files\ \(x86\)\\Core\ Services\\IETester\\IETester.exe'
        // SET JAVA_HOME:C:\Program Files\Java\jre7\bin
        browsers: ['PhantomJS','Chrome'],

        // Use this to add custom launchers for example IETester
        customLaunchers: {},

        // list of plugins
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-htmlfile-reporter'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};