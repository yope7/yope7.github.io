// ダークモード切り替え
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme);
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const sunIcon = document.querySelector(".theme-switch .icon.sun");
  const glassIcon = document.querySelector(".theme-switch .icon.glass");

  function updateIcons() {
    if (checkbox && sunIcon && glassIcon) {
      if (checkbox.checked) {
        sunIcon.style.display = "none";
        glassIcon.style.display = "inline-block";
      } else {
        sunIcon.style.display = "inline-block";
        glassIcon.style.display = "none";
      }
    }
  }

  if (checkbox && sunIcon && glassIcon) {
    checkbox.addEventListener("change", updateIcons);
    updateIcons(); // 初期状態
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function getFaceBase(article) {
    return article.dataset.speakerFaceBase || "/assets/faces/";
  }

  function getFirstTextElement(blockquote) {
    return blockquote.querySelector("p, li, div") || blockquote;
  }

  function applySpeakerFaceMarkers(root) {
    const scope = root || document;
    const blockquotes = scope.querySelectorAll(
      ".article-post:not(.article-post--plain-quotes) blockquote:not(.no-speaker-face)"
    );

    blockquotes.forEach(function (blockquote) {
      const textElement = getFirstTextElement(blockquote);
      const firstNode = Array.from(textElement.childNodes).find(function (node) {
        return node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "";
      });

      if (!firstNode) return;

      const match = firstNode.textContent.match(/^(\s*)(\d+)(?:[ \t:：.-]+|(?=\S))/);
      if (!match) return;

      blockquote.classList.toggle("speaker-face-none", match[2] === "0");
      firstNode.textContent = firstNode.textContent.slice(match[0].length);

      if (match[2] === "0") return;

      const article = blockquote.closest(".article-post");
      const faceBase = getFaceBase(article);
      blockquote.style.setProperty(
        "--speaker-face",
        'url("' + faceBase + match[2] + '.png")'
      );
    });
  }

  applySpeakerFaceMarkers(document);

  const usernameInput = document.getElementById("username-input");
  const replaceableContent = document.getElementById("username-replaceable-content");
  if (usernameInput && replaceableContent) {
    usernameInput.addEventListener("input", function () {
      applySpeakerFaceMarkers(replaceableContent);
    });
  }
});
