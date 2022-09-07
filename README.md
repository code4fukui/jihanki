# jihanki

## 緯度経度EXIFデータ付きで自販機写真

- CSVデータ [https://code4fukui.github.io/jihanki/jihanki.csv](https://code4fukui.github.io/jihanki/jihanki.csv)
- 写真データ [img/](img/) 写真フォーマット縦長 横幅1024px
- アイコンデータ [icon/](icon/) 写真フォーマット縦長 横幅122px

## データ追加方法

1. 位置情報付き写真を img/ におく (幅1024px)
2. サムネイル(幅122px)を icon/ におく
3. `deno run -A makecsv.js` を実行

## 貢献の仕方

- 写真への位置情報を追加を「ON」にして、自販機の写真を撮って、[Issues](https://github.com/code4fukui/jihanki/issues) へアップまたはプルリクください！
- より使いやすいアプリへのアイデアをください [Issues](https://github.com/code4fukui/jihanki/issues)

## サンプルアプリ

- [自販機マップ](https://code4fukui.github.io/jihanki/)
- [メガネストリート沿いの自販機マップ](https://code4fukui.github.io/jihanki/meganestreet.html)

## 参考

- JPEG写真データのEXIFから緯度経度を取り出すライブラリ [EXIF.js](https://github.com/taisukef/exif-js) 使用 (参考 [csv-map.js](https://code4fukui.github.io/csv-map/csv-map.js))
