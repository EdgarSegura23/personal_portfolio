//* Module Import
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';

//* Sass compiler configuration
const sass = gulpSass(dartSass);

//TODO: Function Definition: 

//* Copy Boxicons CSS
export function copyBoxiconsCss(done) {
    src("node_modules/boxicons/css/boxicons.min.css")
        .pipe( dest('build/css') );
    done();
}

//* CSS Function definition
export function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css') )
    done()
}

//* Copy Boxicons js
export function copyBoxiconsJs(done) {
    src("node_modules/boxicons/dist/boxicons.js")
        .pipe( terser() )
        .pipe(dest("build/js"));
    done();
}

export function js(done) {
    src('src/js/app.js')
        .pipe( terser() )
        .pipe( dest('build/js') )
    done();
}

//* dev Function definition
export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(copyBoxiconsCss, css, copyBoxiconsJs, js, dev);