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
