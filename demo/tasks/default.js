/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    grunt.registerTask('default', 'Watches the project for changes, automatically builds them and runs a server.', function() {
        grunt.log.write('Start default task...').ok();
        grunt.task.run(['clean:dist','mkdir','jshint','concat','uglify','createCSSFramework','less','csslint','cssmin','copy','clean:temporary']);
    });
};