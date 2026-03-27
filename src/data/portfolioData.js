import {
  Shield, Library, Gamepad2, Database, Leaf,
  Monitor, Volume2, Car, Cpu,
  Shield as ShieldIcon, Brain, Globe, BarChart2, Network,
  Github,
  Mail, Linkedin, Download,
} from 'lucide-react';

export const heroPhrases = {
  en: ['Cybersecurity Enthusiast','AI & Gen AI Practitioner','Web Developer','Network Enthusiast','MIS Student'],
  ar: ['متحمس للأمن السيبراني','ممارس للذكاء الاصطناعي','مطور ويب','متحمس للشبكات','طالب نظم معلومات'],
};

export const contactCVPath = process.env.PUBLIC_URL + '/assets/kareem-cv.pdf';

export const contactLinks = [
  { href:'mailto:karemalwy1@gmail.com', label:{ en:'karemalwy1@gmail.com', ar:'karemalwy1@gmail.com' }, Icon:Mail },
  { href:'https://www.linkedin.com/in/karem-basem', label:{ en:'LinkedIn', ar:'LinkedIn' }, Icon:Linkedin },
  { href:'https://github.com/Kareem-Basem', label:{ en:'GitHub', ar:'GitHub' }, Icon:Github },
  { href: contactCVPath, label:{ en:'Download CV', ar:'تحميل السيرة الذاتية' }, Icon:Download, download:'Kareem_Basem_CV.pdf' },
];

