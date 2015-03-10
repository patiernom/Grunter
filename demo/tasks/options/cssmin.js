/**
 * Created by patiernom on 05/03/2015.
 */
module.exports = {
    options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
    },
    minifyCore: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
    }

};