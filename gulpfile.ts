import gulp from "gulp";
import aegean from "gulp-aegean";
import babel from "gulp-babel";
import minify from "gulp-minify";

/*
 * Minify public/javascripts
 */

const compileFn = () => {

  return gulp.src("date-diff.js", { allowEmpty: true })
    .pipe(aegean())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(gulp.dest("./es2015"))
    .pipe(minify({ noSource: true, ext: { min: ".min.js" } }))
    .pipe(gulp.dest("./es2015"));
};


gulp.task("compile-browser", compileFn);

/*
 * Watch
 */

const watchFn = () => {
  gulp.watch("date-diff.js", compileFn);
};

gulp.task("watch", watchFn);

/*
 * Initialize default
 */

gulp.task("default", () => {
  compileFn();
  watchFn();
});
