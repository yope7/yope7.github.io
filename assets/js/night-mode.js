// ナイトモード
const nightMode = {
  init() {
    this.toggle = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    this.currentTheme = localStorage.getItem("theme");

    if (this.currentTheme) {
      document.documentElement.setAttribute("data-theme", this.currentTheme);
      if (this.currentTheme === "dark") {
        this.toggle.checked = true;
      }
    }

    this.toggle.addEventListener("change", (e) => this.switchTheme(e));
  },

  switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  },
};

nightMode.init();
