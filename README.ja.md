# jihanki

日本における自動販売機のオープンデータをクラウドソーシングで収集・提供するプロジェクトです。ジオタグ付き写真とCSVファイルが含まれており、地図アプリケーションの作成に最適です。

## デモ

- [自動販売機マップ](https://code4fukui.github.io/jihanki/)
- [メガネストリート沿いの自動販売機](https://code4fukui.github.io/jihanki/meganestreet.html)

## 特徴

- クラウドソーシングによるジオタグ付き自動販売機写真の収集。
- EXIFデータからの緯度・経度の自動抽出。
- 複数フォーマットでのデータ提供:
  - **CSV:** 座標と画像へのリンクを含む `jihanki.csv`。
  - **画像:** フルサイズ写真（幅1024px、縦向き）。
  - **アイコン:** サムネイル画像（幅122px、縦向き）。
- `<csv-map>` のようなWebマッピングコンポーネントとの容易な連携。

## データの利用方法

以下のURLから直接データにアクセスできます。

- **CSVデータ:** [https://code4fukui.github.io/jihanki/jihanki.csv](https://code4fukui.github.io/jihanki/jihanki.csv)
- **写真データ:** [img/](img/)（ホスト先: `https://code4fukui.github.io/jihanki/img/`）
- **アイコンデータ:** [icon/](icon/)（ホスト先: `https://code4fukui.github.io/jihanki/icon/`）

### 例: JavaScriptでのデータ取得

WebブラウザでCSVデータを取得してパースする方法は以下の通りです:

```javascript
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://code4fukui.github.io/jihanki/jihanki.csv";
const data = CSV.toJSON(await CSV.fetch(url));
console.log(data);
/*
[
  {
    "icon": "icon/IMG_2299.jpg",
    "photo": "https://code4fukui.github.io/jihanki/img/IMG_2299.jpg",
    "lat": "35.943322",
    "lng": "136.195267"
  },
  ...
]
*/
```

## 貢献方法

本プロジェクトはコミュニティ主導のプロジェクトであり、皆様からのコントリビューションを歓迎しています！

- **写真の提供:** スマートフォンの位置情報サービス（GPS）を有効にして自動販売機の写真を撮影し、新しい[GitHub Issue](https://github.com/code4fukui/jihanki/issues)にアップロードしてください。
- **プルリクエストの作成:** Gitに慣れている方は、ご自身で写真を追加し、更新スクリプトを実行していただくことも可能です。詳細は以下のセクションをご覧ください。
- **アイデアの共有:** プロジェクトを改善するアイデアがあれば、[Issue](https://github.com/code4fukui/jihanki/issues)を開いてディスカッションしましょう。

## データセットの更新

このセクションは、ソース画像からCSVファイルを更新したいメンテナーやコントリビューター向けの手順です。

### 要件

- [Deno](https://deno.land/) ランタイム

### 手順

1.  新しいジオタグ付きJPEG写真（幅1024px、縦向き）を `img/` ディレクトリに追加します。
2.  対応するサムネイル（幅122px、縦向き）を作成し、`icon/` ディレクトリに配置します。
3.  以下のスクリプトを実行し、画像のEXIFデータから `jihanki.csv` を再生成します:
    ```bash
    deno run -A makecsv.js
    ```

## 謝辞

- 本プロジェクトでは、写真のメタデータから緯度・経度を抽出するために、[EXIF.js](https://github.com/exif-js/exif-js) ライブラリ（`taisukef.github.io` 経由）を使用しています。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) をご覧ください。
