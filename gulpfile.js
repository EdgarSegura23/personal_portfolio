//* Module Import
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';

//* Sass compiler configuration
const sass = gulpSass(dartSass);

//TODO: Function Definition: 

//* CSS Function definition
export function css( done ) {
    src('src/scss/app.scss', {sourcemaps:true})
        .pipe( sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps:'.'}) )
    done()
}

//compile fontawesome css
export function fontawesome(done){
    src('src/scss/fontawesome.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe( dest('build/css') )
    done()
}

//* JS Minify
export function js(done) {
    src('src/js/app.js')
        .pipe( terser() )
        .pipe( dest('build/js') )
    done();
}

//* fontawesome js minify
export function fontawesomeJS(done){
    src('src/js/all.js')
        .pipe( terser() )
        .pipe( dest('build/js') )
    done()
}

//* dev Function definition
export function dev() {
    watch('src/scss/**/*.scss', series(css, fontawesome))
    watch('src/js/**/*.js', series(js, fontawesomeJS))
}

export default series(css, fontawesome, js, fontawesomeJS, dev);