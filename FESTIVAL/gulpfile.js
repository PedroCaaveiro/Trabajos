import {src, dest,watch, series} from 'gulp'
import *  as dartSaas from 'sass'
import gulpSass from 'gulp-sass'
 
 const sass = gulpSass(dartSaas);

 export function js(done){

   src('src/js/script.js')
   .pipe(dest('dist/js'))
   done()
 }
 export function css(done){
    src('src/scss/app.scss', {sourcemaps: true})
    .pipe(sass().on('error',sass.logError))
    .pipe(dest('dist/css', {sourcemaps:true}))
    
    done();
 }
 export function dev(){
watch('src/scss/**/*.scss',css)
watch('src/js/**/*.js',js)

 }

 export default series(js,css, dev)
