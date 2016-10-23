# Lp
`bootstrap`と`npm-scripts`だけを使用して動作するシンプルなwebページテンプレートとWeb serverです。


## お知らせ
バージョンアップグレードする際には、正しく動作するために、もう一度`npm install`を行い、新しく追加されたパッケージをインストールしてください。


## コンセプト
- ベースとなるcssフレームワークとして[Bootstrap](http://getbootstrap.com)を使う
- その他cssは custom.cssとして[node-sass](https://www.npmjs.com/package/node-sass)からビルドして使う
- Grunt, Gulpなどの他のタスクランナーはアップデートに依存したくないので使用しない
- Live reloadでhtml, scssのソース修正を検知してリロードするlocal web serverを起動可能


## 環境
#### 1. システム環境 (私のマシンの環境)
- OSX 10.11.6 El Capitan
- homebrew 0.9.9

#### 2. 内包するhtml/cssの環境
- bootstrap 3.3.1 (minimumly included)

#### 3. node / npmの環境 (私のマシンの環境) - homebrewからインストール。最新のものしか動作確認していません
- node v6.7.0
- npm 3.10.3

###### packageの環境
- [lr-http-server 0.1.5](https://www.npmjs.com/package/lr-http-server)
- [node-sass 3.10.1](https://www.npmjs.com/package/node-sass)
- [nodemon 1.11.0](https://www.npmjs.com/package/nodemon)
- [yuicompressor 2.4.8](https://www.npmjs.com/package/yuicompressor)
- [html-minifier 3.1.0](https://www.npmjs.com/package/html-minifier)
- [imagemin 5.2.2](https://www.npmjs.com/package/imagemin)
- [imagemin-cli 3.0.0](https://www.npmjs.com/package/imagemin-cli)

## コマンド / 操作方法

### 開発 - サーバー起動, Scssのウォッチ
現状、2つのシェルウィンドウを開く必要があります。1つめはsassをwatchして、cssにコンバートするためのウィンドウ（window1）、もうひとつは、ライブリロードするためのローカルWebサーバー用（window2）です。

まずwindow1で、
```
npm run watch
```

でSassをwatchし、次に、window2で、
```
npm run server
```
を実行してください。`127.0.0.1:8080`のURLで`src/index.html`が開きます。`src/scss/styles.scss`またはsrcディレクトリ内のHTMLファイルをアップデートすると、scssは`src/css/custom.css`に変換された上で、それらの変更がライブリロードプロセスに検知され、ページが自動的にリロードされます。

### ビルドする（CSS, HTML, 画像をminify）
現状、yuicompressorを使ってsrc配下のcustom.cssをminify、またhtml-minifierを使ってHTMLをminifyした圧縮ファイルをdist配下に保存します。
```
npm run build
```
を使用すると、yuicompressorによって`src/css/custom.css`が圧縮されて`dist/css/custom.css`に、html-minifierによって`src/index.html`が圧縮されて`dist/index.html`に保存されます。（現時点では他のcssファイルを結合したりすることはできません。）

### ビルド後の圧縮されたHTML、CSS、画像を、Production環境で確認する
```
npm run Lp
```
このコマンドはビルドプロセスを走らせ、HTML / CSS / 画像を圧縮した後、最終確認用にビルドされたHTMLを確認します。`127.0.0.1:8000`のURLで`dist/index.html`が開きます。(ライブリロードはしません)


## ネクストステップ
- ビルド時に、dist内のファイルをすべてcleanしてから、srcから持ってくる
- 複数のcssファイルを圧縮しつつ結合して1ファイルにする (concat)


## コマンドリファレンス
上記で説明したコマンド以外の説明も含む、全コマンドのリファレンスです。下部の4つの(*)がついたもののみを使うだけで、支障なく作業できます。

| Command  | Explanation  |
|---|---|
| test | テストコマンド。「Hello, World!」を標準出力します |
| build:css-dev | scss (src/scss/styles.scss) を src/css (src/css/custom.css)にビルドして保存します |
| watch:css-dev | build:css-devを監視します |
| build:css | scss (src/scss/styles.scss) を dist/css (dist/css/custom.css)にビルドして保存します |
| minify:customcss | dist/css/custom.css をminifyして上書き保存します |
| minify:html| src/index.html をminifyして dist/index.htmlに保存します |
| minify:images | src/img/* 内の全ての画像ファイルをminifyして dist/img/*に保存します |
| server-prd | dist/index.htmlを 127.0.0.1:8000にライブリロードなしでwebserverとして起動します |
| __watch__ * | watch:css-devのショートカットコマンド。scssの保存を監視し、src/css/custom.cssに展開します |
| __server__ * | src/index.htmlを 127.0.0.1:8080にwebserverとして起動し、35729ポートで監視してライブリロードします（制作用） |
| __build__ * | build:css + minify:customcss + minify:html + minify:images。srcディレクトリ内のCSS, HTML, 画像をminifyしてdistに保存します。 |
| __Lp__ * | build + server-prd。全ビルド工程を行った後、dist/index.htmlをwebserverとして起動します（最終確認用） |

## Dockerで機能
Docker for Macをインストールします。(https://docs.docker.com/docker-for-mac/)

```
$ docker-compose up -d
$ open http://localhost:8080

$ docker-compose logs -f
```
