var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  cleanCss = require('gulp-clean-css'),
  plugins = require('gulp-load-plugins')();

//---------------检查js文件-----------------

gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

//--------------浏览器自动刷新---------------

gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./src"
  });

  gulp.watch("src/sass/*.scss", ['sass']);
  gulp.watch("src/index.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
  return gulp.src("src/sass/*.scss")
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.sourcemaps.write("./maps"))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});
// 
gulp.task('livereload', ['serve']);

//-----------------检查、压缩js---------------------

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify())
    // .pipe(plugins.concat('src.js'))
    /*.pipe(plugins.rename(function (path) {
      path.basename += '.min';
      return path;
    }))*/
    .pipe(gulp.dest('dist/js'));
});

//------------加前缀、压缩css---------------

gulp.task('mincss', function() {
  return gulp.src('src/css/*.css')
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCss({
      compatibility: 'ie7'
    }))
    .pipe(gulp.dest('dist/css'));
});

//---------------压缩HTML----------------

gulp.task('minhtml', function() {
  return gulp.src('src/*.html')
    .pipe(plugins.htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

//---------------图片压缩----------------

gulp.task('minimg', function() {
  return gulp.src('src/img/**/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/img'));
})

//---------------编译pug------------------

gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
    .pipe(plugins.pug({}))
    .pipe(gulp.dest('src'));
});

gulp.task('default', ['mincss','minhtml','minimg']);
