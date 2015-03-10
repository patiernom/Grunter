/**
 * Created by Marco on 08/05/2014.
 */
"use strict";

var grunt = require('grunt'),

// Utility to get options from command line
    getOptions = function (opt) {
        return grunt.option(opt);
    },

// Utility to load the different option files
// based on their names
    loadConfig = function (dir) {
        var glob = require('glob'),
            object = {},
            key;

        glob.sync('*', {cwd: dir}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(dir + option);
        });

        return object;
    },

    getProjectOptions = function (source, name) {
        var fs = require('fs'),
            path = require('path'),
            projectOpts,
            projectConfig = [];

        if (fs.existsSync(source)) {
            projectOpts = grunt.file.readJSON(source);
            if (projectOpts.hasOwnProperty(name)) {
                projectConfig[0] = projectOpts[name].name;
                projectConfig[1] = projectOpts[name].rootDirectory;
                projectConfig[2] = projectOpts[name].configuration.base;
                projectConfig[3] = projectConfig[1] + projectConfig[2] + projectOpts[name].configuration.tasks.task;
                projectConfig[4] = projectConfig[3] + projectOpts[name].configuration.tasks.option;
                projectConfig[5] = projectOpts[name].configuration.files;
            }
        }

        return {
            projectName: projectConfig[0],
            projectDirectory: projectConfig[1],
            projectConfig: projectConfig[2],
            projectTasks: projectConfig[3],
            projectTasksOpts: projectConfig[4],
            projectConfigFiles: projectConfig[5],
            projectPkg: projectConfig[1] + '/package.json',
            processPkg: path.resolve('package.json'),
            getProjectTasks: function () {
                return path.resolve(this.projectTasks);
            },
            getProjectTaskOptions: function () {
                return loadConfig(path.resolve(this.projectTasksOpts) + '\\');
            }
        };
    };


module.exports = function (pkg) {
    return getProjectOptions(
            pkg.projectsConfig,
            getOptions('project') || 'default')
        || {};
};