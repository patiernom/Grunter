/**
 * Created by patiernom on 05/03/2015.
 */
module.exports = {
    "yooxBootstrap": {
        "<%= projects.projectDirectory %>/assets/bootstrap-3.3.2/less/_bootstrap.less": function (fs, fd, done) {
            fs.writeSync(fd, '// this file is auto-generated.  DO NOT MODIFY\n');
            done();
        }
//        "dist/tmp/theme.less": function () {}
    },
    "yooxUiJQuery":{
        "<%= projects.projectDirectory %>/assets/jquery-ui-yoox10/themes/base/_jquery.ui.base.css": function (fs, fd, done) {
            fs.writeSync(fd, '// this file is auto-generated.  DO NOT MODIFY\n');
            done();
        },
        "<%= projects.projectDirectory %>/assets/jquery-ui-yoox10/themes/base/_jquery.ui.all.css": function (fs, fd, done) {
            fs.writeSync(fd, '// this file is auto-generated.  DO NOT MODIFY\n');
            done();
        }
    }
};