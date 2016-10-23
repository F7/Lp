# Lp
A simple webpage starter template with `bootstrap` and webserver using only `npm-scripts`.

## Announcement
When version upgraded, you need to type `npm install` once again to install newly added packages and run correctly.

## Concept
- Use [Bootstrap](http://getbootstrap.com) as base css framework.
- Other CSS is built as custom.css from [node-sass](https://www.npmjs.com/package/node-sass).
- Do not use other task runners such as Grunt, Gulp, etc.
- Local web server with live reload detecting the file updates of html, scss.


## Environment
#### 1. system environment (of mine)
- OSX 10.11.6 El Capitan
- homebrew 0.9.9

#### 2. html/css included environment
- bootstrap 3.3.1 (minimumly included)

#### 3. node / npm environment (of mine)
(Installed from homebrew. Not tested other than latest)
- node v6.7.0
- npm 3.10.3

###### package requirement
- [lr-http-server 0.1.5](https://www.npmjs.com/package/lr-http-server)
- [node-sass 3.10.1](https://www.npmjs.com/package/node-sass)
- [nodemon 1.11.0](https://www.npmjs.com/package/nodemon)
- [yuicompressor 2.4.8](https://www.npmjs.com/package/yuicompressor)
- [html-minifier 3.1.0](https://www.npmjs.com/package/html-minifier)
- [imagemin 5.2.2](https://www.npmjs.com/package/imagemin)
- [imagemin-cli 3.0.0](https://www.npmjs.com/package/imagemin-cli)

## Commands / How to run

### Development - Run, Scss Watch
Currently, opening 2 shell windows are required. One is for watching sass to convert to css (window1), the other is for local web server with live reloading (window2).

on window1:
```
npm run watch
```

then open window2 and:
```
npm run server
```

so you can see `127.0.0.1:8080` as `src/index.html`. When you update `src/scss/styles.scss` or `any html files on dist directory`, the changes are detected by live-reloading process at window2 with scss files converted to `src/css/custom.css`, then the page is automatically reloaded.


### Build (minifying CSS, HTML, images)
Building all the assets minifying custom.css by using yuicompressor, index.html by html-minifier, and images by imagemin. Use the command:
```
npm run build
```
then it will compress src/img/*, src/css/custom.css, src/index.html and save the files to dist/img/*, dist/css/custom.css, dist/index.html. This doesn't combine other css file.

### Check production environment built with miified HTML / CSS files and images
```
npm run Lp
```
Type this command to run build process and production webserver to check out the built HTML on dist directory. You can see `127.0.0.1:8000` opened from `dist/index.html` (No live-reloading) with all minified assets.

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
| server-prd | running webserver to 127.0.0.1:8000 from dist directory (no live-reloading) |
| __watch__ * | shortcut command of watch:css-dev |
| __server__ * | running webserver to 127.0.0.1:8080 from src directory with livereloading at :35729 |
| __build__ * | build:css + minify:customcss + minify:html + minify:images |
| __Lp__ * | build + server-prd |

## Run with Docker
Install Docker for Mac (https://docs.docker.com/docker-for-mac/)

```
$ docker-compose up -d

$ open http://localhost:8080
```
