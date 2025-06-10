---
layout: post
title: "Parallel Workloads Archive"
author: Yoshiki
categories: [other]
image: assets/images/10.jpg
featured: false
hidden: false
wip: true
---

# 並列コンピューティングのジョブワークロード

## 概要

## Standard Workload Format(SWF)

| 項目名                          | フィールド番号（1 始まり） | 備考                                                            |
| ------------------------------- | -------------------------- | --------------------------------------------------------------- |
| Job Number                      | 1                          | ジョブの通し番号                                                |
| Submit Time                     | 2                          | 投入時刻（秒）                                                  |
| Wait Time                       | 3                          | 投入〜実行開始までの待機時間（秒）                              |
| Run Time                        | 4                          | 実行時間（秒）                                                  |
| Number of Allocated Processors  | 5                          | 実行に割り当てられたプロセッサ数                                |
| Average CPU Time Used           | 6                          | プロセッサあたりの平均 CPU 時間（秒）                           |
| Used Memory                     | 7                          | プロセッサあたりのメモリ使用量（KB）                            |
| Requested Number of Processors  | 8                          | 要求されたプロセッサ数                                          |
| Requested Time                  | 9                          | 要求された実行時間（秒）または平均 CPU 時間（ログヘッダで定義） |
| Requested Memory                | 10                         | 要求メモリ（KB/プロセッサ）                                     |
| Status                          | 11                         | 1=成功，0=失敗，5=キャンセル，他の値もありうる                  |
| User ID                         | 12                         | 実行ユーザの識別番号                                            |
| Group ID                        | 13                         | 所属グループの識別番号                                          |
| Executable (Application) Number | 14                         | 実行されたアプリケーションの番号（スクリプトを含む場合もあり）  |
| Queue Number                    | 15                         | キュー番号（0 はインタラクティブジョブを表す）                  |
| Partition Number                | 16                         | 実行されたパーティションの番号                                  |
| Preceding Job Number            | 17                         | 終了を待ってから実行されるべき直前のジョブ番号（依存関係）      |
| Think Time from Preceding Job   | 18                         | 直前のジョブ終了からこのジョブの投入までの時間（秒）            |

---

1. Submit Time（ジョブの投入時刻）

   - 単位：秒
   - 内容：ジョブがシステムに投入（submit）された時刻を示す．
   - 特徴：すべてのジョブの中で最も早い投入時刻が「0 秒」とされ，それ以降のジョブはその基準からの相対時間で記録される．
   - 備考：ログファイルは通常この「Submit Time」の昇順（時系列順）にソートされている．

2. Wait Time（待ち時間）

   - 単位：秒
   - 内容：ジョブが投入されてから実際に実行が開始されるまでに待たされた時間．
   - 計算式：

   $$
   \text{Wait Time} = \text{Job Start Time} - \text{Submit Time}
   $$

   - 意味：スケジューラの影響を最も強く受ける部分であり，リソースの空き状況や優先度，バッチポリシーによって左右される．
   - モデル上の扱い：合成ワークロード（モデル）では必ずしも意味を持たない．

3. Run Time（実行時間）

   - 単位：秒（ウォールクロック時間）
   - 内容：ジョブが実際に動作していた時間（= 開始から終了まで）．
   - 特徴：
     - 非常に短いジョブでは丸め誤差により Run Time = 0 となることもある（実際には 0.5 秒未満であったことを意味する）．
     - 並列実行されたとしても，この時間は「壁時計」で測った全体の経過時間である．

4. Number of Allocated Processors（割り当てられたプロセッサ数）

   - 単位：整数
   - 内容：ジョブに割り当てられた（使用する予定の）プロセッサの数．
   - 備考：
     - 実際に使用したプロセッサ数ではなく，予約された数である可能性がある．
     - 多くの場合，ジョブはこの数と同じだけのプロセッサを使用するが，使用しない場合の実情はログには現れないことが多い．

5. Average CPU Time Used（平均 CPU 時間）

   - 単位：秒
   - 内容：ジョブが使用した CPU 時間の平均値（ユーザー時間 + システム時間），プロセッサ 1 個あたりに換算した値．
   - 計算式：

     $$
     \text{Average CPU Time Used} = \frac{\text{Total CPU Time (all processors)}}{\text{Number of Allocated Processors}}
     $$

   - 備考：
     - 実行時間（Run Time）よりも小さくなることがある．これは I/O 待ちやスレッド間の非同期など，CPU を使っていない時間が存在するため．

6. Requested Time（要求時間）

   - 単位：秒
   - 内容：ユーザがジョブ投入時に指定する，必要と見積もった実行時間の上限．

## 例えばで拾ってきたデータ

ロスアラモス国立研究所（LANL）で運用された Connection Machine CM-5 スーパーコンピュータのアーカイブ

最初の TOP500 リストで世界第 1 位となっロセッサ数：1,024 基の SuperSPARC プロセッサを搭載

- プロセッサ数：1,024 基の SuperSPARC プロセッサを搭載
- クロック周波数：各プロセッサは 32 MHz で動作
- 理論ピーク性能：131 GFLOPS（ギガフロップス）
- LINPACK ベンチマーク実測値：59.7 GFLOPS
- メモリ容量：最大 10 GB（FROSTBURG CM-5 の構成）
- ストレージ容量：最大 2 TB（FROSTBURG CM-5 の構成）

## 可視化した情報

![要求プロセッサ数の分布]({{site.baseurl}}/assets/images/0603/processor_distribution.png)

![要求時間の分布]({{site.baseurl}}/assets/images/0603/requested_time_distribution.png)
