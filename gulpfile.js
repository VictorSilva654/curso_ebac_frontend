const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')

function sobeSass(){
    return gulp.src('./source/styles/main.scss').pipe(sass({
        outputStyle: 'compressed'
    }
    )).pipe(gulp.dest('./build/styles'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'))
}

function comprimeImg() {
    return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'))
}

exports.javascript = comprimeJS;
exports.images = comprimeImg;
exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(sobeSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg));
}


