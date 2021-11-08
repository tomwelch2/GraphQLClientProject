const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("BuildStyles", function(){
    return(
        gulp.src("./public/styles/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/styles"))
    );
});


gulp.task("BuildTypescript", function(){
    let tsProject = ts.createProject("./GraphQLServer/tsconfig.json");
    let tsResult = tsProject.src()
                    .pipe(sourcemaps.init())
                    .pipe(tsProject())
    return tsResult.js.pipe(sourcemaps.write(
        ".",
        {
            includeContent: true,
            sourceRoot: __dirname + "GraphQLServer"
        }
    )).pipe(gulp.dest("./GraphQLServer"))
});

gulp.task("watch", function() {
        gulp.watch("./GraphQLServer/**/*.ts", gulp.series("BuildTypescript"));
        gulp.watch("./public/styles/*.scss", gulp.series("BuildStyles"));
});