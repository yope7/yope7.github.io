---
layout: post
title: "Tripport 予約自動転記システム 機能説明"
author: Yoshiki
categories: [Tech]
image: assets/images/10.jpg
featured: false
hidden: true
wip: false
hide_toc: true
---

<style>
.tripport-doc {
  --ink: #1f2937;
  --muted: #6b7280;
  --line: #111827;
  --blue: #2563eb;
  --blue-soft: #dbeafe;
  --yellow: #fff2cc;
  --red: #f4cccc;
  --gray: #e5e7eb;
  --green: #dcfce7;
  --paper: #fbfaf7;
  --white: #ffffff;
  background:
    linear-gradient(90deg, rgba(17,24,39,0.04) 1px, transparent 1px),
    linear-gradient(rgba(17,24,39,0.04) 1px, transparent 1px),
    var(--paper);
  background-size: 28px 28px;
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", system-ui, sans-serif;
  line-height: 1.7;
}

.tripport-doc, .tripport-doc * {
  box-sizing: border-box;
}

.tripport-doc .page {
  width: min(1180px, calc(100% - 40px));
  margin: 32px auto 64px;
  background: rgba(255,255,255,0.82);
  border: 3px solid var(--line);
  box-shadow: 12px 12px 0 rgba(17,24,39,0.12);
  padding: 38px;
}

.tripport-doc header {
  border-bottom: 5px solid var(--line);
  padding-bottom: 22px;
  margin-bottom: 34px;
}

.tripport-doc .eyebrow {
  color: var(--blue);
  font-weight: 800;
  letter-spacing: .08em;
  font-size: 14px;
}

.tripport-doc h1 {
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.15;
  margin: 8px 0 12px;
  letter-spacing: -0.04em;
}

.tripport-doc .subtitle {
  font-size: 18px;
  color: var(--muted);
  max-width: 880px;
  margin: 0;
}

.tripport-doc section {
  margin-top: 44px;
}

.tripport-doc h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 27px;
  line-height: 1.3;
  margin: 0 0 20px;
}

.tripport-doc h2::before {
  content: "";
  width: 14px;
  height: 34px;
  background: var(--blue);
  border: 2px solid var(--line);
  display: inline-block;
}

.tripport-doc h3 {
  margin: 28px 0 12px;
  font-size: 19px;
}

.tripport-doc p {
  margin: 10px 0;
}

.tripport-doc code {
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  padding: 1px 5px;
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: .92em;
}

.tripport-doc .overview-flow,
.tripport-doc .flow,
.tripport-doc .mini-flow,
.tripport-doc .state-flow {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 18px 0 26px;
}

.tripport-doc .box {
  background: var(--white);
  border: 2.5px solid var(--line);
  min-width: 126px;
  min-height: 64px;
  padding: 12px 14px;
  display: grid;
  place-items: center;
  text-align: center;
  font-weight: 800;
  position: relative;
}

.tripport-doc .box .small {
  display: block;
  font-size: 12px;
  color: var(--muted);
  font-weight: 700;
  margin-top: 2px;
}

.tripport-doc .box.blue { background: var(--blue-soft); }
.tripport-doc .box.yellow { background: var(--yellow); }
.tripport-doc .box.red { background: var(--red); }
.tripport-doc .box.gray { background: var(--gray); }
.tripport-doc .box.green { background: var(--green); }

.tripport-doc .arrow {
  font-size: 28px;
  font-weight: 900;
  color: var(--line);
}

.tripport-doc .swimlane {
  display: grid;
  grid-template-columns: 160px 1fr;
  border-top: 2.5px solid var(--line);
  border-left: 2.5px solid var(--line);
  background: white;
  margin: 18px 0 30px;
}

.tripport-doc .lane-head,
.tripport-doc .lane-body {
  border-right: 2.5px solid var(--line);
  border-bottom: 2.5px solid var(--line);
  padding: 14px;
}

.tripport-doc .lane-head {
  background: #f3f4f6;
  font-weight: 900;
  display: grid;
  place-items: center start;
}

.tripport-doc .lane-body {
  min-height: 72px;
}

.tripport-doc .lane-body .mini-flow {
  margin: 0;
}

.tripport-doc .decision {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-top: 2.5px solid var(--line);
  border-left: 2.5px solid var(--line);
  margin: 18px 0 30px;
  background: white;
}

