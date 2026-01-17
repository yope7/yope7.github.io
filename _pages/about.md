---
layout: page
title: About Me
permalink: /about
comments: false
hide_toc: true
# 論文データ（日本語）
publications_jp:
  - title: "ユーザ利用機会公平性を考慮するクラウドバースティング環境向けスケジューリング手法の提案"
    date: "2024年2月"
    type: "卒業論文"
  - title: "Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks"
    date: "2025年11月"
    type: "CANDAR 2025"

# 論文データ（英語）
publications_en:
  - title: "Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness"
    date: "February 2024"
    type: "Bachelor Thesis"
  - title: "Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks"
    date: "November 2025"
    type: "CANDAR 2025"

# 研究活動データ（日本語）
activities_jp:
  - date: "2026/01/11-13"
    title: "CENTRA9@bangkok, Thailand"
    subtitle: "Collaborations to Enable Transnational Cyberinfrastructure Applications"
    details:
      - "Poster Sessionにて，「Towards an Intent-based Self-learning Job Scheduler for Cloud Bursting」のポスター発表を行う．"
      - Best Poster Awardを受賞．
  - date: "2026/01/07-09"
    title: "PRAGMA41@bangkok, Thailand"
    subtitle: "The 41st meeting of the Pacific Rim Applications and Grid Middleware Assembly"
    details:
      - Student Committeeを務める．
      - Student Hackathon (AI for Healthcare) において，賞を受賞
  - date: "2025/11/25-28"
    title: "CANDAR 2025@山形, Japan"
    subtitle: "The Thirteenth International Symposium on Computing and Networking"
    details:
      - "口頭発表：「Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks」"
  - date: "2024/10/12"
    title: "SC25@St.louis, USA"
    subtitle: "SuperComputing 2025"
    details:
      - "大学の展示ブースにて、組織および自分の研究活動についてのポスター展示を行う"
  - date: "2024/11/23"
    title: "PRAGMA40@penang, Malaysia"
    subtitle: "The 40th meeting of the Pacific Rim Applications and Grid Middleware Assembly"
    details:
      - "Student Committeeを務める"
      - "ポスタープレゼンテーション：「Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness」"
  - date: "2024/11/23"
    title: "SC24@atlanta, USA"
    subtitle: "SuperComputing 2024"
    details:
      - "大学の展示ブースにて、組織および自分の研究活動についてのポスター展示を行う"

# 研究活動データ（英語）
activities_en:
  - date: "November 25-28, 2025"
    title: "CANDAR 2025 @ Yamagata, Japan"
    subtitle: "The Thirteenth International Symposium on Computing and Networking"
    details:
      - 'Oral Presentation: "Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks"'
  - date: "October 12, 2024"
    title: "SC25 @ St. Louis, USA"
    subtitle: "SuperComputing 2025"
    details:
      - "Presented posters about organizational and personal research at the university exhibition booth"
  - date: "November 23, 2024"
    title: "PRAGMA40 @ Penang, Malaysia"
    subtitle: "The 40th meeting of the Pacific Rim Applications and Grid Middleware Assembly"
    details:
      - "Served as a Student Committee member"
      - 'Poster Presentation: "Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness"'
  - date: "November 23, 2024"
    title: "SC24 @ Atlanta, USA"
    subtitle: "SuperComputing 2024"
    details:
      - "Presented research activities at the university exhibition booth with poster presentations about organizational and personal research"

# 経歴データ（日本語）
timeline_jp:
  - date: "2024年4月 - 現在"
    title: "大阪大学　大学院情報科学研究科　卒業見込み"
  - date: "2020年4月 - 2024年3月"
    title: "大阪大学　工学部電子情報工学科"
  - date: "2017年4月 - 2020年3月"
    title: "私立　須磨学園高等学校"

# 経歴データ（英語）
timeline_en:
  - date: "April 2024 - Present"
    title: "Graduate School of Information Science and Technology, Osaka University"
  - date: "April 2020 - March 2024"
    title: "Osaka University"
  - date: "April 2017 - March 2020"
    title: "Suma Gakuen High School"

