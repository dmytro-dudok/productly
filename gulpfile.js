const {task, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');

task('scss', () => {
    return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./css'));
})

task('watch', () => {
    watch('./scss/**/*.scss', 'scss')
})