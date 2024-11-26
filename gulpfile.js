//* Module Import
import { src, dest, watch } from 'gulp';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

//* Sass compiler configuration
const sass = gulpSass(dartSass);

//TODO: Function Definition: 

//* CSS Function definition
export function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )
    done()
}

//* dev Function definition
export function dev() {
    watch('src/scss/**/*.scss', css)
}
