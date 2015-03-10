/**
 * Created by patiernom on 05/03/2015.
 */
module.exports = function(grunt) {
    grunt.registerTask('createCSSFramework','create bootstrap and jquery-ui base framework', function() {
        var taskName = "file-creator",
            cfg = grunt.config(taskName),
            libs = grunt.config('helpers').getLibrary("config").css,
            writeLessImport = function(fs, fd, lib){
                grunt.util._.each(lib, function(file) {
                    fs.writeSync(fd, '@import "'+ file + '";\n');
                });
            },
            createLessImport = (function (source) {
                return function(fs, fd, done){
                    writeLessImport(fs, fd, source);

                    done();
                };
            }),
            operation = {"yooxBootstrap":{},"yooxUiJQuery":{}};

        operation.yooxBootstrap.yooxBootstrapBase = createLessImport(libs.yooxBootstrap.yooxBootstrapBase.srcfiles);

        operation.yooxUiJQuery.yooxUiJQueryAll = function (fs, fd, done) {
            writeLessImport(fs, fd, libs.yooxUiJQuery.yooxUiJQueryAll.srcfiles);

            done();
        };

        operation.yooxUiJQuery.yooxUiJQueryBase = function (fs, fd, done) {
            writeLessImport(fs, fd, libs.yooxUiJQuery.yooxUiJQueryBase.srcfiles);

            done();
        };

        Object.keys(cfg).forEach(function(target) {
            var newCfg = {},
                projectDir = grunt.config('projects').projectDirectory;

            Object.keys(cfg[target]).forEach(function(dest) {
                grunt.log.ok(projectDir + '\\' + libs[target][dest].config);
                if (operation[target][dest]) {
                    newCfg[projectDir + '\\' + libs[target][dest].config] = operation[target][dest];
                }
            });
            grunt.config([taskName, target], newCfg);
        });
        grunt.task.run(taskName);
    });
};