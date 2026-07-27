---
layout: post
title: "Fourier Features"
author: Yoshiki
categories: [Research]
image: assets/images/10.jpg
featured: false
hidden: false
wip: true
---

# Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains

## 背景

近年の画像処理などに使われるニューラルネットワークはDeepなMLPのような連続関数近似に基づくものである．

Newral Tangent Kernel（NTK）を用いて一般的なMLPが低次元の座標ベースのビジョンタスクに適していないことを実験的に示す．

MLPは高周波関数の学習を苦手とする．（スペクトルバイアスと呼ばれる現象）

- MLPは周波数が高くなるにつれて急速に減衰するカーネルに対応しているため．

最近の研究では，入力に対して正弦波写像を適用すればより高周波の内容を表現できるようになることが示されている．

$$
\gamma(v) =
[a_1 \cos(2\pi b_1^T v),\ a_1 \sin(2\pi b_1^T v),\ \ldots,\ a_m \cos(2\pi b_m^T v),\ a_m \sin(2\pi b_m^T v)]^T
$$

の写像を入力とする．

周波数ベクトルbを変更することでスペクトルを調整できる．

本論文では$a_j =1$， $b_j$ を一様にサンプリングした．

## 関連研究

- タンパク質構造モデリングや2D画像生成において，MLPの改善のため正弦波を使うことがある．
- 自然言語処理や時系列解析では類似した位置エンコーディング手法がある．
