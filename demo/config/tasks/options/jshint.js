module.exports = {
    options: {
        jshintrc: 'js/.jshintrc',
        reporter: require('jshint-stylish'),
        force:true
    },
    grunt: {
        options: {
            jshintrc: 'grunt/.jshintrc'
        },
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};