.tripport-doc .decision dt,
.tripport-doc .decision dd {
  margin: 0;
  border-right: 2.5px solid var(--line);
  border-bottom: 2.5px solid var(--line);
  padding: 14px;
}

.tripport-doc .decision dt {
  font-weight: 900;
  background: #f9fafb;
}

.tripport-doc .decision dd {
  color: #374151;
}

.tripport-doc table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  margin: 18px 0 30px;
  font-size: 15px;
}

.tripport-doc th,
.tripport-doc td {
  border: 2px solid var(--line);
  padding: 11px 12px;
  vertical-align: top;
}

.tripport-doc th {
  background: #e5e7eb;
  text-align: left;
  font-weight: 900;
}

.tripport-doc .legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 18px 0 28px;
}

.tripport-doc .legend span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
}

.tripport-doc .chip {
  width: 34px;
  height: 20px;
  border: 2px solid var(--line);
  display: inline-block;
}

.tripport-doc .chip.yellow { background: var(--yellow); }
.tripport-doc .chip.red { background: var(--red); }
.tripport-doc .chip.gray { background: var(--gray); }
.tripport-doc .chip.white { background: white; }

.tripport-doc .columns-map {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: white;
  border-left: 2.5px solid var(--line);
  border-top: 2.5px solid var(--line);
  margin: 18px 0 30px;
}

.tripport-doc .col {
  border-right: 2.5px solid var(--line);
  border-bottom: 2.5px solid var(--line);
  padding: 9px;
  min-height: 62px;
  font-size: 14px;
}

.tripport-doc .col b {
  display: block;
  color: var(--blue);
  margin-bottom: 2px;
}

.tripport-doc .timeline {
  border-left: 5px solid var(--line);
  padding-left: 24px;
  margin: 18px 0 30px 16px;
}

.tripport-doc .timeline-item {
  position: relative;
  margin: 0 0 22px;
}

.tripport-doc .timeline-item::before {
  content: "";
  position: absolute;
  left: -36px;
  top: 8px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 3px solid var(--line);
  background: white;
}

.tripport-doc .callout {
  border-left: 7px solid var(--blue);
  padding: 12px 16px;
  background: rgba(219,234,254,.65);
  margin: 20px 0 30px;
}

.tripport-doc .mono {
  white-space: pre-wrap;
  background: #111827;
  color: #f9fafb;
  padding: 18px;
  border: 2.5px solid var(--line);
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 14px;
}

.tripport-doc footer {
  margin-top: 48px;
  border-top: 4px solid var(--line);
  padding-top: 18px;
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 760px) {
  .tripport-doc .page {
    width: calc(100% - 22px);
    padding: 22px;
  }

  .tripport-doc .swimlane,
  .tripport-doc .decision {
    grid-template-columns: 1fr;
  }

  .tripport-doc .columns-map {
    grid-template-columns: repeat(2, 1fr);
  }

  .tripport-doc .arrow {
    transform: rotate(90deg);
  }
}

@media print {
  .tripport-doc {
    background: white;
  }

  .tripport-doc .page {
    box-shadow: none;
    width: 100%;
    border: none;
    margin: 0;
  }
}
</style>

<div class="tripport-doc" markdown="0">
  <main class="page">
    <header>
      <div class="eyebrow">Gmail × Claude API × Spreadsheet × Google Calendar</div>
      <h1>Tripport 予約自動転記システム<br>機能説明</h1>
      <p class="subtitle">
        Viator / GetYourGuide の予約メールを読み取り，Claude API で予約内容を抽出し，受付台帳とカレンダーへ反映する Apps Script の全体像を平易に整理した図解である．
      </p>
    </header>

    <section>
      <h2>1. 全体像</h2>
      <p>
        このスクリプトは，予約メールを入口として，台帳更新とカレンダー連携までを半自動化する．
        人間が確認すべきものは承認待ちとして残し，明確な予約は自動で登録する．
      </p>

      <div class="overview-flow">
        <div class="box blue">Gmail<span class="small">予約メール</span></div>
        <div class="arrow">→</div>
        <div class="box">Apps Script<span class="small">5分ごと実行</span></div>
        <div class="arrow">→</div>
        <div class="box blue">Claude API<span class="small">JSON抽出</span></div>
        <div class="arrow">→</div>
        <div class="box">Spreadsheet<span class="small">受付台帳</span></div>
        <div class="arrow">→</div>
        <div class="box">Calendar<span class="small">予定登録・更新・削除</span></div>
      </div>

      <div class="callout">
        目的は「全部を無理に自動化すること」ではない．
        明確なものは自動処理し，曖昧なものだけ人間の承認に回す設計である．
      </div>
    </section>

    <section>
      <h2>2. 対象メール</h2>
      <p>
        <code>SENDERS</code> に登録された送信元だけを処理する．
        それ以外のメールは，予約メールに見えても処理対象外になる．
      </p>

      <table>
        <thead>
          <tr>
            <th>送信元</th>
            <th>内部表記</th>
            <th>意味</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>booking@t1.viator.com</code></td>
            <td><code>VIA</code></td>
            <td>Viator 経由の予約</td>
          </tr>
          <tr>
            <td><code>do-not-reply@notification.getyourguide.com</code></td>
            <td><code>GYG</code></td>
            <td>GetYourGuide 経由の予約</td>
          </tr>
        </tbody>
      </table>

      <div class="flow">
        <div class="box">指定送信元</div>
        <div class="arrow">＋</div>
        <div class="box">未処理ラベル</div>
        <div class="arrow">＋</div>
        <div class="box">直近7日</div>
        <div class="arrow">→</div>
        <div class="box green">処理対象</div>
      </div>

      <div class="mono">(from:booking@t1.viator.com OR from:do-not-reply@notification.getyourguide.com)

