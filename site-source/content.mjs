export const profile = {
  intro: ['同济大学机械工程与机器人学院本科生，Tjark 实验室实习生。关注机械设计、空间感知与自主导航，立志成为一名全栈机器人工程师。', 'I’m an undergraduate at Tongji University’s School of Mechanical Engineering and Robotics and an intern at the Tjark Lab. I’m interested in mechanical design, spatial perception, and autonomous navigation, and I aspire to become a full-stack robotics engineer.'],
  email: '2454007@tongji.edu.cn',
  resume: '简历最终版.pdf',
};

export const projects = [
  {
    id: 'packaging', category: ['机械设计 · 团队负责人', 'Mechanical design · Team lead'],
    title: ['智封速装：全自动饮品灌装打包机', 'Automated Beverage Filling and Packaging Machine'],
    summary: ['带领团队设计全自动奶茶包装机，将灌装和包装工序整合到一套机械系统中。项目获第十六届「上图杯」上海市一等奖。', 'I led the team designing an automated milk tea packaging machine that integrates filling and packaging in one mechanical system. The project won first prize in the 16th Shangtu Cup in Shanghai.'],
    image: 'packaging.webp', video: 'packaging.mp4', demo: 'packaging-demo.webp', award: 'drawing.webp',
    awardLabel: ['上图杯一等奖证书', 'Shangtu Cup first prize certificate'],
  },
  {
    id: 'innovation', category: ['创新大赛 · 2026', 'Innovation competition · 2026'],
    title: ['灵眸巧手：游乐设施智能运维与安全管控', 'Intelligent Maintenance and Safety for Amusement Rides'],
    summary: ['这段国创项目短片展示了面向游乐设施的具身智能集群运维与安全管控平台，包括巡检、故障识别和安全管理。', 'This competition video presents an embodied AI platform for ride inspection, fault detection, and safety management. The video has Chinese subtitles.'],
    image: 'innovation.webp', video: 'innovation.mp4',
  },
];

export const research = [
  {
    title: ['具身空间感知与记忆系统', 'Embodied Spatial Perception and Memory'],
    when: ['2026.06 至今 · 独立开发', 'Jun 2026–present · Independent development'],
    text: ['在宇树 Go2 四足机器人上构建空间语义记忆，结合 LiDAR-SLAM、语义文本、视觉特征与位姿，实现语音打标和自然语言检索。', 'I’m building spatial semantic memory on a Unitree Go2 quadruped, combining LiDAR SLAM, text, visual features, and robot poses to support voice tagging and natural-language retrieval.'],
    detail: ['采用 SemanticTag 三元组组织空间记忆，探索向导记忆和用户偏好记忆，并通过 Fast DDS 与 Cyclone DDS 的对照实验排查 ROS 2 / DDS 内存问题。', 'The system organizes spatial memories as SemanticTag triples. I explored guide and user preference memory and compared Fast DDS and Cyclone DDS to investigate ROS 2 memory issues.'],
    tags: 'ROS 2 / LiDAR SLAM / Unitree Go2',
  },
  {
    title: ['视觉语言导航（VLN）', 'Vision-and-Language Navigation (VLN)'],
    when: ['2026.01–05 · 复现与部署', 'Jan–May 2026 · Reproduction and deployment'],
    text: ['搭建 VLN-CE 评测环境，复现 ETPNav、CityNav，并在 Go2 端侧部署 LightNav。', 'I set up the VLN-CE evaluation environment, reproduced ETPNav and CityNav, and deployed LightNav on the Go2.'],
    detail: ['围绕语言指令驱动的自主导航，从仿真评测过渡到真机部署。', 'The work took language-guided autonomous navigation from simulation evaluation to deployment on a physical robot.'],
    tags: 'VLN-CE / ETPNav / CityNav / LightNav',
  },
];

