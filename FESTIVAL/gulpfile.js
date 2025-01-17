import {src, dest,watch} from 'gulp'
import *  as dartSaas from 'sass'
import gulpSass from 'gulp-sass'
 
 const sass = gulpSass(dartSaas);

 export function css(done){
    src('src/scss/app.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(dest('dist/css'))
    
    done();
 }
 export function dev(){
watch('src/scss/**/*.scss',css)

 }