export const experienceData = {
  en: {
    internships: [
      {
        type:'internship', date:'Sep 2025 – Present · 7 months',
        role:'Intern — Banking Operations',
        org:'Commercial International Bank (CIB)', location:'Asyut',
        desc:'Selected for on-site branch internship based on outstanding online training performance. Gained practical experience in banking operations and customer service.',
        certImg:'/assets/certs/cib_cert_aug.jpg',
      },
      {
        type:'internship', date:'Jul 2025 · 2 Weeks',
        role:'Summer Intern — IT Department',
        org:'ASORC — Assiut Oil Refining Company', location:'Asyut',
        desc:'Assisted with technical support, software troubleshooting, and network monitoring. Real-world experience in petroleum industry IT systems and hardware maintenance.',
        certImg:'/assets/certs/asorc_cert_new.jpg',
      },
      {
        type:'internship', date:'Jul 2025 · 1 Month',
        role:'Intern',
        org:'Arab Egyptian Land Bank (EALB)', location:'Asyut',
        desc:'Hybrid banking internship — gained exposure to land bank operations and financial services.',
        certImg: null,
      },
      {
        type:'internship', date:'Aug 2024 · 2 Weeks',
        role:'Intern — Marketing & Operations',
        org:'Nile Petroleum Marketing Co.', location:'Asyut',
        desc:'Blended theoretical + practical marketing training. Data entry, computer operations, and cross-functional team collaboration.',
        certImg:'/assets/certs/nile_oil_cert_new.jpg',
      },
      {
        type:'internship', date:'Jan 2025 – Present · 1y 3m',
        role:'Head of IT',
        org:'Infinity Team — IUA', location:'Asyut',
        desc:'Supporting technical operations and providing IT assistance during events. Contributing to digital presence and coordinating with different teams.',
        certImg: null,
      },
    ],
    trainings: [
      {
        type:'training', date:'Aug 2025 – Present · 8 months',
        role:'Online Training Program',
        org:'CIB × SAS × Udemy × LinkedIn', location:'Online',
        desc:'Responsible Innovation and Trustworthy AI (SAS) · Customer Centricity (Udemy) · Sustainability Foundations (LinkedIn Learning)',
        certImg:'/assets/certs/cib_cert_jul.jpg',
      },
      {
        type:'training', date:'Jul 2025',
        role:'Maharat Digital Marketing',
        org:'Banque Misr × Google', location:'Online',
        desc:'Digital Marketing Fundamentals & online business strategies via "Maharat min Google" program.',
        certImg:'/assets/certs/banque_misr_training.jpg',
      },
      {
        type:'training', date:'Oct 2024',
        role:'Digital Business Services Simulation',
        org:'HSBC × Forage', location:'Online',
        desc:'Carbon-neutrality roadmaps · Sustainability initiatives · Data-driven PM recommendations',
        certImg: null,
      },
    ],
  },
  ar: {
    internships: [
      {
        type:'internship', date:'سبتمبر 2025 – الحالي · 7 أشهر',
        role:'متدرب — العمليات البنكية',
        org:'البنك التجاري الدولي (CIB)', location:'أسيوط',
        desc:'تم اختياري للتدريب الميداني بناءً على أداء متميز في التدريب الإلكتروني. خبرة عملية في العمليات البنكية وخدمة العملاء.',
        certImg:'/assets/certs/cib_cert_aug.jpg',
      },
      {
        type:'internship', date:'يوليو 2025 · أسبوعان',
        role:'متدرب صيفي — قسم تكنولوجيا المعلومات',
        org:'ASORC — شركة أسيوط لتكرير البترول', location:'أسيوط',
        desc:'مساعدة في الدعم التقني وصيانة البرامج ومراقبة الشبكات. خبرة حقيقية في أنظمة تقنية المعلومات في بيئة صناعية.',
        certImg:'/assets/certs/asorc_cert_new.jpg',
      },
      {
        type:'internship', date:'يوليو 2025 · شهر',
        role:'متدرب',
        org:'البنك العقاري المصري العربي (EALB)', location:'أسيوط',
        desc:'تدريب هجين في عمليات البنك العقاري والخدمات المالية.',
        certImg: null,
      },
      {
        type:'internship', date:'أغسطس 2024 · أسبوعان',
        role:'متدرب — التسويق والعمليات',
        org:'شركة النيل لتسويق البترول', location:'أسيوط',
        desc:'تدريب نظري وعملي في التسويق مع فريق متعدد التخصصات. إدخال البيانات والتشغيل والتعاون مع الفريق.',
        certImg:'/assets/certs/nile_oil_cert_new.jpg',
      },
      {
        type:'internship', date:'يناير 2025 – الحالي · 1 سنة+',
        role:'رئيس قسم تكنولوجيا المعلومات',
        org:'Infinity Team — IUA', location:'أسيوط',
        desc:'دعم العمليات التقنية وتقديم المساعدة الفنية خلال الفعاليات. المساهمة في الحضور الرقمي للفريق.',
        certImg: null,
      },
    ],
    trainings: [
      {
        type:'training', date:'أغسطس 2025 – الحالي · 8 أشهر',
        role:'برنامج التدريب الإلكتروني',
        org:'CIB × SAS × Udemy × LinkedIn', location:'أونلاين',
        desc:'الذكاء الاصطناعي الموثوق (SAS) · التركيز على العميل (Udemy) · أسس الاستدامة (LinkedIn Learning)',
        certImg:'/assets/certs/cib_cert_jul.jpg',
      },
      {
        type:'training', date:'يوليو 2025',
        role:'مهارات التسويق الرقمي',
        org:'بنك مصر × Google', location:'أونلاين',
        desc:'أساسيات التسويق الرقمي واستراتيجيات الأعمال عبر برنامج مهارات من Google.',
        certImg:'/assets/certs/banque_misr_training.jpg',
      },
      {
        type:'training', date:'أكتوبر 2024',
        role:'محاكاة خدمات الأعمال الرقمية',
        org:'HSBC × Forage', location:'أونلاين',
        desc:'خرائط طريق الحياد الكربوني · مبادرات الاستدامة · توصيات إدارة المشاريع',
        certImg: null,
      },
    ],
  },
};