-label:processed-by-script
newer_than:7d</div>
</section>

    <section>
      <h2>3. メール分類</h2>
      <p>
        <code>classifyEvent_()</code> は件名からメール種別を判定する．
        ここで処理ルートが分かれる．
      </p>

      <dl class="decision">
        <dt>new</dt>
        <dd>新規予約．Claude で抽出し，台帳に新しい行を追加する．</dd>

        <dt>cancel</dt>
        <dd>キャンセル通知．予約番号で既存行を探し，無料／有料キャンセルを判定する．</dd>

        <dt>amend</dt>
        <dd>変更通知．明記された項目だけ上書きし，変更内容は備考に残す．</dd>

        <dt>review / other</dt>
        <dd>レビュー通知や不明なメール．予約処理からは除外する．</dd>
      </dl>
    </section>

    <section>
      <h2>4. 新規予約の処理</h2>

      <div class="swimlane">
        <div class="lane-head">Gmail</div>
        <div class="lane-body">
          <div class="mini-flow">
            <div class="box">本文取得</div>
            <div class="arrow">→</div>
            <div class="box">送信元確認</div>
          </div>
        </div>

        <div class="lane-head">Apps Script</div>
        <div class="lane-body">
          <div class="mini-flow">
            <div class="box">件名分類</div>
            <div class="arrow">→</div>
            <div class="box">本文整形</div>
            <div class="arrow">→</div>
            <div class="box">重複確認</div>
          </div>
        </div>

        <div class="lane-head">Claude API</div>
        <div class="lane-body">
          <div class="mini-flow">
            <div class="box blue">JSON抽出</div>
            <div class="arrow">→</div>
            <div class="box blue">信頼度判定</div>
          </div>
        </div>

        <div class="lane-head">Spreadsheet</div>
        <div class="lane-body">
          <div class="mini-flow">
            <div class="box green">高信頼度は追記</div>
            <div class="arrow">／</div>
            <div class="box yellow">曖昧なら承認待ち</div>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>抽出項目</th>
            <th>意味</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>booking_id</code></td><td>予約番号．重複判定やキャンセル・変更の紐付けに使う．</td></tr>
          <tr><td><code>tour_name</code></td><td>内部ツアー名．<code>TOUR_NAMES</code> から選ぶ．</td></tr>
          <tr><td><code>travel_date</code> / <code>travel_time</code></td><td>実施日と開始時刻．</td></tr>
          <tr><td><code>num_people</code></td><td>参加人数．</td></tr>
          <tr><td><code>lead_traveler</code></td><td>代表者名．</td></tr>
          <tr><td><code>country</code></td><td>参加者の国．</td></tr>
          <tr><td><code>net_rate</code></td><td>売上．</td></tr>
          <tr><td><code>confidence</code> / <code>concerns</code></td><td>自動処理してよいか，人間確認が必要かを判断する情報．</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>5. ツアー名とカテゴリ</h2>
      <p>
        メール内の外部表記を，内部で使うツアー名に変換する．
        その後，<code>CATEGORY_BY_TOUR</code> によりカテゴリを決める．
      </p>

      <div class="flow">
        <div class="box">英文ツアー名<br><span class="small">例: Asakusa Walking Tour</span></div>
        <div class="arrow">→</div>
        <div class="box blue">Claude が判断</div>
        <div class="arrow">→</div>
        <div class="box">内部ツアー名<br><span class="small">浅草2h</span></div>
        <div class="arrow">→</div>
        <div class="box">カテゴリ<br><span class="small">Guide</span></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>カテゴリ</th>
            <th>例</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Guide</td><td>皇居1.5h，浅草2h，築地2h，秋葉原2h，渋谷1.5h など</td></tr>
          <tr><td>JCE</td><td>書道1h，茶道1h</td></tr>
          <tr><td>協業</td><td>ダルマ1h，サンドブラスト2h</td></tr>
          <tr><td>TPC</td><td>cy皇居3h，es秋葉原2h，es東京タワー2h など</td></tr>
          <tr><td>Asappy</td><td>AS浅草2h，ASスカイツリー2h</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>6. 台帳の列構造</h2>
      <p>
        <code>buildBookingRecord_()</code> は，抽出結果を18列の行データに変換する．
      </p>

      <div class="columns-map">
        <div class="col"><b>1</b>予約番号</div>
        <div class="col"><b>2</b>受付日</div>
        <div class="col"><b>3</b>経路</div>
        <div class="col"><b>4</b>カテゴリ</div>
        <div class="col"><b>5</b>ツアー名</div>
        <div class="col"><b>6</b>ガイド手配</div>
        <div class="col"><b>7</b>空欄</div>
        <div class="col"><b>8</b>実施日</div>
        <div class="col"><b>9</b>時刻</div>
        <div class="col"><b>10</b>人数</div>
        <div class="col"><b>11</b>代表者</div>
        <div class="col"><b>12</b>国</div>
        <div class="col"><b>13</b>売上</div>
        <div class="col"><b>14</b>実施状況</div>
        <div class="col"><b>15</b>無料Cancel日</div>
        <div class="col"><b>16</b>備考</div>
        <div class="col"><b>17</b>空欄</div>
        <div class="col"><b>18</b>空欄</div>
      </div>
    </section>

    <section>
      <h2>7. 信頼度と色</h2>

      <div class="legend">
        <span><i class="chip white"></i> high: 自動登録</span>
        <span><i class="chip yellow"></i> medium: 承認待ち</span>
        <span><i class="chip red"></i> low: 強い要確認</span>
        <span><i class="chip gray"></i> キャンセル済み</span>
      </div>

      <dl class="decision">
        <dt>high</dt>
        <dd>台帳に追記し，カレンダーにも自動登録する．</dd>

        <dt>medium</dt>
        <dd>行を黄色にし，備考に <code>承認待ち</code> と要確認理由を残す．</dd>

        <dt>low</dt>
        <dd>行を赤色にし，ツアー名不明などの強い要確認として残す．</dd>
      </dl>
    </section>

    <section>
      <h2>8. 承認と承認学習</h2>
      <p>
        人間が承認した結果は，次回以降の Claude プロンプトに反映される．
        これにより，同じような表記ゆれを次回から高信頼度で処理しやすくなる．
      </p>

      <div class="state-flow">
        <div class="box yellow">承認待ち</div>
        <div class="arrow">→</div>
        <div class="box">人間が承認</div>
        <div class="arrow">→</div>
        <div class="box blue">Claude が<br>補足ルール生成</div>
        <div class="arrow">→</div>
        <div class="box">ScriptProperties<br>に保存</div>
        <div class="arrow">→</div>
        <div class="box green">次回プロンプト<br>に反映</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>関数</th>
            <th>役割</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>approveSelectedRows()</code></td><td>選択行の承認待ちを承認済みに変更し，色をクリアする．</td></tr>
          <tr><td><code>generateApprovalRule_()</code></td><td>承認された内容から，次回用の補足ルールを Claude に生成させる．</td></tr>
          <tr><td><code>saveLearnedRule_()</code></td><td>生成されたルールを保存する．</td></tr>
          <tr><td><code>learnedRulesPrompt_()</code></td><td>保存済みルールを抽出プロンプトに差し込む．</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>9. キャンセル処理</h2>

      <div class="flow">
        <div class="box gray">キャンセルメール</div>
        <div class="arrow">→</div>
        <div class="box blue">予約番号抽出</div>
        <div class="arrow">→</div>
        <div class="box">台帳行検索</div>
        <div class="arrow">→</div>
        <div class="box gray">無料/有料<br>キャンセル判定</div>
        <div class="arrow">→</div>
        <div class="box">Calendar<br>予定削除</div>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <b>キャンセルメール受信</b><br>
          受信日時を基準にする．
        </div>
        <div class="timeline-item">
          <b>実施日時を作る</b><br>
          台帳または抽出結果の実施日・時刻から Date を作る．
        </div>
        <div class="timeline-item">
          <b>差分時間を計算</b><br>
          実施日時 − キャンセル受信日時を時間単位で計算する．
        </div>
        <div class="timeline-item">
          <b>しきい値で判定</b><br>
          <code>CANCEL_FREE_THRESHOLD_HOURS</code> 以上なら無料キャンセルとする．
        </div>
      </div>
    </section>

    <section>
      <h2>10. 変更処理</h2>
      <p>
        変更通知は「変更後の全情報」ではなく「差分」だけを含むことがある．
        そのため，明記された項目だけを更新し，推測による上書きは避ける．
      </p>

      <table>
        <thead>
          <tr>
            <th>メール本文の例</th>
            <th>処理</th>
            <th>理由</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Changed to 4 travelers</td>
            <td>人数を4に更新</td>
            <td>変更後の合計人数が明記されているため．</td>
          </tr>
          <tr>
            <td>One traveler has been removed</td>
            <td>人数は更新しない</td>
            <td>元人数が不明だと合計人数を確定できないため．</td>
          </tr>
          <tr>
            <td>Start time changed to 14:00</td>
            <td>時刻だけ更新</td>
            <td>新しい時刻が明記されているため．</td>
          </tr>
        </tbody>
      </table>

      <div class="flow">
        <div class="box">変更メール</div>
        <div class="arrow">→</div>
        <div class="box blue">extractAmendWithClaude_</div>
        <div class="arrow">→</div>
        <div class="box yellow">部分更新</div>
        <div class="arrow">→</div>
        <div class="box yellow">備考に差分記録</div>
      </div>
    </section>

    <section>
      <h2>11. 重複防止</h2>
      <p>
        台帳の1列目にある予約番号を読み込み，既存予約番号と照合する．
        すでに存在する予約は再追加しない．
      </p>

      <div class="flow">
        <div class="box">抽出した<br>予約番号</div>
        <div class="arrow">→</div>
        <div class="box">既存ID一覧</div>
        <div class="arrow">→</div>
        <div class="box">一致？</div>
        <div class="arrow">→</div>
        <div class="box gray">一致ならスキップ</div>
        <div class="arrow">／</div>
        <div class="box green">なければ追記</div>
      </div>
    </section>

    <section>
      <h2>12. デバッグ・テスト関数</h2>

      <table>
        <thead>
          <tr>
            <th>関数</th>
            <th>確認できること</th>
            <th>書き込み</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>debugSearch()</code></td><td>Gmail検索，シート情報，既存IDを確認する．</td><td>なし</td></tr>
          <tr><td><code>debugEvents()</code></td><td>メール分類が正しいか確認する．</td><td>なし</td></tr>
          <tr><td><code>dryRunCancelAmend()</code></td><td>キャンセル・変更処理の予定内容を確認する．</td><td>なし</td></tr>
          <tr><td><code>liveTestCancelAmend()</code></td><td>実際に1件ずつ処理し，before/after を見る．</td><td>あり</td></tr>
          <tr><td><code>insertApprovalSamples()</code></td><td>承認待ちのサンプル行を追加する．</td><td>あり</td></tr>
          <tr><td><code>deleteSampleRows()</code></td><td>SAMPLE- で始まるサンプル行を削除する．</td><td>あり</td></tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>13. まとめ</h2>
      <div class="flow">
        <div class="box">予約メール</div>
        <div class="arrow">→</div>
        <div class="box blue">AI抽出</div>
        <div class="arrow">→</div>
        <div class="box">台帳更新</div>
        <div class="arrow">→</div>
        <div class="box">カレンダー連携</div>
        <div class="arrow">→</div>
        <div class="box green">承認結果から改善</div>
      </div>

      <p>
        このコードは，予約業務の単純な転記を減らしつつ，曖昧な判断は人間に残す構造になっている．
        さらに，人間の承認を学習材料として使うため，運用するほど自動処理できる範囲が広がる．
      </p>
    </section>

    <footer>
      Tripport 予約自動転記システムの説明用 HTML/CSS プレビュー
    </footer>

  </main>
</div>