# 成果物データ（日本語）
projects_jp:
  - image: "assets/images/date-muscle.png"
    title: "Lab-Muscle-Club"
    description: "友人と筋トレの記録を共有するアプリ"
    links:
      - text: "詳細"
        url: "https://yope7.github.io/muscle-club-webapp/"
      - text: "使ってみる"
        url: "https://date-muscle-club.web.app/"

# 成果物データ（英語）
projects_en:
  - image: "assets/images/project1.jpg"
    title: "Coming soon"
    description: "Coming soon"
    links:
      - text: "詳細を見る"
        url: "#"

# 折り畳み設定
show_initial_count:
  publications: 5
  activities: 4
  timeline: 5
  projects: 6
---

<section class="about-hero">
    <div class="about-hero__content text-center">
        <h1 class="about-hero__title">About me</h1>
        <!-- <a href="{{ site.baseurl }}/blog" class="btn btn-lg btn-outline-primary about-hero__cta">ブログ一覧を見る</a> -->
    </div>

</section>

<div class="language-switch text-right mb-4">
    <button id="jp-btn" class="btn btn-sm btn-outline-primary active">日本語</button>
    <button id="en-btn" class="btn btn-sm btn-outline-primary">English</button>
</div>

<!-- 日本語コンテンツ -->
<div id="jp-content" class="language-content active">
    <div class="row justify-content-between">
        <div class="col-md-8 pr-5">
            <h2 class="mb-4">自己紹介</h2>
            <p>
                こんにちは！大阪大学大学院情報科学研究科 野口祥生です。
                M2の学生です．
            </p>

            <h2 class="mb-4">研究分野</h2>
            <ul>
                <li>高性能計算（HPC）</li>
                <li>ジョブスケジューリング</li>
                <li>強化学習</li>
                <li>多目的最適化</li>
            </ul>

            <h2 class="mb-4">研究概要</h2>
            <p>
                ハイパフォーマンスコンピューティング（HPC）におけるジョブスケジューリングの最適化について研究しています．<br>
                ジョブスケジューリングとは，ユーザの計算資源要求に対して，どのように計算資源を割り当てるかを決定する問題です．<br>
                また，HPCジョブスケジューラでは最適化したい目標が複数存在する場合があります．<br>
                強化学習を用いて，これらの目標を同時に最適化する手法を提案しています．(多目的最適化)<br>
                具体的にはジョブスケジューラのシミュレータ作成，最適化アルゴリズムの適用および改良，実験評価を行なっています．
            </p>

            <h2 class="mb-4">研究実績</h2>
            <div class="publications mb-5">
                <h4>論文</h4>
                <ul class="list-unstyled" id="publications-jp-list">
                    {% for pub in page.publications_jp limit: page.show_initial_count.publications %}
                    <li class="mb-3 publication-item">
                        <strong>{{ pub.title }}</strong>, {{ pub.date }} {{ pub.type }}
                    </li>
                    {% endfor %}
                    {% assign remaining_pubs = page.publications_jp.size | minus: page.show_initial_count.publications %}
                    {% if remaining_pubs > 0 %}
                    <div class="publications-hidden hidden">
                        {% for pub in page.publications_jp offset: page.show_initial_count.publications %}
                        <li class="mb-3 publication-item">
                            <strong>{{ pub.title }}</strong>, {{ pub.date }} {{ pub.type }}
                        </li>
                        {% endfor %}
                    </div>
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="publications-jp" data-lang="jp">
                        <span class="see-more-text">もっと見る ({{ remaining_pubs }})</span>
                        <span class="see-less-text" style="display: none;">折りたたむ</span>
                    </button>
                    {% endif %}
                </ul>
            </div>

            <h2 class="mb-4">主な受賞履歴</h2>
            <div class="awards mb-2">
                <ul class="list-unstyled" id="awards-jp-list">
                    <li class="mb-3 award-item">
                        <div class="award-card">
                            <div class="award-icon" aria-hidden="true"><i class="fas fa-trophy"></i></div>
                            <div class="award-content">
                                <div class="award-title">APAC HPC-AI Competition</div>
                                <div class="award-subtitle">Excellent HPC Performance賞</div>
                                <div class="award-links">
                                    <a class="btn btn-sm btn-outline-primary" href="https://www.ais.cmc.osaka-u.ac.jp/date/2025-apachpcai-award/" target="_blank" rel="noopener noreferrer">研究室ブログ</a>
                                </div>
                            </div>
                            <div class="award-date">2025/12/09</div>
                        </div>
                    </li>
                    <li class="mb-3 award-item">
                        <div class="award-card">
                            <div class="award-icon" aria-hidden="true"><i class="fas fa-trophy"></i></div>
                            <div class="award-content">
                                <div class="award-title">CENTRA9</div>
                                <div class="award-subtitle">Best Poster Award</div>
                                <div class="award-links">
                                    <a class="btn btn-sm btn-outline-primary" href="https://www.globalcentra.org/centra9/" target="_blank" rel="noopener noreferrer">学会サイト</a>
                                </div>
                            </div>
                            <div class="award-date">2026/01/11-13</div>
                        </div>
                    </li>
                </ul>
            </div>

            <h2 class="mb-4">研究活動実績</h2>
            <div class="activities mb-2">
                <div class="row" id="activities-jp-list">
                    {% for activity in page.activities_jp limit: page.show_initial_count.activities %}
                    <div class="col-12 mb-4 activity-item">
                        <div class="activity-card">
                            <div class="activity-date">{{ activity.date }}</div>
                            <h4>{{ activity.title }}</h4>
                            <span class="conference-subtitle">{{ activity.subtitle }}</span>
                            <ul class="activity-details">
                                {% for detail in activity.details %}
                                <li>{{ detail }}</li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endfor %}
                    {% assign remaining_activities = page.activities_jp.size | minus: page.show_initial_count.activities %}
                    {% if remaining_activities > 0 %}
                    <div class="activities-hidden hidden">
                        {% for activity in page.activities_jp offset: page.show_initial_count.activities %}
                        <div class="col-12 mb-4 activity-item">
                            <div class="activity-card">
                                <div class="activity-date">{{ activity.date }}</div>
                                <h4>{{ activity.title }}</h4>
                                <span class="conference-subtitle">{{ activity.subtitle }}</span>
                                <ul class="activity-details">
                                    {% for detail in activity.details %}
                                    <li>{{ detail }}</li>
                                    {% endfor %}
                                </ul>
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                    <div class="col-12 text-center mt-3">
                        <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="activities-jp" data-lang="jp">
                            <span class="see-more-text">もっと見る ({{ remaining_activities }})</span>
                            <span class="see-less-text" style="display: none;">折りたたむ</span>
                        </button>
                    </div>
                    {% endif %}
                </div>
            </div>

            <h2 class="mb-4">経歴</h2>
            <div class="timeline mb-5" id="timeline-jp-list">
                {% for item in page.timeline_jp limit: page.show_initial_count.timeline %}
                <div class="timeline-item timeline-item-visible">
                    <div class="timeline-date">{{ item.date }}</div>
                    <div class="timeline-content">
                        <h4>{{ item.title }}</h4>
                    </div>
                </div>
                {% endfor %}
                {% assign remaining_timeline = page.timeline_jp.size | minus: page.show_initial_count.timeline %}
                {% if remaining_timeline > 0 %}
                <div class="timeline-hidden hidden">
                    {% for item in page.timeline_jp offset: page.show_initial_count.timeline %}
                    <div class="timeline-item">
                        <div class="timeline-date">{{ item.date }}</div>
                        <div class="timeline-content">
                            <h4>{{ item.title }}</h4>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="timeline-jp" data-lang="jp">
                        <span class="see-more-text">もっと見る ({{ remaining_timeline }})</span>
                        <span class="see-less-text" style="display: none;">折りたたむ</span>
                    </button>
                </div>
                {% endif %}
            </div>

            <h2 class="mb-4">成果物</h2>
            <div class="projects-grid" id="projects-jp-list">
                {% for project in page.projects_jp limit: page.show_initial_count.projects %}
                <div class="project-card project-item">
                    <img src="{{site.baseurl}}/{{ project.image }}" alt="{{ project.title }}" />
                    <h4>{{ project.title }}</h4>
                    <p>{{ project.description }}</p>
                    {% for link in project.links %}
                    <a href="{{ link.url }}" class="btn btn-primary">{{ link.text }}</a>
                    {% endfor %}
                </div>
                {% endfor %}
                {% assign remaining_projects = page.projects_jp.size | minus: page.show_initial_count.projects %}
                {% if remaining_projects > 0 %}
                <div class="projects-hidden hidden">
                    {% for project in page.projects_jp offset: page.show_initial_count.projects %}
                    <div class="project-card project-item">
                        <img src="{{site.baseurl}}/{{ project.image }}" alt="{{ project.title }}" />
                        <h4>{{ project.title }}</h4>
                        <p>{{ project.description }}</p>
                        {% for link in project.links %}
                        <a href="{{ link.url }}" class="btn btn-primary">{{ link.text }}</a>
                        {% endfor %}
                    </div>
                    {% endfor %}
                </div>
                <div class="col-12 text-center mt-3" style="grid-column: 1 / -1;">
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="projects-jp" data-lang="jp">
                        <span class="see-more-text">もっと見る ({{ remaining_projects }})</span>
                        <span class="see-less-text" style="display: none;">折りたたむ</span>
                    </button>
                </div>
                {% endif %}
            </div>
        </div>

        <div class="col-md-4">
            <div class="sticky-top sticky-top-80">
                <h5>連絡先</h5>
                <p>
                    <i class="fas fa-envelope"></i> メール: yoshiki.noguchi0920!gmail.com<br>
                    <i class="fab fa-github"></i> GitHub: <a href="https://github.com/yope7">yope7</a><br>
                </p>
            </div>
        </div>

    </div>

