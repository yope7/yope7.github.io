document.addEventListener("DOMContentLoaded", function () {
  // コードブロックの選択方法を改善（highlight クラスを持つ div も対象にする）
  const codeBlocks = document.querySelectorAll(".highlight pre, pre");

  codeBlocks.forEach(function (codeBlock) {
    // 既にコピーボタンが付いている場合はスキップ
    if (codeBlock.parentNode.classList.contains("code-container")) return;

    // コンテナを作成
    const container = document.createElement("div");
    container.className = "code-container";

    // コピーボタンを作成
    const copyButton = document.createElement("button");
    copyButton.innerHTML = '<i class="fa fa-copy"></i>';
    copyButton.className = "copy-button";

    // コピーボタンのクリックイベント
    copyButton.addEventListener("click", function () {
      // codeタグがある場合はその中身を、なければpreタグの中身をコピー
      const codeElement = codeBlock.querySelector("code");
      const textToCopy = codeElement
        ? codeElement.textContent
        : codeBlock.textContent;

      // 行番号を削除
      const cleanText = textToCopy.replace(/^\d+\|/gm, "");

      navigator.clipboard
        .writeText(cleanText)
        .then(function () {
          showCustomAlert("コピーしました！");
        })
        .catch(function (err) {
          console.error("コピーに失敗しました:", err);
        });
    });

    // DOM構造の変更（親要素を保持）
    const parent = codeBlock.parentNode;

    // ハイライターのdivを考慮
    if (parent.classList.contains("highlight")) {
      const grandParent = parent.parentNode;
      container.appendChild(parent);
      grandParent.appendChild(container);
    } else {
      parent.replaceChild(container, codeBlock);
      container.appendChild(codeBlock);
    }

    container.appendChild(copyButton);
  });

  // カスタムアラート表示関数
  function showCustomAlert(message) {
    const alert = document.createElement("div");
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #00ab6b;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    `;
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.style.animation = "fadeOut 0.3s ease";
      setTimeout(() => alert.remove(), 300);
    }, 2000);
  }
});
