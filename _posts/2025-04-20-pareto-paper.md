---
layout: post
title: "パレート最適性について"
author: Yoshiki
categories: [Research]
image: assets/images/10.jpg
featured: false
hidden: false
---

A novel algorithm for fast representation of a Pareto front with adaptive resolution: application to multi-objective optimization of a chemical reactor

ベクトル $$y^*$$ がパレート最適であるとは，次を満たす $$y \in S$$ が存在しないことである：

$$
\min_{u(\epsilon),x(\epsilon),p,\epsilon_f} \{J_1, J_2, \ldots, J_m\}
$$

$$J_i(y) \leq J_i(y^*) \quad \text{for all } i=1,2,...,m$$

かつ

$$J_i(y) < J_i(y^*) \quad \text{for at least one } i$$

すなわち，ある目的を改善しようとすると，他の目的が悪化するような状況である．このとき，$y^*$ は他のどの実行可能解よりも支配されていない（non-dominated）．これは，目的が互いに競合していない限り，一意な解は存在しないことを意味する．このような非支配解の全体集合を パレートフロント（Pareto front） と呼ぶ

### パレートフロントを求める方法

パレートフロントを得るための方法は大きく 2 つの分類に分けられる：ベクトル化法（vectorization methods） と スカラー化法（scalarization methods） である．

スカラー化手法の BAD POINT

- 複雑な制約条件への対応が困難であること
- 計算時間が長いこと
- 探索空間の次元数が高い場合に制限を受けること
- 多数の設計変数や制約条件を扱うことが可能である

多数の設計変数や制約条件を扱うことが可能である

### 重み付き和法（Weighted Sum method, WS）

### 正規境界交差法（Normal Boundary Intersection, NBI）

### （拡張）正規正規制約法（(Enhanced) Normalized Normal Constraint, (E)NNC）

| 引用番号 | 著者名・出版年                      | 論文タイトル                                                                                                                  | キーワード                                 |
| -------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [8]      | Das, I. & Dennis, J. E. (1997)      | A closer look at drawbacks of minimizing weighted sums of objectives for Pareto set generation                                | weighted sum の欠点，非凸フロント          |
| [10]     | Logist, F. et al. (2009)            | Multi-objective optimal control of chemical processes using the normal constraint method                                      | 動的最適化，化学プロセス，NNC 適用例       |
| [13]     | Coello Coello, C. A. (1999)         | A comprehensive survey of evolutionary-based multiobjective optimization techniques                                           | vectorization，進化的アルゴリズム          |
| [18]     | Logist, F. et al. (2010)            | Efficient handling of complex process models in multiobjective optimal control                                                | scalarization 手法の概要，動的問題の定式化 |
| [19]     | Das, I. & Dennis, J. E. (1998)      | Normal-Boundary Intersection: A new method for generating the Pareto surface in nonlinear multicriteria optimization problems | NBI 提案論文                               |
| [21]     | Marler, R. T. & Arora, J. S. (2004) | Survey of multi-objective optimization methods for engineering                                                                | 多目的最適化手法のレビュー，分類           |
| [22]     | Antipova, E. et al. (2015)          | On the use of filters to facilitate the post-optimal analysis of the Pareto solutions                                         | smart filter の提案と分析                  |
| [23]     | Logist, F. et al. (2012)            | A posteriori multi-objective analysis of dynamic process optimization problems                                                | 非パレート点除外，フィルターの必要性       |
| [24]     | Miettinen, K. (1999)                | Nonlinear Multiobjective Optimization                                                                                         | scalarization 理論の基本書                 |
| [25]     | Vallerio, M. et al. (2014)          | An improved normalized normal constraint method for dynamic process optimization                                              | ENNC の応用，化学プロセス                  |
| [26]     | Vallerio, M. et al. (2015)          | A tailored method for three-objective optimal control problems: the enhanced NNC method                                       | ENNC 拡張，3 目的対応の正規化法            |
| [28]     | Logist, F. et al. (2011)            | Efficient deterministic implementation of reference point based multi-objective optimization strategies                       | deterministic MOO 手法実装                 |
