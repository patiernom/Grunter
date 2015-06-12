/**
 * Grunter
 * This is a project for build javscript, css, image and others assets files
 * version: 1.0.0
 * Author: Marco Patierno marco_patierno@msn.com
 * License: MIT
 */

module.exports = function(grunt) {
    'use strict';

    // Initial config
    var packageJSON = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: packageJSON,
        projects: require('grunter-projects')(packageJSON),  // Project configuration.
        helpers: require('grunter-helpers') // helper library.
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