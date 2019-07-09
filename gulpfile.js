var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel')

gulp.task('default', ['collect'], () => {})

gulp.task('collect', () => {
  gulp.src([
    'collect/CustomEvent.js',
    'collect/bundle.js',
    'collect/error.js',
    'collect/onload.js'
  ])
    .pipe(babel({
      presets: ['es2015'] // es5检查机制
    }))
    .pipe(concat('collect.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})