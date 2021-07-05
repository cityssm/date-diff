/* eslint-disable node/no-unpublished-import */

import gulp from "gulp";
import replace from "gulp-string-replace";
import aegean from "gulp-aegean";
import babel from "gulp-babel";
import minify from "gulp-minify";

/*
 * Minify public/javascripts
 */

const compileFunction = () => {

  return gulp.src("tmp/date-diff.js", { allowEmpty: true })
    .pipe(aegean())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(gulp.dest("./es2015"))
    .pipe(minify({ noSource: true, ext: { min: ".min.js" } }))
    .pipe(gulp.dest("./es2015"));
};


const prepareTemporaryFileFunction = () => {
  return gulp.src("date-diff.js", { allowEmpty: true })
    .pipe(replace(/import .* from "\.\/utils\.js"/g, "import './utils.js'"))
    .pipe(gulp.dest("./tmp"));
};


const copyUtilsToTemporaryFunction = () => {
  return gulp.src("utils.js", { allowEmpty: true })
    .pipe(gulp.dest("./tmp"));
};


/*
 * Watch
 */

const watchFunction = () => {
  gulp.watch("utils.js", copyUtilsToTemporaryFunction);
  gulp.watch("date-diff.js", prepareTemporaryFileFunction);
  gulp.watch("tmp/date-diff.js", compileFunction);
};

gulp.task("watch", watchFunction);

/*
 * Initialize default
 */

gulp.task("default", () => {
  copyUtilsToTemporaryFunction();
  prepareTemporaryFileFunction();
  compileFunction();
  watchFunction();
});
