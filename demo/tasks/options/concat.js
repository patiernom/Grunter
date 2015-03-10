/**
 * Created by patiernom on 09/03/2015.
 */
module.exports = {
    options: {
        banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        stripBanners: false
    },
    sample: {
        src: [
            'assets/bootstrap-3.3.2/js/alert.js',
            'assets/bootstrap-3.3.2/js/button.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.bootstrap.js'
    }
};