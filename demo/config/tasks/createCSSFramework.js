/**
 * Created by patiernom on 05/03/2015.
 */
module.exports = function(grunt) {
    grunt.registerTask('createCSSFramework','create bootstrap base framework', function() {
        var taskName = "file-creator",
            operation = {"sample":{}},
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
            });

        operation.sample.samplelessvariables = createLessImport(libs.sample.samplelessvariables.srcfiles);

        Object.keys(cfg).forEach(function(target) {
            var newCfg = {},
                projectDir = grunt.config('projects').projectDirectory;

            Object.keys(cfg[target]).forEach(function(dest) {
                if (operation[target][dest]) {
                    newCfg[projectDir + '/' + libs[target][dest].config] = operation[target][dest];
                }
            });
            grunt.config([taskName, target], newCfg);
        });
        grunt.task.run(taskName);
    });
};