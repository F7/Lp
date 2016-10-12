# Lp
`bootstrap`と`npm-scripts`だけを使用して動作するシンプルなwebページテンプレートとWebserverです。

## Concept
- ベースとなるcssフレームワークとして[Bootstrap](http://getbootstrap.com)を使う
- その他cssは custom.cssとして[node-sass](https://www.npmjs.com/package/node-sass)からビルドして使う
- Grunt, Gulpなどの他のタスクランナーはアップデートに依存したくないので使用しない
- Live reloadでhtml, scssのソース修正を検知してリロードするlocal web serverを起動可能


## 環境
#### 1. システム環境 (私のマシンの環境)
- OSX 10.1.6 El Capitan
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


## コマンド / 操作方法
現状、2つのシェルウィンドウを開く必要があります。1つめはsassをwatchして、cssにコンバートするためのウィンドウ（window1）、もうひとつは、ライブリロードするためのローカルWebサーバー用です。

まずwindow1で:
```
npm run watch
```

を叩き、次に、window2で:
```
npm run server
```
を実行してください。`127.0.0.1:8000`のURLで`dist/index.html`が開きます。`src/scss/styles.scss`または`any html files on dist directory`をアップデートすると、scssは`dist/css/custom.css`に変換された上で、それらの変更がライブリロードプロセスに検知され、ページが自動的にリロードされます。


## ネクストステップ（考え中）
- build
- imagemin
- cssmin