export const certGroups = [
  { key:'cyber', icon:ShieldIcon, accent:'#2a9d8f', glow:'rgba(42,157,143,0.25)',
    certs:[
      { org:'Google / Coursera', name:'Foundations of Cybersecurity',               date:'Dec 2025', img:'/assets/certs/google_cyber_1_foundations.jpg'  },
      { org:'Google / Coursera', name:'Play It Safe: Manage Security Risks',         date:'Feb 2026', img:'/assets/certs/google_cyber_2_security_risks.jpg'},
      { org:'Google / Coursera', name:'Connect & Protect: Networks & Security',      date:'Mar 2026', img:'/assets/certs/google_cyber_3_networks.jpg'      },
      { org:'Google / Coursera', name:'Tools of the Trade: Linux and SQL',           date:'Mar 2026', img:'/assets/certs/google_cyber_4_linux_sql.jpg'     },
      { org:'Google / Coursera', name:'Assets, Threats, and Vulnerabilities',        date:'Mar 2026', img:'/assets/certs/google_cyber_5_assets.jpg'        },
      { org:'Google / Coursera', name:'Sound the Alarm: Detection & Response',       badge:'🔄 6/9', img:null },
      { org:'Sprints × Microsoft', name:'Cybersecurity Summer Camp (40 hrs)',         date:'2024',    img:'/assets/certs/sprints_microsoft.jpg' },
      { org:'HP LIFE',             name:'Cybersecurity Awareness',                    img:'/assets/certs/hp_cybersecurity.jpg' },
    ]},
  { key:'ai', icon:Brain, accent:'#f0a500', glow:'rgba(240,165,0,0.25)',
    certs:[
      { org:'NVIDIA Academy',       name:'AI for All: From Basics to GenAI',          date:'Jan 2026', img:'/assets/certs/nvidia_genai.jpg'          },
      { org:'NVIDIA Academy',       name:'Building LLM Apps with Prompt Engineering', date:'Feb 2026', img:'/assets/certs/nvidia_llm.jpg'            },
      { org:'IBM / Coursera',       name:'Introduction to Artificial Intelligence',   date:'Feb 2025', img:'/assets/certs/ibm_intro_ai.jpg'          },
      { org:'IBM / Coursera',       name:'Delivering Quality Work with Agility',      date:'Jan 2026', img:'/assets/certs/ibm_agility.jpg'           },
      { org:'Dubai Future Foundation', name:'AI Prompt Engineering — 1M Prompters',  img:'/assets/certs/dubai-ai.jpg'     },
      { org:'HP LIFE',              name:'Data Science & Analytics',                  img:'/assets/certs/hp_data_science.jpg' },
    ]},
  { key:'net', icon:Network, accent:'#4d8fff', glow:'rgba(77,143,255,0.25)',
    certs:[
      { org:'Cisco Networking Academy', name:'Networking Basics', date:'Jul 2025', img:'/assets/certs/cisco_networking.jpg' },
    ]},
  { key:'digital', icon:Globe, accent:'#e76f51', glow:'rgba(231,111,81,0.25)',
    certs:[
      { org:'Google',               name:'Digital Marketing Fundamentals',         img:'/assets/certs/google_digital_mktg.jpg' },
      { org:'Banque Misr × Google', name:'Maharat min Google — Digital Marketing', img:'/assets/certs/banque_misr_training.jpg' },
      { org:'HP LIFE',              name:'Digital Business Skills',                img:'/assets/certs/hp_digital_business.jpg' },
    ]},
  { key:'tech', icon:BarChart2, accent:'#a855f7', glow:'rgba(168,85,247,0.25)',
    certs:[
      { org:'Meta / Coursera',   name:'Introduction to Data Analytics', date:'Sep 2024', img:'/assets/certs/meta_data_analytics.jpg'   },
      { org:'ITI Mahara-Tech',   name:'Python Programming Basics',       date:'Nov 2025', img:'/assets/certs/iti_python.jpg'            },
      { org:'EYouth Learning',   name:'Blockchain Technology',           img:'/assets/certs/eyouth.jpg'               },
      { org:'LinkedIn Learning', name:'Sustainability Foundations',       date:'Aug 2025', img:'/assets/certs/linkedin_sustainability.jpg'},
    ]},
];

export const certLabels = {
  en:{ cyber:'Cybersecurity — Google 6/9 🔄', ai:'AI & Gen AI', net:'Networking', digital:'Digital & Marketing', tech:'Tech & Other' },
  ar:{ cyber:'الأمن السيبراني — Google 6/9 🔄', ai:'الذكاء الاصطناعي', net:'الشبكات', digital:'التسويق الرقمي', tech:'التقنية وغيرها' },
};

export const projectMeta = [
  { Icon: Shield,   accent:'#2a9d8f', glow:'rgba(42,157,143,0.28)'  },
  { Icon: Library,  accent:'#4d8fff', glow:'rgba(77,143,255,0.25)'  },
  { Icon: Gamepad2, accent:'#f0a500', glow:'rgba(240,165,0,0.28)'   },
  { Icon: Gamepad2, accent:'#e05c2e', glow:'rgba(224,92,46,0.28)'   },
  { Icon: Database, accent:'#a855f7', glow:'rgba(168,85,247,0.25)'  },
  { Icon: Leaf,     accent:'#e76f51', glow:'rgba(231,111,81,0.25)'  },
];

