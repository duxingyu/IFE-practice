var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCss = require('gulp-clean-css'),
    plugins = require('gulp-load-plugins')();

//---------------检查js文件-----------------

gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

//--------------浏览器自动刷新---------------

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/index.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src("app/sass/*.scss")
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.sourcemaps.write("./maps"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});
// 
gulp.task('livereload', ['serve']);

//-----------------检查、压缩js---------------------

gulp.task('js', function() {
    return gulp.src('app/js/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.uglify())
        // .pipe(plugins.concat('app.js'))
        /*.pipe(plugins.rename(function (path) {
            path.basename += '.min';
            return path;
        }))*/
        .pipe(gulp.dest('dist/js'));
});

//------------加前缀、压缩css---------------

gulp.task('mincss', function() {
    return gulp.src('app/css/*.css')
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
    return gulp.src('app/*.html')
        .pipe(plugins.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

//---------------图片压缩----------------

gulp.task('minimg', function() {
    return gulp.src('app/img/**/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('dist/img'));
})

//---------------编译pug------------------

gulp.task('pug', function() {
    return gulp.src('app/pug/*.pug')
        .pipe(plugins.pug({}))
        .pipe(gulp.dest('app'));
});

gulp.task('default', ['mincss','minhtml','minimg']);
