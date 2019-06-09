# Lp
A simple webpage starter template with `bootstrap` and webserver using only `npm-scripts`.

## Announcement
When version upgraded, you need to type `npm install` once again to install newly added packages and run correctly.

## Concept
- Use [Bootstrap](http://getbootstrap.com) as base css framework.
- Other CSS is built as custom.css from [node-sass](https://www.npmjs.com/package/node-sass).
- Do not use other task runners such as Grunt, Gulp, etc.
- Local web server with live reload detecting the file updates of html, scss by [Browsersync](https://browsersync.io/).


## Environment (2019)
#### 1. system environment (of mine)
- OSX 10.14.5 Mojave
- homebrew 2.1.4

#### 2. html/css included environment
- bootstrap 3.3.1 (minimumly included)

#### 3. node / npm environment (of mine)
(Installed from homebrew. Not tested other than latest)
- node v12.4.0
- npm 6.9.0

###### package requirement
- [browser-sync 2.26.7](https://www.npmjs.com/package/browser-sync)
- [node-sass 4.12.0](https://www.npmjs.com/package/node-sass)
- [nodemon 1.19.1](https://www.npmjs.com/package/nodemon)
- [html-minifier 4.0.0](https://www.npmjs.com/package/html-minifier)
- [imagemin 6.1.0](https://www.npmjs.com/package/imagemin)
- [imagemin-cli 4.0.1](https://www.npmjs.com/package/imagemin-cli)
- [imagemin-mozjpeg 8.0.0](https://www.npmjs.com/package/imagemin-mozjpeg)
- [imagemin-pngquant 8.0.0](https://www.npmjs.com/package/imagemin-pngquant)
- [imagemin-gifsicle 6.0.1](https://www.npmjs.com/package/imagemin-gifsicle)
- [imagemin-svgo 7.0.0](https://www.npmjs.com/package/imagemin-svgo)

## Commands / How to run

### Development - Run, Scss Watch
Currently, opening 2 shell windows are required. One is for watching sass to convert to css (window1), the other is for local web server with live reloading (window2).

on window1:
```
npm run watch
```

then open window2 and:
```
npm start
```

so you can see `localhost:3000` as `src/index.html`. When you update `src/scss/styles.scss` or `any html files on dist directory`, the changes are detected by live-reloading process at window2 with scss files converted to `src/css/custom.css`, then the page is automatically reloaded. 


### Build (minifying CSS, HTML, images)
Building all the assets minifying custom.css by using node-sass (with css-compression option), index.html by html-minifier, and images by imagemin. Use the command:
```
npm run build
```
then it will compress src/img/*, src/css/custom.css, src/index.html and save the files to dist/img/*, dist/css/custom.css, dist/index.html. This doesn't combine other css file.

### Check production environment built with miified HTML / CSS files and images
```
npm run Lp
```
Type this command to run build process and production webserver to check out the built HTML on dist directory. You can see `localhost:3000` opened from `dist/index.html` (No live-reloading) with all minified assets.

## Next Steps
- clean all the files when building
- join css files to make one (concat)

## Command Reference
The references of all the commands. Only four commands with (*) at the bottom are good to be used.

| Command  | Description  |
|---|---|
| test | test command to say "Hello World!" |
| build:css-dev | build scss (src/scss/styles.scss) to src/css (src/css/custom.css) |
| watch:css-dev | watching build:css-dev |
| build:css | build scss (src/scss/styles.scss) to dist/css (dist/css/custom.css) |
| minify:customcss | minifying dist/css/custom.css and overwrite |
| minify:html| minifying src/index.html and saving at dist/index.html |
| minify:images | minifying all the images at src/img/* and saving at dist/img/* |
| start-prd | running webserver to localhost:3000 from dist directory with livereloadingoption |
| __watch__ * | shortcut command of watch:css-dev |
| __start__ * | running webserver to localhost:3000 from src directory with livereloading option |
| __build__ * | build:css + minify:customcss + minify:html + minify:images |
| __Lp__ * | build + start-prd |
