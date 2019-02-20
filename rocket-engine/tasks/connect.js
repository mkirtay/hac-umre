/**
 * @author Bilal Cinarli
 */

var connect = function(gulp, options, plugins) {
    var modRewrite = require('connect-modrewrite');

    gulp.task('connect', function() {
        plugins.connect.server({
            root:       [options.config.paths.app],
            livereload: options.config.server.livereload,
            port:       options.config.server.port,
            debug:      options.config.server.debug,
            middleware: function(connect, opt) {
                if(options.config.server.routes) {
                    return [
                        modRewrite(options.config.server.routes)
                    ];
                }
            }
        });
    });
};

module.exports = connect;