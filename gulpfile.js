const gulp = require('gulp');
const connect = require('gulp-connect');

const jsSources = ['src/*.js'];
const htmlSources = ['**/*.html'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('dev', ['html', 'js', 'connect', 'watch']);