export const projectChips = {
  en: [
    ['React','Node.js','SQL Server','JWT'],
    ['HTML','CSS','JavaScript'],
    ['Graphics','Vehicles','Sound'],
    ['Graphics','Vehicles','Sound'],
    ['MS Access','Relational DB','Team ×4'],
    ['ESG','Strategy','Forage'],
  ],
  ar: [
    ['React','Node.js','SQL Server','JWT'],
    ['HTML','CSS','JavaScript'],
    ['رسومات','سيارات','صوت'],
    ['رسومات','سيارات','صوت'],
    ['MS Access','قاعدة بيانات','فريق ×4'],
    ['الاستدامة','استراتيجية','Forage'],
  ],
};

export const examorFeatures = {
  en: [
    { done:true,  text:'Role system: Admin / Doctor / Student' },
    { done:true,  text:'MCQ, True/False, Essay question types' },
    { done:true,  text:'Auto-grading for MCQ & True/False' },
    { done:true,  text:'Unique exam code per exam' },
    { done:true,  text:'JWT auth + bcrypt password hashing' },
    { done:true,  text:'SQL Injection protection' },
    { done:true,  text:'20+ REST API endpoints' },
    { done:true,  text:'Countdown timer with auto-submit' },
    { done:true,  text:'Frontend dashboards' },
    { done:true,  text:'Deployed (Vercel)' },
  ],
  ar: [
    { done:true,  text:'نظام أدوار: Admin / Doctor / Student' },
    { done:true,  text:'MCQ + صح/خطأ + مقالي' },
    { done:true,  text:'تصحيح تلقائي للأسئلة الموضوعية' },
    { done:true,  text:'كود فريد لكل امتحان' },
    { done:true,  text:'JWT + bcrypt لحماية كلمات المرور' },
    { done:true,  text:'حماية من SQL Injection' },
    { done:true,  text:'+20 API endpoint' },
    { done:true,  text:'عداد تنازلي مع تسليم تلقائي' },
    { done:true,  text:'لوحات التحكم' },
    { done:true,  text:'تم النشر (Vercel)' },
  ],
};

