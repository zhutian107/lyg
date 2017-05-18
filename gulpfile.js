var gulp = require('gulp');
// var cssNano = require('gulp-cssnano');
var htmlMin = require('gulp-htmlmin');
//浏览器同步
var browser = require('browser-sync');

//css  压缩
// gulp.task('style',function () {
    // gulp.src('./src/css/*.css')
    // .pipe(cssNano())   
    // .pipe(gulp.dest('./dist/css'))
    // .pipe(browser.reload({
          // stream: true
        // }));
// });
//html 压缩
gulp.task('html',function () {
	// var options = {
 //        removeComments: true,//清除HTML注释
 //        collapseWhitespace: true,//压缩HTML
 //        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
 //        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
 //        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
 //        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
 //        minifyJS: true,//压缩页面JS
 //        minifyCSS: true//压缩页面CSS
 //    } 
	gulp.src('./src/*.html')
	// .pipe(htmlMin(options))	//压缩
	.pipe(gulp.dest('./src'))
	.pipe(browser.reload({
          stream: true
        }))
});
//js  合并和压缩
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// gulp.task('js',function () {
	// gulp.src('src/js/*.js')
	// .pipe(concat('all.js'))//合并
	// .pipe(uglify())	//压缩
	// .pipe(gulp.dest('src/js'))
	// .pipe(browser.reload({
          // stream: true
        // }));
// });
//images  图片压缩
// var image = require('gulp-imagemin');//无网的图片压缩
// var image = require('gulp-smushit');//有网的图片压缩
// gulp.task('img',function () {
	// gulp.src(['src/images/*.png','src/images/*.jpg'])
	// .pipe(image())
	// .pipe(gulp.dest('src/images'))
// });
//sass 编译
var sass = require('gulp-sass');
gulp.task('sass',function(){
	gulp.src('src/css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
    .pipe(browser.reload({
          stream: true
        }));
})
//监听
gulp.task('service',function () {
    browser({
            server: {baseDir: ['dist/']}
        }, function(err, bs) {
            console.log(bs.options.getIn(["urls", "local"]));
    });
	// gulp.watch('src/css/*.css',['style']);
	// gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/*.html',['html']);
	gulp.watch('src/css/*.scss',['sass']);
});
gulp.task('mainTask',['sass','html','service']);