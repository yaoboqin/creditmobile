var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');

gulp.task('default', function() {
    var processors = [px2rem({remUnit: 75})];
    return gulp.src('./public/creditmobile/base/css/ionic/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./public/creditmobile/base/css/ionic/dest'));
});