</div>

<!-- 英語コンテンツ -->
<div id="en-content" class="language-content">
    <div class="row justify-content-between">
        <div class="col-md-8 pr-5">
            <h2 class="mb-4">Introduction</h2>
            <p>
                Hello! I'm Yoshiki Noguchi, a Master's student at the Graduate School of Information Science and Technology, Osaka University.
            </p>

            <h2 class="mb-4">Research Fields</h2>
            <ul>
                <li>High-Performance Computing (HPC)</li>
                <li>Job Scheduling</li>
                <li>Reinforcement Learning</li>
                <li>Multi-objective Optimization</li>
            </ul>

            <h2 class="mb-4">Research Achievements</h2>
            <div class="publications mb-5">
                <h4>Papers</h4>
                <ul class="list-unstyled" id="publications-en-list">
                    {% for pub in page.publications_en limit: page.show_initial_count.publications %}
                    <li class="mb-3 publication-item">
                        <strong>{{ pub.title }}</strong>, {{ pub.date }} ({{ pub.type }})
                    </li>
                    {% endfor %}
                    {% assign remaining_pubs = page.publications_en.size | minus: page.show_initial_count.publications %}
                    {% if remaining_pubs > 0 %}
                    <div class="publications-hidden hidden">
                        {% for pub in page.publications_en offset: page.show_initial_count.publications %}
                        <li class="mb-3 publication-item">
                            <strong>{{ pub.title }}</strong>, {{ pub.date }} ({{ pub.type }})
                        </li>
                        {% endfor %}
                    </div>
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="publications-en" data-lang="en">
                        <span class="see-more-text">See more ({{ remaining_pubs }})</span>
                        <span class="see-less-text" style="display: none;">Show less</span>
                    </button>
                    {% endif %}
                </ul>
            </div>

            <h2 class="mb-4">Awards</h2>
            <div class="awards mb-2">
                <ul class="list-unstyled" id="awards-en-list">
                    <li class="mb-3 award-item">
                        <div class="award-card">
                            <div class="award-icon" aria-hidden="true"><i class="fas fa-trophy"></i></div>
                            <div class="award-content">
                                <div class="award-title">APAC HPC-AI Competition</div>
                                <div class="award-subtitle">Excellent HPC Performance Award</div>
                                <div class="award-links">
                                    <a class="btn btn-sm btn-outline-primary" href="https://www.ais.cmc.osaka-u.ac.jp/date/2025-apachpcai-award/" target="_blank" rel="noopener noreferrer">Press release</a>
                                </div>
                            </div>
                            <div class="award-date">December 9, 2025</div>
                        </div>
                    </li>
                    <li class="mb-3 award-item">
                        <div class="award-card">
                            <div class="award-icon" aria-hidden="true"><i class="fas fa-trophy"></i></div>
                            <div class="award-content">
                                <div class="award-title">CENTRA9</div>
                                <div class="award-subtitle">Best Poster Award</div>
                                <div class="award-links">
                                    <a class="btn btn-sm btn-outline-primary" href="https://www.globalcentra.org/centra9/" target="_blank" rel="noopener noreferrer">Conference site</a>
                                </div>
                            </div>
                            <div class="award-date">January 11-13, 2026</div>
                        </div>
                    </li>
                </ul>
            </div>

            <h2 class="mb-4">Research Activities</h2>
            <div class="activities mb-5">
                <div class="row" id="activities-en-list">
                    {% for activity in page.activities_en limit: page.show_initial_count.activities %}
                    <div class="col-12 mb-4 activity-item">
                        <div class="activity-card">
                            <div class="activity-date">{{ activity.date }}</div>
                            <h4>{{ activity.title }}</h4>
                            <span class="conference-subtitle">{{ activity.subtitle }}</span>
                            <ul class="activity-details">
                                {% for detail in activity.details %}
                                <li>{{ detail }}</li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                    {% endfor %}
                    {% assign remaining_activities = page.activities_en.size | minus: page.show_initial_count.activities %}
                    {% if remaining_activities > 0 %}
                    <div class="activities-hidden hidden">
                        {% for activity in page.activities_en offset: page.show_initial_count.activities %}
                        <div class="col-12 mb-4 activity-item">
                            <div class="activity-card">
                                <div class="activity-date">{{ activity.date }}</div>
                                <h4>{{ activity.title }}</h4>
                                <span class="conference-subtitle">{{ activity.subtitle }}</span>
                                <ul class="activity-details">
                                    {% for detail in activity.details %}
                                    <li>{{ detail }}</li>
                                    {% endfor %}
                                </ul>
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                    <div class="col-12 text-center mt-3">
                        <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="activities-en" data-lang="en">
                            <span class="see-more-text">See more ({{ remaining_activities }})</span>
                            <span class="see-less-text" style="display: none;">Show less</span>
                        </button>
                    </div>
                    {% endif %}
                </div>
            </div>

            <h2 class="mb-4">Experience</h2>
            <div class="timeline mb-5" id="timeline-en-list">
                {% for item in page.timeline_en limit: page.show_initial_count.timeline %}
                <div class="timeline-item timeline-item-visible">
                    <div class="timeline-date">{{ item.date }}</div>
                    <div class="timeline-content">
                        <h4>{{ item.title }}</h4>
                    </div>
                </div>
                {% endfor %}
                {% assign remaining_timeline = page.timeline_en.size | minus: page.show_initial_count.timeline %}
                {% if remaining_timeline > 0 %}
                <div class="timeline-hidden hidden">
                    {% for item in page.timeline_en offset: page.show_initial_count.timeline %}
                    <div class="timeline-item">
                        <div class="timeline-date">{{ item.date }}</div>
                        <div class="timeline-content">
                            <h4>{{ item.title }}</h4>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="timeline-en" data-lang="en">
                        <span class="see-more-text">See more ({{ remaining_timeline }})</span>
                        <span class="see-less-text" style="display: none;">Show less</span>
                    </button>
                </div>
                {% endif %}
            </div>

            <h2 class="mb-4">Projects</h2>
            <div class="projects-grid" id="projects-en-list">
                {% for project in page.projects_en limit: page.show_initial_count.projects %}
                <div class="project-card project-item">
                    <img src="{{site.baseurl}}/{{ project.image }}" alt="{{ project.title }}" />
                    <h4>{{ project.title }}</h4>
                    <p>{{ project.description }}</p>
                    {% for link in project.links %}
                    <a href="{{ link.url }}" class="btn btn-primary">{{ link.text }}</a>
                    {% endfor %}
                </div>
                {% endfor %}
                {% assign remaining_projects = page.projects_en.size | minus: page.show_initial_count.projects %}
                {% if remaining_projects > 0 %}
                <div class="projects-hidden hidden">
                    {% for project in page.projects_en offset: page.show_initial_count.projects %}
                    <div class="project-card project-item">
                        <img src="{{site.baseurl}}/{{ project.image }}" alt="{{ project.title }}" />
                        <h4>{{ project.title }}</h4>
                        <p>{{ project.description }}</p>
                        {% for link in project.links %}
                        <a href="{{ link.url }}" class="btn btn-primary">{{ link.text }}</a>
                        {% endfor %}
                    </div>
                    {% endfor %}
                </div>
                <div class="col-12 text-center mt-3" style="grid-column: 1 / -1;">
                    <button class="btn btn-sm btn-outline-primary see-more-btn" data-target="projects-en" data-lang="en">
                        <span class="see-more-text">See more ({{ remaining_projects }})</span>
                        <span class="see-less-text" style="display: none;">Show less</span>
                    </button>
                </div>
                {% endif %}
            </div>
        </div>

        <div class="col-md-4">
            <div class="sticky-top sticky-top-80">
                <h5>Contact</h5>
                <p>
                    <i class="fas fa-envelope"></i> Email: yoshiki.noguchi0920!gmail.com<br>
                    <i class="fab fa-github"></i> GitHub: <a href="https://github.com/yope7">yope7</a><br>
                </p>
            </div>
        </div>
    </div>

