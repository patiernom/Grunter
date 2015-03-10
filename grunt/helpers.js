/**
 * Created by Marco on 08/05/2014.
 */
var grunt = require('grunt'),
    path = require('path'),
    helpers = {
        getLibrary: function (name) {
            var projects = grunt.config('projects'),
                file = projects.projectDirectory +
                projects.projectConfig +
                '/' + projects.projectConfigFiles[projects.projectConfigFiles.indexOf(name + ".json")];

//            grunt.log.ok('Load lib ' + file);

            return grunt.file.readJSON(path.resolve(file));
        }
    };
//
//Helpers.getSourceOfLibrary = function(){
//    var returnObject = [];
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject.push(getSourceFiles(this.globals.rootdirectory, this.libraries[k].srcfiles));
//        }
//    }
//    return returnObject;
//};
//
//Helpers.getDestinationOfLibrary = function(){
//    var returnObject = [];
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject.push(this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir);
//        }
//    }
//    return returnObject;
//};
//
//Helpers.listOfSourceLibrary = function(){
//    var returnObject = {};
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject[k] = {
//                src: getSourceFiles(this.globals.rootdirectory, this.libraries[k].srcfiles),
//                dest: this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir + '/' + this.libraries[k].libname + '.js',
//                nonull: true
//            };
//        }
//    }
//    return returnObject;
//};
//
//Helpers.listOfLibrary = function(){
//    var returnObject = {};
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject[k] = {
//                src: this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir + '/' + this.libraries[k].libname + '.js',
//                dest: this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir + '/' + this.libraries[k].libname + '.min.js',
//                nonull: true
//            };
//        }
//    }
//    return returnObject;
//};
//
//Helpers.listOfArtifactsLibrary = function(){
//    var returnObject = {};
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject[k] = {
//                src: this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir + '/' + this.libraries[k].libname + '.min.js',
//                dest: this.globals.rootdirectory + this.globals.outputdirectory + '/' + this.libraries[k].destdir,
//                nonull: true
//            };
//        }
//    }
//    return returnObject;
//};
//
//Helpers.listOfAssets = function(opts){
//    var returnObject = {};
//    for (var k in this.libraries) {
//        if (this.libraries.hasOwnProperty(k)) {
//            returnObject[k] = {
//                options: opts
//            };
//        }
//    }
//    return returnObject;
//};

module.exports = helpers;