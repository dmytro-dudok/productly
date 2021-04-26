const { task, src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

task("html", () => {
  return src("./app/*.html").pipe(browserSync.reload({ stream: true }));
});

task("scss", () => {
  return src("./app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserList: ["last 8 versions"],
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

task("js", () => {
  return src("./app/js/**/*.js").pipe(browserSync.reload({ stream: true }));
});

task("slick", () => {
  return src("node_modules/slick-carousel/slick/slick.min.js")
    .pipe(dest("./app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./app/",
    },
  });
});

task("watch", () => {
  watch("./app/scss/**/*.scss", parallel("scss"));
  watch("./app/*.html", parallel("html"));
  watch("./app/js/**/*.js", parallel("js"));
});

task("default", parallel(["scss", "html", "js", 'slick', "browser-sync", "watch"]));
