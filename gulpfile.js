var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel')

gulp.task('default', ['collect'], () => {})

gulp.task('collect', () => {
  gulp.src([
    'collect/ajax.js',
    'collect/CustomEvent.js',
    'collect/bundle.js',
    'collect/error.js',
    'collect/onload.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["@babel/env"],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(concat('collect.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})