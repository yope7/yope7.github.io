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
    {% for post in site.posts %} {% if post.featured == true and post.hidden != true %} {% include
    featuredbox.html %} {% endif %} {% endfor %}
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
      {% assign has_visible_posts = false %}
      {% for post in category[1] %}
        {% if post.hidden != true %}
          {% assign has_visible_posts = true %}
          {% break %}
        {% endif %}
      {% endfor %}
      {% if has_visible_posts %}
        <button
          class="filter-btn"
          data-filter="category-{{ category[0] | downcase | replace: ' ','-' }}"
        >
          {{ category[0] }}
        </button>
      {% endif %}
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

<style>
.about-hero {
  position: relative;
  margin-bottom: 2.5rem;
  padding: 4.5rem 1.5rem;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url('{{site.baseurl}}/assets/images/cycling.jpeg') center/cover no-repeat;
  color: #f8f9fa;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
}

.about-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.08),
      transparent 35%
    ),
    radial-gradient(
      circle at 80% 10%,
      rgba(255, 255, 255, 0.06),
      transparent 30%
    );
  pointer-events: none;
}

.about-hero__content {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  z-index: 1;
}

.about-hero__title {
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.about-hero__subtitle {
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
  color: #f2f6f4;
}

.about-hero__badge {
  display: inline-block;
  padding: 0.55rem 1.25rem;
  background: rgba(255, 255, 255, 0.96);
  color: #0b2e1f;
  border-radius: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.9rem;
}

.about-hero__cta {
  color: #f8f9fa;
  border-color: rgba(255, 255, 255, 0.7);
}

.about-hero__cta:hover,
.about-hero__cta:focus {
  color: #0b2e1f;
  background-color: #d4f7e6;
  border-color: #d4f7e6;
}

.section-title {
  display: none;
  margin: 0;
}

@media (max-width: 768px) {
  .about-hero {
    padding: 3.5rem 1.25rem;
  }
}
</style>
