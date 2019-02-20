var spritesmith = require('gulp.spritesmith'),
    buffer = require('vinyl-buffer'),
    gulpif = require('gulp-if');

var sprite = function(gulp, options, plugins) {

    gulp.task('sprite', function () {
        var spriteData = gulp.src('./' + options.config.paths.spriteImg + '*.png').pipe(spritesmith({
            imgName: 'uxr-sprite-icons.png',
            cssName: '_sprite.scss',
            retinaSrcFilter: [options.config.paths.spriteImg + '*@2x.png'],
            retinaImgName: 'uxr-sprite-icons@2x.png',
            padding: 10,
            cssTemplate: 'sprite.handlebars'
        })).on('error', plugins.notify.onError('Error: <%= error.message %>'));

        return spriteData
            .pipe(buffer())
            .pipe(plugins.notify({message: 'Sprite Completed', onLast: true}))
            .pipe(gulpif('*.png', gulp.dest(options.config.paths.sprite)))
            .pipe(gulpif('*.scss', plugins.header(options.config.banner, {pkg: options.pkg, date: new Date()})))
            .pipe(gulpif('*.scss', gulp.dest(options.config.paths.scss + 'gui/')))

    });

    gulp.start('styles');

};

module.exports = sprite;
