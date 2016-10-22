# Lp
`bootstrap`と`npm-scripts`だけを使用して動作するシンプルなwebページテンプレートとWeb serverです。


## お知らせ
バージョン0.2.0から0.3.0にアップグレードする際には、正しく動作するために、もう一度`npm install`をして、新しく追加されたスクリプト（html-minifier）をインストールしてください。


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

## コマンド / 操作方法

### 開発 - サーバー起動, Scssのウォッチ
現状、2つのシェルウィンドウを開く必要があります。1つめはsassをwatchして、cssにコンバートするためのウィンドウ（window1）、もうひとつは、ライブリロードするためのローカルWebサーバー用（window2）です。

まずwindow1で、
```
npm run watch
```

でSassをwatchし、次に、window2で、
```
npm run server-dev
```
を実行してください。`127.0.0.1:8080`のURLで`src/index.html`が開きます。`src/scss/styles.scss`またはsrcディレクトリ内のHTMLファイルをアップデートすると、scssは`src/css/custom.css`に変換された上で、それらの変更がライブリロードプロセスに検知され、ページが自動的にリロードされます。

### HTML、CSSをminifyしてビルドする
現状、yuicompressorを使ってsrc配下のcustom.cssをminify、またhtml-minifierを使ってHTMLをminifyした圧縮ファイルをdist配下に保存します。
```
npm run build
```
を使用すると、yuicompressorによって`src/css/custom.css`が圧縮されて`dist/css/custom.css`に、html-minifierによって`src/index.html`が圧縮されて`dist/index.html`に保存されます。現時点では他のcssファイルを結合したりすることはできません。

### ビルド後の圧縮されたHTML、CSSを確認する
```
npm run server
```
このコマンドは最終確認用にビルドされたHTMLを確認します。`127.0.0.1:8000`のURLで`dist/index.html`が開きます。(ライブリロードはしません)


## ネクストステップ（考え中）
- imagemin
- 複数のcssファイルを圧縮しつつ結合して1ファイルにする
