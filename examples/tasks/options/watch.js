module.exports = {
    scripts: {
        files: ['<%= projects.projectDirectory %>/scripts/src/*js'],
        tasks: ['jshint'],
        options: {
            spawn: false
        }
    }
};