# Lp
A simple webpage starter template with `bootstrap` and webserver using only `npm-scripts`.


## Concept
- Use [Bootstrap](http://getbootstrap.com) as base css framework.
- Other CSS is built as custom.css from [node-sass](https://www.npmjs.com/package/node-sass).
- Do not use other task runners such as Grunt, Gulp, etc.
- Local web server with live reload detecting the file updates of html, scss.


## Environment
#### 1. system environment (of mine)
- OSX 10.1.6 El Capitan
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


## Commands / How to run
Currently, opening 2 shell windows are required. One is for watching sass to convert to css (window1), the other is for local web server with live reloading (window2).

on window1:
```
npm run watch
```

then open window2 and:
```
npm run server
```

so you can see `127.0.0.1:8000` as `dist/index.html`. When you update `src/scss/styles.scss` or `any html files on dist directory`, the changes are detected by live-reloading process at window2 with scss files converted to `dist/css/custom.css`, then the page is automatically reloaded.


## Next Steps
- build
- imagemin
- cssmin
