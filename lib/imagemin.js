const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
imagemin(['src/img/*.{jpg,png,gif,svg}'], 'dist/img', {
    plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.65, 0.8] }),
        imageminGifsicle(),
        imageminSvgo()
    ]
}).then(() => {
    console.log('Images optimized');
});