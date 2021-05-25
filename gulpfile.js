import gulp from "gulp";
import replace from "gulp-string-replace";
import aegean from "gulp-aegean";
import babel from "gulp-babel";
import minify from "gulp-minify";
const compileFn = () => {
    return gulp.src("tmp/date-diff.js", { allowEmpty: true })
        .pipe(aegean())
        .pipe(babel({
        presets: ["@babel/env"]
    }))
        .pipe(gulp.dest("./es2015"))
        .pipe(minify({ noSource: true, ext: { min: ".min.js" } }))
        .pipe(gulp.dest("./es2015"));
};
const prepareTempFileFn = () => {
    return gulp.src("date-diff.js", { allowEmpty: true })
        .pipe(replace(/import .* from \"\.\/utils\.js\"/g, "import './utils.js'"))
        .pipe(gulp.dest("./tmp"));
};
const copyUtilsToTempFn = () => {
    return gulp.src("utils.js", { allowEmpty: true })
        .pipe(gulp.dest("./tmp"));
};
const watchFn = () => {
    gulp.watch("utils.js", copyUtilsToTempFn);
    gulp.watch("date-diff.js", prepareTempFileFn);
    gulp.watch("tmp/date-diff.js", compileFn);
};
gulp.task("watch", watchFn);
gulp.task("default", () => {
    copyUtilsToTempFn();
    prepareTempFileFn();
    compileFn();
    watchFn();
});
