import gulp from 'gulp';
import serve from 'gulp-serve';
import del from 'del';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import gif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';
import concat from 'gulp-concat';

import { handleError, liveEnv } from './helpers';

const serveConfig = {
  'rootDir': './',
  'port': '5000'
}

const config = {
  'bundleName': 'index.js',
  'srcDirectory': './src',
  'buildDirectory': './build'
}

gulp.task('serve', serve({
    root: serveConfig.rootDir,
    port: serveConfig.port
  })
);

function clean() {
  return del(config.buildDirectory);
}

function script() {
  return gulp
    .src(`${config.srcDirectory}/*.js`)
    .pipe(babel())
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(gif(!liveEnv, sourcemaps.init()))
    .pipe(concat(config.bundleName))
    .pipe(gif(liveEnv, terser()))
    .pipe(gif(!liveEnv, sourcemaps.write()))
    .pipe(gulp.dest(config.buildDirectory));
}

function watch() {
  gulp.watch(config.srcDirectory, script);
}

const build = gulp.series(clean, script)

exports.clean = clean;
exports.script = script;
exports.build = build;
exports.watch = watch;
exports.default = build;
