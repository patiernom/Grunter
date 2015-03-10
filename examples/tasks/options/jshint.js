module.exports = {
    files: ['Gruntfile.js'], //, 'assets/**/*.js', 'js/**/*.js'
    options: {
        // options here to override JSHint defaults
        globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
        },
        reporter: require('jshint-stylish')
    }
};