export const gtaData = {
  vc: {
    github: 'https://github.com/Kareem-Basem/GTA-Vice-City-KeMoO-Edition',
    en: {
      title: 'GTA: Vice City — KeMoO Edition v.3',
      icon: '/assets/gta-vc-icon.png',
      docImg: '/assets/gta-vc-doc.jpg',
      shots: [
        '/assets/previews/gta-vc-1.webp',
        '/assets/previews/gta-vc-2.webp',
        '/assets/previews/gta-vc-3.webp',
      ],
      era: '1980s Atmosphere',
      accentColor: '#f0a500',
      features: [
        { Icon: Monitor, label:'Graphics',  text:'Fully upgraded textures to modern standards, realistic environment.' },
        { Icon: Car,     label:'Vehicles',  text:'All vehicles replaced with authentic 1980s models.' },
        { Icon: Volume2, label:'Audio',     text:'Complete soundtrack & environmental sound overhaul.' },
        { Icon: Cpu,     label:'Engine',    text:'Refined movement mechanics, bug-free stable performance.' },
      ],
      sysReq: {
        min:  'Core i5 2400 · 8GB RAM · GTX 710 · 6GB',
        rec:  'Core i5 3470 · 16GB RAM · GTX 1050 · 6GB',
      },
      note: '© 2024 KeMoO Interactive — Unofficial mod, not endorsed by Rockstar.',
    },
    ar: {
      title: 'GTA: Vice City — إصدار KeMoO v.3',
      icon: '/assets/gta-vc-icon.png',
      docImg: '/assets/gta-vc-doc.jpg',
      shots: [
        '/assets/previews/gta-vc-1.webp',
        '/assets/previews/gta-vc-2.webp',
        '/assets/previews/gta-vc-3.webp',
      ],
      era: 'أجواء الثمانينيات',
      accentColor: '#f0a500',
      features: [
        { Icon: Monitor, label:'الرسومات',  text:'ترقية شاملة للـ textures لمعايير حديثة.' },
        { Icon: Car,     label:'السيارات',  text:'استبدال كامل بموديلات أصيلة من الثمانينيات.' },
        { Icon: Volume2, label:'الصوت',     text:'إعادة تصميم كاملة للموسيقى والمؤثرات الصوتية.' },
        { Icon: Cpu,     label:'المحرك',    text:'تحسين ميكانيكيات الحركة، أداء مستقر.' },
      ],
      sysReq: {
        min: 'Core i5 2400 · 8GB RAM · GTX 710 · 6GB',
        rec: 'Core i5 3470 · 16GB RAM · GTX 1050 · 6GB',
      },
      note: '© 2024 KeMoO Interactive — تعديل غير رسمي، غير معتمد من Rockstar.',
    },
  },
  sa: {
    github: 'https://github.com/Kareem-Basem/GTA-San-Andreas-KeMoO-Edition',
    en: {
      title: 'GTA: San Andreas — KeMoO Edition v.3',
      icon: '/assets/gta-sa-icon.png',
      docImg: '/assets/gta-sa-doc.jpg',
      shots: [
        '/assets/previews/gta-sa-1.webp',
        '/assets/previews/gta-sa-2.webp',
        '/assets/previews/gta-sa-3.webp',
      ],
      era: '1990s Spirit',
      accentColor: '#e05c2e',
      features: [
        { Icon: Monitor, label:'Graphics',  text:'Modern textures with 90s aesthetics, up to 4K resolution support.' },
        { Icon: Car,     label:'Vehicles',  text:'New & redesigned vehicles capturing the 90s vibe, enhanced AI.' },
        { Icon: Volume2, label:'Audio',     text:'Full sound overhaul including environmental effects & soundtrack.' },
        { Icon: Cpu,     label:'Engine',    text:'Improved movement mechanics, weather/lighting/shadow updates.' },
      ],
      sysReq: {
        min: 'Core i5 3470 · 8GB RAM · GTX 660 · 20GB',
        rec: 'Core i7 4790 · 16GB RAM · GTX 1050 · 20GB',
      },
      note: '© 2024 KeMoO Interactive — Unofficial mod, not endorsed by Rockstar.',
    },
    ar: {
      title: 'GTA: San Andreas — إصدار KeMoO v.3',
      icon: '/assets/gta-sa-icon.png',
      docImg: '/assets/gta-sa-doc.jpg',
      shots: [
        '/assets/previews/gta-sa-1.webp',
        '/assets/previews/gta-sa-2.webp',
        '/assets/previews/gta-sa-3.webp',
      ],
      era: 'روح التسعينيات',
      accentColor: '#e05c2e',
      features: [
        { Icon: Monitor, label:'الرسومات',  text:'تكستر حديثة بأجواء التسعينيات، دعم حتى دقة 4K.' },
        { Icon: Car,     label:'السيارات',  text:'سيارات جديدة بروح التسعينيات، تحسين الذكاء الاصطناعي.' },
        { Icon: Volume2, label:'الصوت',     text:'إعادة تصميم كاملة للصوتيات والموسيقى والمؤثرات.' },
        { Icon: Cpu,     label:'المحرك',    text:'تحسين الحركة، تحديث الطقس والإضاءة والظلال.' },
      ],
      sysReq: {
        min: 'Core i5 3470 · 8GB RAM · GTX 660 · 20GB',
        rec: 'Core i7 4790 · 16GB RAM · GTX 1050 · 20GB',
      },
      note: '© 2024 KeMoO Interactive — تعديل غير رسمي، غير معتمد من Rockstar.',
    },
  },
};

export const projectLinks = {
  github: {
    examor: 'https://github.com/Kareem-Basem/Examor-platform',
    vision: 'https://github.com/Kareem-Basem/vision-library',
    vc: gtaData.vc.github,
    sa: gtaData.sa.github,
  },
  live: {
    examor: 'https://examor-frontend.vercel.app',
    vision: 'https://kareem-basem.github.io/vision-library/index.html',
  },
};

export const projectPreviews = [
  ['/assets/previews/examor.webp'],
  ['/assets/previews/vision-library.webp'],
  ['/assets/previews/gta-vc-1.webp', '/assets/previews/gta-vc-2.webp', '/assets/previews/gta-vc-3.webp'],
  ['/assets/previews/gta-sa-1.webp', '/assets/previews/gta-sa-2.webp', '/assets/previews/gta-sa-3.webp'],
  ['/assets/previews/btech-1.webp', '/assets/previews/btech-2.webp', '/assets/previews/btech-3.webp'],
  null,
];
