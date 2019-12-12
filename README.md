# (DRAFT) SVG Pack

## 目的

- SVGをJSファイルにまとめてリクエスト数を減らす
- アイコンフォントの代用品

## 機能概要

- 横長縦長対応可能
- asyncを用いるので非同期
- 自力でも作れる単純なJS

## 使い方

### HTML

``` HTML
<head>
  <script src="./svg_pack.js" async>
</head>
<body>
  <div class="svgp svgp-home"></div>
  <span class="svgp svgp-home"></span>
</body>
```

### SVGの色変更

``` scss
.svgp path {
  fill: #FF0000;
}
```

## これから

- みんなにレビューしてもらいたい
- このリポジトリを元にsvgファイルからJSが吐き出すWebpack/gulpを作りたい
- IEの処遇について話し合いたい
