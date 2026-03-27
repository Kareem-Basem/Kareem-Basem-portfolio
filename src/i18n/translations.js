const t = {
  en: {
    // Navbar
    about:'About', projectsNav:'Projects', experience:'Experience',
    certs:'Certs', contact:'Contact', hireMe:'Hire Me',

    // Hero
    hiIm:"Hi, I'm",
    heroDesc:"I'm a Management Information Systems student at Sadat Academy with hands-on experience. I build projects to learn fast and deliver real value. Passionate about Cybersecurity, AI, Networking, and Web Development.",
    getInTouch:'Get In Touch', findMe:'Find me',
    openToWork:'Open to Work', availableNow:'Available now',
    certifications:'Certificates', earned:'earned',

    // About
    aboutTag:'About Me', aboutTitle:'Who I <em>Am</em>',
    aboutP1:"I'm Kareem Basem, a Management Information Systems student at Sadat Academy. I gain real-world experience through projects, with a strong foundation in software and operating systems and a problem-solving mindset.",
    aboutP2:"I'm building a focused path in AI and Cybersecurity, completing the Google Cybersecurity Professional Certificate and expanding into Networking as the next step.",
    skills:{ cyber:'Cybersecurity', ai:'AI & Gen AI', net:'Networking', web:'Web Development', game:'Game Modding', db:'Database Design' },

    // Projects
    projTag:'Selected Work', projTitle:'Featured <em>Projects</em>', techStack:'Tech Stack', topProject:'Top Project', showPreview:'Show Preview', hidePreview:'Hide Preview',
    inProgress:'🔄 In Progress',
    projects:[
      { tag:'Full Stack Platform', title:'Examor — Online Exam Platform',       desc:'End-to-end exam platform for institutions. React + Node.js + SQL Server with JWT auth, auto-grading, role-based access, and unique exam codes.' },
      { tag:'Web Project',         title:'Vision Library',                        desc:'Library web app with catalog, cart, and checkout. Built with HTML, CSS, and JavaScript.' },
      { tag:'Game Modding',        title:'GTA: Vice City — Total Overhaul',       desc:'HD textures, redesigned vehicles, revamped sound engine, and 1980s atmosphere. Full AR/EN docs.' },
      { tag:'Game Modding',        title:'GTA: San Andreas — Next-Gen Mod',       desc:'Modern textures, improved lighting, 4K support, and gameplay overhaul with a 1990s vibe.' },
      { tag:'Database Systems',    title:'B.Tech CRM System',                     desc:'MS Access CRM with relational schema, interactive forms, invoice tracking, and sales reporting.' },
      { tag:'Sustainability',      title:'HSBC Carbon Neutrality Sim',            desc:'Built carbon‑neutrality roadmaps and data‑driven sustainability recommendations via Forage.' },
    ],

    // Experience
    // Experience
    expTag:'Career', expTitle:'Experience & <em>Training</em>',
    all:'All', internships:'Internships', training:'Training',

    // Certs
    certsTag:'Credentials', certsTitle:'<em>Certifications</em>',

    // Contact
    conTag:'Contact', conTitle:"Let's Work <em>Together.</em>",
    conSub:"Open to internships, freelance projects, and full-time roles in Cybersecurity, AI, Networking, or Web Development. Based in Asyut — available remotely.",
  },

  ar: {
    // Navbar
    about:'عني', projectsNav:'مشاريع', experience:'خبرة',
    certs:'شهادات', contact:'تواصل', hireMe:'وظّفني',

    // Hero
    hiIm:'أهلاً، أنا',
    heroDesc:'طالب نظم معلومات إدارية في أكاديمية السادات مع خبرة عملية. أعمل على مشاريع تساعدني على التعلّم بسرعة وتقديم قيمة حقيقية. شغوف بالأمن السيبراني والذكاء الاصطناعي والشبكات وتطوير الويب.',
    getInTouch:'تواصل معي', findMe:'تجدني على',
    openToWork:'متاح للعمل', availableNow:'متاح الآن',
    certifications:'شهادة', earned:'حصلت عليها',

    // About
    aboutTag:'عني', aboutTitle:'من <em>أنا</em>',
    aboutP1:'أنا كريم باسم، طالب نظم معلومات إدارية في أكاديمية السادات. أكتسب خبرة واقعية عبر المشاريع، مع أساس قوي في البرمجيات وأنظمة التشغيل وعقلية حل المشكلات.',
    aboutP2:'أبني مساراً متخصصاً في الذكاء الاصطناعي والأمن السيبراني، وأكمل شهادة Google للأمن السيبراني مع التوسع في الشبكات كخطوة تالية.',
    skills:{ cyber:'الأمن السيبراني', ai:'الذكاء الاصطناعي', net:'الشبكات', web:'تطوير الويب', game:'تعديل الألعاب', db:'قواعد البيانات' },

    // Projects
    projTag:'أعمالي', projTitle:'المشاريع <em>المميزة</em>', techStack:'التقنيات', topProject:'مشروع مميز', showPreview:'عرض الصورة', hidePreview:'إخفاء الصورة',
    inProgress:'🔄 قيد التطوير',
    projects:[
      { tag:'Full Stack',       title:'Examor — منصة امتحانات',              desc:'منصة امتحانات متكاملة للمؤسسات. React + Node.js + SQL Server مع JWT وتصحيح تلقائي ونظام أدوار وكود امتحان فريد.' },
      { tag:'مشروع ويب',        title:'Vision Library',                       desc:'موقع مكتبة بكتالوج كتب وسلة تسوق وإتمام الدفع. مبني بـ HTML و CSS و JavaScript.' },
      { tag:'تعديل ألعاب',      title:'GTA: Vice City — إعادة تصميم شاملة',  desc:'تحسين الرسومات والسيارات والصوت بأجواء الثمانينيات، مع توثيق عربي/إنجليزي.' },
      { tag:'تعديل ألعاب',      title:'GTA: San Andreas — نسخة الجيل الجديد',desc:'تكستر وإضاءة حديثة مع دعم 4K وتعديلات لعب بطابع التسعينيات.' },
      { tag:'قواعد بيانات',     title:'نظام إدارة B.Tech CRM',               desc:'نظام Access لإدارة العملاء والمبيعات والفواتير مع تقارير أداء تفاعلية.' },
      { tag:'استدامة',          title:'محاكاة HSBC للحياد الكربوني',          desc:'بناء خرائط طريق للحياد الكربوني وتوصيات استدامة قائمة على البيانات عبر Forage.' },
    ],

    // Experience
    // Experience
    expTag:'المسار المهني', expTitle:'الخبرة <em>والتدريب</em>',
    all:'الكل', internships:'التدريبات', training:'الكورسات',

    // Certs
    certsTag:'الشهادات', certsTitle:'<em>شهاداتي</em>',

    // Contact
    conTag:'تواصل', conTitle:'لنعمل <em>معاً.</em>',
    conSub:'متاح للتدريب والمشاريع الحرة والعمل بدوام كامل في مجالات الأمن السيبراني والذكاء الاصطناعي والشبكات وتطوير الويب. في أسيوط — متاح عن بُعد.',
  }
};

export default t;
