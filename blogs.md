---
layout: page
title: Blogs
permalink: /blog
hide_toc: true
---

<!-- Featured
================================================== -->
<section class="featured-posts">
  <div class="section-title">
    <h2><span>Featured</span></h2>
  </div>
  <div class="row">
    {% for post in site.posts %}
      {% if post.featured == true and post.hidden != true %}
        {% include featuredbox.html %}
      {% endif %}
    {% endfor %}
  </div>
</section>

<!-- Posts Index
================================================== -->
<section class="recent-posts">
  <div class="section-title">
    <h2><span>All Posts</span></h2>
  </div>

  <div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">All</button>
    {% for category in site.categories %}
    <button
      class="filter-btn"
      data-filter="category-{{ category[0] | downcase | replace: ' ','-' }}"
    >
      {{ category[0] }}
    </button>
    {% endfor %}
  </div>

  <div class="row listrecent">
    {% for post in site.posts %}
      {% if post.hidden != true %}
        <div
          class="postbox-container"
          data-categories="{% for category in post.categories %}{{ category | downcase }} {% endfor %}"
          data-tags="{% for tag in post.tags %}{{ tag | downcase }} {% endfor %}"
        >
          {% include postbox.html %}
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <script>
    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // ボタンのアクティブ状態を更新
        document
          .querySelectorAll(".filter-btn")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 投稿の表示/非表示を切り替え
        document.querySelectorAll(".postbox-container").forEach((post) => {
          const showPost =
            filter === "all" ||
            post.dataset.categories.includes(filter.replace("category-", "")) ||
            post.dataset.tags.includes(filter.replace("tag-", ""));

          // displayプロパティをflexに変更（Bootstrapのグリッドシステムに対応）
          post.style.display = showPost ? "block" : "none";
        });
      });
    });
  </script>
</section>
