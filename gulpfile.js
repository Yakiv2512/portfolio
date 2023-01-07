// команда для установки всех пакетов:              npm i
// команда для обновления версий пакетов:           npm update --save
// команда для запуска всех пакетов по умолчанию:   gulp
// команда для запуса конкретной задачи:            gulp <task>
// команда для запуска нескольких задач:            gulp <task> <othertask>

const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const sass          = require('gulp-sass')(require('sass'));
const cleanCSS      = require('gulp-clean-css');
const autoprefixer  = require('gulp-autoprefixer');
const rename        = require("gulp-rename");
const imagemin      = require('gulp-imagemin');
const htmlmin       = require('gulp-htmlmin');

// запуск browserSync для папки dist
// слежка за файлом html и перезапуск browserSync при любых изменениях

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// задача по компилированию файлов scss/sass в css

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// слежка за указанными файлами проекта
// запуск задач по переносу файлов в папку dist при:
    // change - изменениях 
    // add - добавлении новых файлов
    // all - всех действиях

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

// по умолчанию (команда "gulp") запускаются все ниже указанные задачи

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));