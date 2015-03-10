/**
 * Created by patiernom on 09/03/2015.
 */
module.exports =  {
    options: {
        banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        report: 'min',
        sourceMap: true,
        preserveComments: 'some'
    },
    sample: {
        src: 'dist/js/<%= pkg.name %>.bootstrap.js',
        dest: 'dist/js/<%= pkg.name %>.bootstrap.min.js'
    }

};