</div>

<style>
.language-switch {
    margin-bottom: 2rem;
}

.language-content {
    display: none;
}

.language-content.active {
    display: block;
}

.btn-outline-primary {
    color: #00ab6b;
    border-color: #00ab6b;
}

.btn-outline-primary:hover,
.btn-outline-primary.active {
    background-color: #00ab6b;
    border-color: #00ab6b;
    color: white;
}

.skill-item {
    margin-bottom: 1rem;
}

.progress {
    height: 0.5rem;
    background-color: #e9ecef;
}

.progress-bar {
    background-color: #00ab6b;
}

.timeline-item {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 2rem;
    border-left: 3px solid #00ab6b;
    background: linear-gradient(90deg, rgba(0,171,107,0.05) 0%, transparent 100%);
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 0 8px 8px 0;
    margin-left: 1rem;
}

.timeline-date {
    color: #00ab6b;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.project-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 1rem;
    transition: transform 0.2s;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.about-hero {
    position: relative;
    margin-bottom: 2.5rem;
    padding: 4.5rem 1.5rem;
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%), url('{{site.baseurl}}/assets/images/cycling.jpeg') center/cover no-repeat;
    color: #f8f9fa;
    box-shadow: 0 10px 35px rgba(0,0,0,0.35);
}

.about-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 35%),
                radial-gradient(circle at 80% 10%, rgba(255,255,255,0.06), transparent 30%);
    pointer-events: none;
}

