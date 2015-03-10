/**
 * Created by patiernom on 05/03/2015.
 */
module.exports = {
    compileCore: {
        options: {
            strictMath: true,
            sourceMap: true,
            outputSourceFiles: true,
            sourceMapURL: '<%= pkg.name %>.bootstrap.css.map',
            sourceMapFilename: 'dist/css/<%= pkg.name %>.bootstrap.css.map',
            banner: '/*!\n' +
                ' * <%= pkg.name %> v<%= pkg.version %>\n' +
                ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
                ' */\n'
        },
        src: 'assets/bootstrap-3.3.2/less/_bootstrap.less',
        dest: 'dist/css/<%= pkg.name %>.bootstrap.css'
    }
};