import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { profile, projects, research, honors, mediaLinks, activities } from './content.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const pages = {
  home: ['index.html', ['主页', 'Home']],
  work: ['work.html', ['作品', 'Work']],
  honors: ['honors.html', ['荣誉', 'Honors']],
  life: ['life.html', ['校园与人文', 'Campus & Culture']],
};

for (const [i, lang] of ['zh-CN', 'en'].entries()) {
  const english = i === 1;
  const folder = english ? 'en/' : '';
  const up = english ? '../' : '';
  const t = (pair) => pair[i];
  const tr = (zh, en) => english ? en : zh;
  const name = tr('赵睿洁', 'Ruijie Zhao');
  const asset = (file) => up + file;
  const page = (key) => pages[key][0];
  const sectionHead = (title, link = '') => `<div class="section-head"><h2>${title}</h2>${link}</div>`;
  const link = (href, label) => `<a class="text-link" href="${href}">${label} <span aria-hidden="true">↗</span></a>`;
  const cv = `<a class="button" href="${asset(profile.resume)}" download>${tr('下载简历', 'Download CV (Chinese)')} <span aria-hidden="true">↓</span></a>`;
  const heading = (title, text) => `<div class="page-intro"><h1>${title}</h1><p>${text}</p></div>`;
  const picture = (image, alt = '', eager = false) =>
    `<img src="${asset('assets/media/' + image)}" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

  function researchList(detailed) {
    return `<div class="research-list">${research.map(item => `
      <article class="research-item">
        <p class="meta">${t(item.when)}</p>
        <div><h3>${t(item.title)}</h3><p>${t(item.text)}</p>
        ${detailed ? `<p>${t(item.detail)}</p>` : ''}
        <p class="tech">${item.tags}</p></div>
      </article>`).join('')}</div>`;
  }

  function workCard(item) {
    const href = `${page('work')}#${item.id}`;
    return `
      <article class="work-card">
        <a class="work-image" href="${href}" tabindex="-1" aria-hidden="true">
          ${picture(item.image)}
          <span class="video-badge"><span aria-hidden="true">▶</span> ${tr('视频', 'Video')}</span>
        </a>
        <div class="work-body"><p class="meta">${t(item.category)}</p>
        <h3><a href="${href}">${t(item.title)} <span aria-hidden="true">↗</span></a></h3></div>
      </article>`;
  }

  function certificate(file, title) {
    const url = asset('assets/certificates/' + file);
    return `<a class="certificate" href="${url}" target="_blank" rel="noopener">
      <img src="${url}" alt="${title}" loading="lazy" decoding="async"><span>${tr('查看大图', 'Open full image')} <span aria-hidden="true">↗</span></span>
    </a>`;
  }

  function awardGroup(group) {
    return `<section class="award-group" id="${group.id}" data-level="${group.id}">
      <div class="award-head"><h2>${t(group.title)}</h2><p>${t(group.note)}</p></div>
      <ul class="award-list">${group.items.map(([title, prize, note, images]) => `
        <li class="award">
          <div class="award-text"><h3>${t(title)}</h3>${note ? `<p>${t(note)}</p>` : ''}</div>
          <p class="prize">${t(prize)}</p>
          ${images ? `<details class="proof" id="proof-${images[0].replace('.webp', '')}"><summary>${tr('查看证书', 'View certificate')}${images.length > 1 ? ' (' + images.length + ')' : ''}</summary>
          <div class="certificate-grid">${images.map((file, index) => certificate(file, `${t(title)} · ${t(prize)}${images.length > 1 ? ' · ' + (index + 1) : ''}`)).join('')}</div></details>` : ''}
        </li>`).join('')}</ul></section>`;
  }

  function footer() {
    return `<footer id="contact" class="wrap footer">
      <div><strong>${name}</strong><p>${tr('欢迎交流机器人、工程实践与阅读。', 'Get in touch to talk robotics, engineering, or books.')}</p></div>
      <div class="footer-links">
        <a href="mailto:${profile.email}">${tr('邮件', 'Email')}</a>
        <a href="https://github.com/sutinah12-hash">GitHub</a>
        <a href="https://gitee.com/zhao-ruijie80996/zhao-ruijies-personal-webpage">Gitee</a>
        <a href="https://www.zhihu.com/people/wei-meng-pin-bo-25">${tr('知乎', 'Zhihu')}</a>
      </div>
    </footer>`;
  }

  function layout(key, body, description) {
    const alt = english ? '../' + page(key) : 'en/' + page(key);
    const title = key === 'home' ? `${name} | ${tr('个人主页', 'Personal Homepage')}` : `${t(pages[key][1])} | ${name}`;
    return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#f6f5f0">
  <title>${title}</title>
  <link rel="alternate" hreflang="${english ? 'zh-CN' : 'en'}" href="${alt}">
  <link rel="stylesheet" href="${asset('assets/site.css')}">
  <script src="${asset('assets/site.js')}" defer></script>
</head>
<body>
  <a class="skip" href="#main">${tr('跳转到正文', 'Skip to content')}</a>
  <header class="top">
    <div class="wrap nav">
      <a class="brand" href="${page('home')}"><span aria-hidden="true" class="monogram">RZ</span>${name}</a>
      <nav aria-label="${tr('主导航', 'Main navigation')}">${Object.entries(pages).map(([item, [url, label]]) =>
        `<a href="${url}"${item === key ? ' aria-current="page"' : ''}>${t(label)}</a>`).join('')}</nav>
      <a class="lang" data-language href="${alt}" hreflang="${english ? 'zh-CN' : 'en'}" lang="${english ? 'zh-CN' : 'en'}" aria-label="${tr('Switch to English', '切换到中文')}">${tr('EN', '中文')}</a>
    </div>
  </header>
  <main class="wrap" id="main">${body}</main>
  ${footer()}
</body>
</html>
`;
  }

  const home = `
    <section class="hero" id="education" aria-labelledby="name">
      <div class="hero-text">
        <p class="meta affiliation">${tr('同济大学 / Tjark 实验室', 'Tongji University / Tjark Lab')}</p>
        <h1 id="name">${name}</h1>
        <p class="name-alt" lang="${english ? 'zh-CN' : 'en'}">${tr('Ruijie Zhao', '赵睿洁')}</p>
        <p class="intro">${t(profile.intro)}</p>
        <div class="actions"><a class="button primary" href="#selected">${tr('浏览精选作品', 'See selected work')} <span aria-hidden="true">↓</span></a>${cv}</div>
        <p class="contact-line"><a href="mailto:${profile.email}">${profile.email}</a> <span aria-hidden="true">/</span> <a href="https://github.com/sutinah12-hash">GitHub</a></p>
      </div>
      <figure class="portrait">${picture('portrait.webp', tr('赵睿洁肖像', 'Portrait of Ruijie Zhao'), true)}</figure>
    </section>
    <section class="content-section" id="selected">
      ${sectionHead(tr('精选作品', 'Selected work'), link(page('work'), tr('查看全部作品', 'All work')))}
      <div class="work-grid">${projects.map(workCard).join('')}</div>
    </section>
    <section class="content-section" id="research">
      ${sectionHead(tr('科研', 'Research'), link(page('work') + '#research', tr('研究详情', 'Research details')))}
      ${researchList(false)}
    </section>
    <div class="quick-grid">
      <section id="honors"><h2>${tr('竞赛与荣誉', 'Honors & awards')}</h2><p>${tr('国家奖学金、全国节能减排大赛三等奖、上海市竞赛获奖与证书。', 'National Scholarship, a national third prize in energy conservation, and Shanghai competition awards.')}</p>${link(page('honors'), tr('浏览荣誉', 'Browse honors'))}</section>
      <section id="life"><h2>${tr('校园与人文', 'Campus & culture')}</h2><p>${tr('同济大学年度阅读之星、书法、志愿服务与媒体报道。', 'Tongji Reading Star, calligraphy, volunteering, and media coverage.')}</p>${link(page('life'), tr('了解更多', 'Explore campus & culture'))}</section>
    </div>
    <p class="home-education" id="skills">${link(page('life') + '#education', tr('教育与技能', 'Education & skills'))}</p>`;

  const work = `
    ${heading(tr('科研与作品', 'Research & work'), tr('空间感知、视觉语言导航，以及机械设计和创新实践。', 'Spatial perception, vision-and-language navigation, and engineering projects.'))}
    <section class="content-section" id="research">${sectionHead(tr('科研', 'Research'))}${researchList(true)}</section>
    <section class="content-section" id="projects">
      ${sectionHead(tr('作品视频', 'Project videos'))}
      <div class="project-list">${projects.map(item => `
        <article class="project-detail" id="${item.id}">
          <video controls preload="none" playsinline poster="${asset('assets/media/' + item.image)}" aria-label="${t(item.title)}">
            <source src="${asset('assets/media/' + item.video)}" type="video/mp4">
          </video>
          <div><p class="meta">${t(item.category)}</p><h3>${t(item.title)}</h3><p>${t(item.summary)}</p>
          <div class="project-links">
            ${link(asset('assets/media/' + item.video), tr('打开视频文件', 'Open video file'))}
            ${item.award ? link(page('honors') + '#proof-' + item.award.replace('.webp', ''), t(item.awardLabel)) : ''}
          </div>
          ${item.demo ? `<figure class="project-demo">${picture(item.demo, tr('动画中的整机与尺度示意', 'Animation still showing the machine at human scale'))}<figcaption>${tr('整机效果与尺寸示意（动画截图）', 'Machine overview and scale (animation still)')}</figcaption></figure>` : ''}
          </div>
        </article>`).join('')}</div>
    </section>`;

  const awardPage = `
    ${heading(tr('竞赛与荣誉', 'Honors & awards'), tr('全国决赛与上海赛区奖项分开列示。点击奖项下方的证书入口可查看图片。', 'National finals and Shanghai regional awards are listed separately. Use the certificate links to view available images.'))}
    <section class="scholarships" aria-labelledby="scholarships">
      <h2 id="scholarships">${tr('奖学金', 'Scholarships')}</h2>
      <div><strong>${tr('国家奖学金', 'National Scholarship')}</strong><span>2025–2026</span></div>
      <div><strong>${tr('国家励志奖学金', 'National Encouragement Scholarship')}</strong><span>2024–2025</span></div>
      <p>${tr('校级 · 2024–2025 学年校一等奖学金、社会活动奖学金', 'Tongji University · First-class Scholarship and Social Activities Scholarship, 2024–2025')}</p>
    </section>
    <div class="filters" role="group" aria-label="${tr('按获奖层级筛选', 'Filter awards by level')}" hidden>
      <button type="button" aria-pressed="true" data-filter="all">${tr('全部', 'All')}</button>
      ${honors.map(group => `<button type="button" aria-pressed="false" data-filter="${group.id}">${t(group.title)}</button>`).join('')}
    </div>
    ${honors.map(awardGroup).join('')}
    <section class="content-section other-awards"><h2>${tr('其他荣誉', 'Other distinctions')}</h2>
      <p>${tr('同济大学年度阅读之星（两次）、弘文之星、校级优秀学生、优秀共青团员、化学「MnZn」达人、GESS 会议优秀志愿者、吴忠市爱心大使。书法作品入展三明市书协书法展，并被《中国书法报》刊发。', 'Tongji University Reading Star (twice), Hongwen Star, Outstanding Student, Outstanding Youth League Member, the MnZn chemistry distinction, Outstanding Volunteer at GESS, and a volunteer ambassador in Wuzhong. My calligraphy was exhibited by the Sanming Calligraphers Association and published in China Calligraphy Newspaper.')}</p>
      <details><summary>${tr('初高中阶段获奖', 'Earlier awards')}</summary><p>${tr('信息学奥赛省三等奖、高中生物竞赛省二等奖。「笔墨中国」高中组连续两届获省一等奖、全国二等奖。建党一百周年主题文章入选福建省优秀交流展示作品并收录成书。', 'Provincial third prize in an informatics olympiad and provincial second prize in a high school biology competition. Provincial first prize and national second prize in two consecutive editions of the Ink and Brush China calligraphy competition. An essay was selected for a Fujian provincial anthology.')}</p></details>
    </section>`;

  const life = `
    ${heading(tr('校园与人文', 'Campus & culture'), tr('阅读、书法、志愿服务与校园参与。', 'Reading, calligraphy, volunteering, and university life.'))}
    <section class="culture" id="reading">
      <figure>${picture('reading.webp', tr('2024 年度阅读之星奖牌', '2024 Tongji Reading Star trophy'))}<figcaption>${tr('2024 同济大学年度阅读之星奖牌', '2024 Tongji University Reading Star trophy')}</figcaption></figure>
      <div><h2>${tr('阅读、书法与公共表达', 'Reading, calligraphy & writing')}</h2>
        <p>${tr('两次获评同济大学年度阅读之星。参与大学生阅读分享大赛，相关论文被知网收录，作品入选中华书局出版书籍。知乎累计阅读量超过 100 万。', 'I received Tongji University’s Reading Star award twice. My writing from a university reading competition was indexed by CNKI and included in a volume published by Zhonghua Book Company. My Zhihu posts have received over one million views.')}</p>
        <p>${tr('曾接受上海教育电视台采访，相关事迹获人民日报、中国青年报和同济大学报道。持续为山区孩子写信，并捐赠书籍与学习用品。', 'I was interviewed by Shanghai Education TV and featured by People’s Daily, China Youth Daily, and Tongji University. I write to children in rural areas and donate books and school supplies.')}</p>
        <ul class="media-links">${mediaLinks.map(([url, title]) => `<li>${link(url, t(title))}</li>`).join('')}</ul>
      </div>
    </section>
    <section class="content-section" id="activities">
      ${sectionHead(tr('校园参与', 'Campus activities'))}
      <ul class="timeline">${activities.map(([title, date, text]) => `<li><p class="meta">${t(date)}</p><div><h3>${t(title)}</h3><p>${t(text)}</p></div></li>`).join('')}</ul>
      <p class="additional">${tr('担任 SITP 智能配送机器人项目负责人、2026 年寒假社会实践优秀项目负责人。曾参与 2025 年寒假实践与「美好假期」志愿服务。', 'Led a campus innovation project on an intelligent delivery robot and an award-winning winter service project in 2026. Also took part in winter fieldwork and the Beautiful Holidays volunteer program in 2025.')}</p>
    </section>
    <section class="content-section" id="education">
      ${sectionHead(tr('教育与技能', 'Education & skills'))}
      <div class="quick-grid"><div><h3>${tr('同济大学 · 本科', 'Tongji University · Undergraduate')}</h3><p>${tr('机械设计制造及其自动化，2024.09–2028.06（预计）。本科生导师：卜王辉、陈启军。', 'Mechanical Design, Manufacturing and Automation, Sep 2024–Jun 2028 (expected). Undergraduate advisors: Wanghui Bu and Qijun Chen.')}</p><p>${tr('课程包括机械原理、机械设计、控制工程、电机拖动、机械振动、理论力学、材料力学、电工学与互换性测量。', 'Coursework includes mechanisms, mechanical design, control engineering, electric drives, vibrations, engineering mechanics, mechanics of materials, electrical engineering, and metrology.')}</p></div>
      <div id="skills"><h3>${tr('技能与工具', 'Tools & skills')}</h3><p>Python / C++ · ROS 2 · SLAM · Arduino IDE · SolidWorks · CAD · MATLAB · Fluent · C4D</p></div></div>
    </section>`;

  mkdirSync(join(root, folder), { recursive: true });
  for (const [key, body, description] of [
    ['home', home, t(profile.intro)],
    ['work', work, tr('赵睿洁的机器人科研、机械设计与项目视频。', 'Ruijie Zhao’s robotics research, mechanical design, and project videos.')],
    ['honors', awardPage, tr('赵睿洁的奖学金、分级竞赛荣誉与证书。', 'Ruijie Zhao’s scholarships, competition awards, and certificates.')],
    ['life', life, tr('赵睿洁的阅读、书法、校园经历与媒体报道。', 'Ruijie Zhao’s reading, calligraphy, campus activities, and media coverage.')],
  ]) {
    const html = layout(key, body, description).replace(/[ \t]+$/gm, '');
    writeFileSync(join(root, folder, page(key)), html);
  }
}