.about-hero__content {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
    z-index: 1;
}

.about-hero__eyebrow {
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    color: #d4f7e6;
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
}

.about-hero__badge {
    display: inline-block;
    padding: 0.55rem 1.25rem;
    background: rgba(255,255,255,0.96);
    color: #0b2e1f;
    border-radius: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    box-shadow: 0 10px 28px rgba(0,0,0,0.25);
    margin-bottom: 0.9rem;
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

.about-hero__cta {
    color: #f8f9fa;
    border-color: rgba(255,255,255,0.7);
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

/* 研究活動カードのスタイル */
.activity-card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.5rem;
    min-height: 100px;
    height: auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    position: relative;
    background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.activity-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    border-color: #00ab6b;
    background: linear-gradient(135deg, #fff 0%, #f8fff8 100%);
}

.activity-date {
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #00ab6b 0%, #00995a 100%);
    color: white;
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
    font-weight: 600;
    border-bottom-left-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,171,107,0.3);
}

.activity-card h4 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
    font-size: 1.1rem;
    min-height: 1.5rem;
    display: flex;
    align-items: center;
}

.activity-card .conference-subtitle {
    display: block;
    font-size: 0.8rem;
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
    min-height: 2.5rem;
    line-height: 1.3;
}

.activity-details {
    padding-left: 1.25rem;
    margin-bottom: 0;
    min-height: 4rem;
    flex-grow: 1;
}