export const honors = [
  {
    id: 'national', title: ['国家级竞赛', 'National competitions'], note: ['全国赛事决赛获奖', 'Awards at national finals'],
    items: [
      [['第十九届全国大学生节能减排社会实践与科技竞赛', '19th National College Students’ Energy Conservation and Emission Reduction Competition'], ['全国三等奖', 'National third prize'], ['半导体制造洁净室颗粒泄漏溯源', 'Particle leak source tracing for semiconductor cleanrooms'], ['energy-national.webp']],
    ],
  },
  {
    id: 'regional', title: ['省市级竞赛', 'Provincial and municipal competitions'], note: ['上海市及上海赛区获奖', 'Awards in Shanghai and Shanghai regional rounds'],
    items: [
      [['中国国际大学生创新大赛（2025）· 红旅组', 'China International College Students’ Innovation Competition (2025) · Youth Red Dream-Building track'], ['金奖', 'Gold award'], ['上海市 · 团队成员 · 齿间星光：孤独症儿童口腔健康守护者', 'Shanghai · Team member · Oral health support for children with autism'], ['innovation-shanghai.webp']],
      [['第十六届「上图杯」先进成图技术与创新设计大赛', '16th Shangtu Cup: Advanced Engineering Drawing and Innovative Design'], ['一等奖', 'First prize'], ['上海市 · 负责人', 'Shanghai · Team lead'], ['drawing.webp']],
      [['全国大学生统计建模竞赛', 'National College Student Statistical Modeling Competition'], ['一等奖', 'First prize'], ['上海市 · 负责人', 'Shanghai · Team lead'], ['modeling.webp']],
      [['节能减排大赛', 'Energy Conservation and Emission Reduction Competition'], ['二等奖 × 2', 'Second prize × 2'], ['上海市', 'Shanghai'], ['energy-regional-a.webp', 'energy-regional-b.webp']],
      [['土木工程材料竞赛', 'Civil Engineering Materials Competition'], ['二等奖', 'Second prize'], ['上海市', 'Shanghai']],
      [['全国大学生英语翻译大赛', 'National College English Translation Competition'], ['二等奖', 'Second prize'], ['上海市', 'Shanghai'], ['translation.webp']],
      [['大学生数学竞赛', 'Chinese Mathematics Competition for College Students'], ['三等奖', 'Third prize'], ['上海赛区', 'Shanghai regional round']],
      [['iCAN 创新大赛', 'iCAN Innovation Contest'], ['三等奖', 'Third prize'], ['上海赛区 · 负责人', 'Shanghai regional round · Team lead'], ['ican.webp']],
      [['「笔墨中国」硬笔书法比赛', 'Ink and Brush China Hard-Pen Calligraphy Competition'], ['优秀奖', 'Award of Excellence'], ['上海市', 'Shanghai']],
    ],
  },
  {
    id: 'campus', title: ['校级竞赛', 'University competitions'], note: ['同济大学校赛与校内竞赛', 'Tongji University selection rounds and campus competitions'],
    items: [
      [['中国国际大学生创新大赛 · 校赛', 'China International College Students’ Innovation Competition · Campus round'], ['金奖 / 银奖', 'Gold / Silver'], ['本科生创意组银奖项目负责人 · 智慧物流', 'Led the silver award project in the undergraduate creativity track · Smart logistics'], ['campus-silver.webp']],
      [['人居智能环境大赛', 'Intelligent Living Environment Competition'], ['一等奖', 'First prize'], ['负责人', 'Team lead']],
      [['2025 年同济大学应用力学创新赛', '2025 Tongji Applied Mechanics Innovation Competition'], ['一等奖', 'First prize'], null, ['mechanics.webp']],
      [['全国大学生统计建模竞赛 · 校赛', 'National College Student Statistical Modeling Competition · Campus round'], ['一等奖 × 2', 'First prize × 2']],
      [['全国大学生英语词汇大赛 · 校赛', 'National College English Vocabulary Competition · Campus round'], ['一等奖', 'First prize']],
      [['网上阅读征文活动', 'Online Reading Essay Competition'], ['二等奖', 'Second prize']],
      [['同济智库活动', 'Tongji Think Tank Event'], ['二等奖', 'Second prize']],
      [['土木工程新生结构赛', 'Civil Engineering Freshman Structural Design Competition'], ['三等奖', 'Third prize']],
      [['2025年第六届同济大学物理实验创新设计竞赛', '6th Tongji University Physics Experiment Innovation and Design Competition (2025)'], ['优秀奖', 'Award of Excellence']],
      [['校内硬笔书法比赛', 'Campus Hard-Pen Calligraphy Competitions'], ['一等奖', 'First prize'], ['多次获奖', 'Multiple awards']],
    ],
  },
  {
    id: 'international', title: ['国际赛事', 'International competitions'], note: ['国际竞赛获奖', 'Awards in international competitions'],
    items: [[['数维杯数学建模国际赛', 'Shuwei Cup International Mathematical Modeling Competition'], ['H 奖', 'Honorable Mention']]],
  },
];

export const mediaLinks = [
  ['https://mp.weixin.qq.com/s/6xz0Z2mVwIKDAIjblvkcrw', ['上海教育电视台采访', 'Shanghai Education TV interview']],
  ['https://ggw.tongji.edu.cn/index.php?classid=1110&newsid=21345&t=show', ['同济大学 · 网络征文获奖报道', 'Tongji University · Essay competition coverage']],
  ['https://mp.weixin.qq.com/s/QQr8W3RbZPbw9rHsT3Hj2Q', ['同济大学校园报道', 'Tongji University campus coverage']],
  ['https://mp.weixin.qq.com/s/YfJO0ObQDlrRwATItnB0BA', ['学校专访', 'University profile']],
];

export const activities = [
  [['同济大学济行社 · 宣传部', 'Tongji Jixing Society · Communications'], ['2025.09 至今', 'Sep 2025–present'], ['撰写公众号推文与活动文案。', 'Write articles and event copy for the society.']],
  [['同济大学创新创业部 · 综合管理部', 'Tongji Innovation and Entrepreneurship Department · General administration'], ['2024.09 至今', 'Sep 2024–present'], ['协助部员培训、交流会议与跨部门协调。', 'Help with member training, meetings, and coordination across departments.']],
  [['同济大学点墨轩 · 宣传部', 'Tongji Dianmoxuan · Communications'], ['2024.09 至今', 'Sep 2024–present'], ['组织活动，撰写文案，推广书法。', 'Organize events, write copy, and promote calligraphy.']],
  [['同济大学女子学院 · 文案部', 'Tongji Women’s College · Editorial team'], ['2024.09–2025.09', 'Sep 2024–Sep 2025'], ['参与活动组织与记录，并为校级公众号撰稿。', 'Helped organize and document events and wrote for university social media.']],
];
