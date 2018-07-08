const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('linter', function() {
    return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());

});