.activity-details li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #555;
    line-height: 1.4;
}

/* 折り畳み機能のスタイル */
.publications-hidden,
.timeline-hidden {
    display: block;
}

.publications-hidden.hidden,
.timeline-hidden.hidden {
    display: none;
}

.publications-hidden.show,
.timeline-hidden.show {
    display: block;
}

.activities-hidden,
.projects-hidden {
    display: contents;
}

.activities-hidden.hidden,
.projects-hidden.hidden {
    display: none;
}

.activities-hidden.show,
.projects-hidden.show {
    display: contents;
}

.see-more-btn {
    margin-top: 1rem;
    transition: all 0.3s ease;
}

.see-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,171,107,0.2);
}

.publication-item,
.activity-item,
.timeline-item,
.project-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.award-card {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.1rem 1.25rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    transition: all 0.3s ease;
    position: relative;
    background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    overflow: hidden;
}

.award-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #00ab6b 0%, #00995a 100%);
}

.award-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    border-color: #00ab6b;
    background: linear-gradient(135deg, #fff 0%, #f8fff8 100%);
}

.award-date {
    flex: 0 0 auto;
    font-size: 0.85rem;
    font-weight: 700;
    color: #0b2e1f;
    background: rgba(0,171,107,0.12);
    border: 1px solid rgba(0,171,107,0.25);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    margin-left: auto; /* keep dates aligned on the right */
    white-space: nowrap;
}

