---
layout: page
title: About Me
permalink: /about
comments: false
hide_toc: true
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
                <ul class="list-unstyled">
                    <li class="mb-3">
                        <strong>ユーザ利⽤機会公平性を考慮するクラウドバースティング環境向けスケジューリング⼿法の提案</strong>,2024年2月 卒業論文<br>
                        <strong>Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks</strong>,2025年11月 CANDAR 2025 <br>

                    </li>
                    <!-- 他の論文を追加 -->
                </ul>
            </div>

            <h2 class="mb-4">研究活動実績</h2>
            <div class="activities mb-5">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">2025/11/25-28</div>
                            <h4>CANDAR 2025@山形, Japan</h4>
                            <span class="conference-subtitle">The Thirteenth International Symposium on Computing and Networking</span>
                            <ul class="activity-details">
                                <li>口頭発表：「Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks」</li>
                            </ul>
                        </div>
                    </div>
                        <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">2024/10/12</div>
                            <h4>SC25@St.louis, USA</h4>
                            <span class="conference-subtitle">SuperComputing 2025</span>
                            <ul class="activity-details">
                                <li>大学の展示ブースにて、組織および自分の研究活動についてのポスター展示を行う</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">2024/11/23</div>
                            <h4>PRAGMA40@penang, Malaysia</h4>
                            <span class="conference-subtitle">The 40th meeting of the Pacific Rim Applications and Grid Middleware Assembly</span>
                            <ul class="activity-details">
                                <li>Student Committeeを務める</li>
                                <li>ポスタープレゼンテーション：「Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness」</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">2024/11/23</div>
                            <h4>SC24@atlanta, USA</h4>
                            <span class="conference-subtitle">SuperComputing 2024</span>
                            <ul class="activity-details">
                                <li>大学の展示ブースにて、組織および自分の研究活動についてのポスター展示を行う</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="mb-4">経歴</h2>
            <div class="timeline mb-5">
                <div class="timeline-item">
                    <div class="timeline-date">2024年4月 - 現在</div>
                    <div class="timeline-content">
                        <h4>大阪大学　大学院情報科学研究科　卒業見込み</h4>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2020年4月 - 2024年3月</div>
                    <div class="timeline-content">
                        <h4>大阪大学　工学部電子情報工学科</h4>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2017年4月 - 2020年3月</div>
                    <div class="timeline-content">
                        <h4>私立　須磨学園高等学校</h4>
                    </div>
                </div>

            </div>

            <h2 class="mb-4">成果物</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <img src="{{site.baseurl}}/assets/images/date-muscle.png" alt="プロジェクト1" />
                    <h4>Lab-Muscle-Club</h4>
                    <p>友人と筋トレの記録を共有するアプリ</p>
                    <a href="https://yope7.github.io/muscle-club-webapp/" class="btn btn-primary">詳細</a>
                    <a href="https://date-muscle-club.web.app/" class="btn btn-primary">使ってみる</a>
                </div>
                <!-- 他のプロジェクトを追加 -->
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
                <ul class="list-unstyled">
                    <li class="mb-3">
                        <strong>Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness</strong>, February 2024 (Bachelor Thesis)<br>
                        <strong>Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks</strong>, November 2025 (CANDAR 2025)<br>
                    </li>
                </ul>
            </div>

            <h2 class="mb-4">Research Activities</h2>
            <div class="activities mb-5">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">November 25-28, 2025</div>
                            <h4>CANDAR 2025 @ Yamagata, Japan</h4>
                            <span class="conference-subtitle">The Thirteenth International Symposium on Computing and Networking</span>
                            <ul class="activity-details">
                                <li>Oral Presentation: "Exploring Diverse Cloud Bursting Policies Using Pareto Conditioned Networks"</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">October 12, 2024</div>
                            <h4>SC25 @ St. Louis, USA</h4>
                            <span class="conference-subtitle">SuperComputing 2025</span>
                            <ul class="activity-details">
                                <li>Presented posters about organizational and personal research at the university exhibition booth</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">November 23, 2024</div>
                            <h4>PRAGMA40 @ Penang, Malaysia</h4>
                            <span class="conference-subtitle">The 40th meeting of the Pacific Rim Applications and Grid Middleware Assembly</span>
                            <ul class="activity-details">
                                <li>Served as a Student Committee member</li>
                                <li>Poster Presentation: "Proposal for a Scheduling Method in Cloud Bursting (CB) Environments Considering User Opportunity Fairness"</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="activity-card">
                            <div class="activity-date">November 23, 2024</div>
                            <h4>SC24 @ Atlanta, USA</h4>
                            <span class="conference-subtitle">SuperComputing 2024</span>
                            <ul class="activity-details">
                                <li>Presented research activities at the university exhibition booth with poster presentations about organizational and personal research</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="mb-4">Experience</h2>
            <div class="timeline mb-5">
                <div class="timeline-item">
                    <div class="timeline-date">April 2024 - Present</div>
                    <div class="timeline-content">
                        <h4>Graduate School of Information Science and Technology, Osaka University</h4>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 2020 - March 2024</div>
                    <div class="timeline-content">
                        <h4>Osaka University</h4>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 2017 - March 2020</div>
                    <div class="timeline-content">
                        <h4>Suma Gakuen High School</h4>
                    </div>
                </div>

            </div>

            <h2 class="mb-4">成果物</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <img src="{{site.baseurl}}/assets/images/project1.jpg" alt="プロジェクト1" />
                    <h4>Coming soon</h4>
                    <p>Coming soon</p>
                    <a href="#" class="btn btn-primary">詳細を見る</a>
                </div>
                <!-- 他のプロジェクトを追加 -->
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
    min-height: 280px;
    height: 100%;
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
}
</style>

<script>
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
</script>
