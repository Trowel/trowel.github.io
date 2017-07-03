'use strict';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const reportError = function(err) {
    $.notify({
        title: 'An error occured with a gulp task',
    }).write(err);

    console.log(err.toString());
    this.emit('end');
}

const config = {
    'sass': {
        precision: 6,
        outputStyle: 'expanded',
        sourceComments: true,
        indentWidth: 4,
    },
    'autoprefixer': {
        browsers: [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ]
    },
}

gulp.task('styles', () => {
    return gulp.src('./style/main.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sassGlob())
        .pipe($.sass(config.sass)).on('error', reportError)
        .pipe($.autoprefixer(config.autoprefixer))
        .pipe($.sourcemaps.write())
        .pipe($.cssmin())
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('default', ['styles']);

gulp.task('watch', ['default'], () => {
    gulp.watch('./style/**/*.{scss, css}', ['styles']);
});




