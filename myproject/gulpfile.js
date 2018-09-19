const gulp = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var csscomb = require("gulp-csscomb");
var cleanCSS = require('gulp-clean-css');
var cache = require('gulp-cached');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');
var mozjpeg  = require('imagemin-mozjpeg');
var svgmin = require('gulp-svgmin');



//sassのコンパイル
gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
      .pipe(autoprefixer({
            //メジャーブラウザの最新の2バージョンに対応
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(sourcemaps.write('maps'))
      //.pipe(csscomb())→これをいれると出力されるCSSがくずれる
      .pipe(cache( 'sass' ))
      .pipe(gulp.dest('css'));
});

//watch
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('default', ['watch']);



//css圧縮
gulp.task('minify-css', function() {
    return gulp.src("css/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/min'));
});

//JS圧縮
gulp.task('minify-js', function() {
    return gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('js/min'));
});

//画像圧縮
gulp.task('imagemin', function () {
    gulp.src('img_org/*.{png,jpg,svg}')
        .pipe(imagemin([
       pngquant({
         quality: '65-80',
         speed: 1,
         floyd:0
       }),
       mozjpeg({
         quality:85,
         progressive: true

       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
     ))
        .pipe(gulp.dest('img'));
});