.award-icon {
    flex: 0 0 2.25rem; /* fixed width -> aligned icons */
    width: 2.25rem;
    height: 2.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: rgba(0,171,107,0.12);
    border: 1px solid rgba(0,171,107,0.25);
    color: #00ab6b;
}

.award-content {
    min-width: 0;
}

.award-title {
    font-weight: 700;
    color: #333;
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
}

.award-subtitle {
    font-size: 0.95rem;
    color: #666;
}

.award-links {
    margin-top: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.award-links .btn {
    padding: 0.25rem 0.65rem;
    line-height: 1.2;
}

@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .about-hero {
        padding: 3.5rem 1.25rem;
    }
    
    .timeline-item {
        padding-left: 1rem;
    }
    
    .activity-card {
        min-height: auto;
        margin-bottom: 1.5rem;
    }
    
    .activity-card .conference-subtitle {
        min-height: auto;
    }
    
    .activity-details {
        min-height: auto;
    }

    .award-card {
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .award-date {
        margin-left: 0;
        flex-basis: 100%;
        width: fit-content;
        white-space: normal;
    }
}
</style>

<script>
// 言語切り替え
document.getElementById('jp-btn').addEventListener('click', function() {
    document.getElementById('jp-content').classList.add('active');
    document.getElementById('en-content').classList.remove('active');
    this.classList.add('active');
    document.getElementById('en-btn').classList.remove('active');
});

document.getElementById('en-btn').addEventListener('click', function() {
    document.getElementById('en-content').classList.add('active');
    document.getElementById('jp-content').classList.remove('active');
    this.classList.add('active');
    document.getElementById('jp-btn').classList.remove('active');
});

// 折り畳み機能
document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    
    seeMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const seeMoreText = this.querySelector('.see-more-text');
            const seeLessText = this.querySelector('.see-less-text');
            
            // 対象となる隠し要素を取得
            let hiddenContainer;
            if (target.startsWith('publications')) {
                hiddenContainer = document.querySelector(`#${target}-list .publications-hidden`);
            } else if (target.startsWith('activities')) {
                hiddenContainer = document.querySelector(`#${target}-list .activities-hidden`);
            } else if (target.startsWith('timeline')) {
                hiddenContainer = document.querySelector(`#${target}-list .timeline-hidden`);
            } else if (target.startsWith('projects')) {
                hiddenContainer = document.querySelector(`#${target}-list .projects-hidden`);
            }
            
            if (hiddenContainer) {
                const isHidden = hiddenContainer.classList.contains('hidden');
                
                if (isHidden) {
                    // 表示する
                    hiddenContainer.classList.remove('hidden');
                    hiddenContainer.classList.add('show');
                    
                    seeMoreText.style.display = 'none';
                    seeLessText.style.display = 'inline';
                } else {
                    // 折りたたむ
                    hiddenContainer.classList.add('hidden');
                    hiddenContainer.classList.remove('show');
                    
                    seeMoreText.style.display = 'inline';
                    seeLessText.style.display = 'none';
                }
            }
        });
    });
});
</script>
