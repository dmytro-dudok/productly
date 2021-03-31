const {task, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');


task('scss', () => {
    return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.reload({stream: true});
})

task('watch', () => {
    watch('./scss/**/*.scss', 'scss')
})
