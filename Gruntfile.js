/**
 * Created by Marco on 08/05/2014.
 */
module.exports = function(grunt) {
    'use strict';

    // Initial config
    var packageJSON = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: packageJSON,
        projects: require('./grunt/projects')(packageJSON),  // Project configuration.
        helpers: require('./grunt/helpers') // helper library.
    });

    // Load tasks from the tasks folder
    grunt.loadTasks(grunt.config('projects').getProjectTasks());

    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.config.merge(grunt.config('projects').getProjectTaskOptions());

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
};