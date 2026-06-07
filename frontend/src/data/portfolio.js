export const profile = {
  name: 'Manar Boulahouanet',
  title: 'AI Engineer · Full-Stack Developer · Renewable Energy Researcher',
  tagline: 'Building intelligent systems at the intersection of physics, code, and sustainability.',
  email: 'manar.boulahouanet@gmail.com',
  location: 'Constantine, Algeria',
  linkedin: 'https://linkedin.com/in/manar-boulahouanet-886aab327/',
  github: 'https://github.com/B-Manara',
  website: 'https://b-manar.vercel.app',
  bio: 'Physics-trained AI and full-stack engineer, ranked 2nd in my cohort (Grade A). I combine deep scientific thinking with hands-on engineering — building AI-powered systems for real clients, winning national competitions, and researching data-driven solutions for renewable energy. Currently pursuing dual MSc degrees in Energy Physics and Information Technology (AI).',
}

export const stats = [
  { value: '4×', label: 'National 1st place wins' },
  { value: '3yr', label: 'Freelance experience' },
  { value: '10+', label: 'Production apps shipped' },
  { value: '1', label: 'MSc degrees (concurrent)' },
]

export const awards = [
  {
    place: '1st',
    event: 'National Innovative Applications Competition',
    detail: 'IronRail — AI industrial safety platform',
    context: '27 teams · 17 universities · Univ. Djilali Liabès',
    year: '2026',
  },
  {
    place: '1st',
    event: 'National Mechanical Reverse Engineering Hackathon',
    detail: 'Engineering excellence award',
    context: 'University of Sétif',
    year: '2026',
  },
  {
    place: '1st',
    event: 'AI & Programming Hackathon',
    detail: 'AI Journalism Assistant with fake news detection',
    context: 'National AI & Robotics Camp · Mila',
    year: '2025',
  },
  {
    place: '2nd',
    event: 'BIOVATECH Hackathon',
    detail: 'Biotechnology innovation challenge',
    context: 'ENSB — National Higher School of Biotechnology',
    year: '2026',
  },
  {
    place: '2nd',
    event: 'National Robotics & Programming Competition',
    detail: 'Robotics engineering challenge',
    context: 'University of Biskra',
    year: '2026',
  },
  {
    place: '2nd',
    event: 'Individual Programming Competition',
    detail: 'Algorithmic problem solving under time pressure',
    context: 'National AI & Robotics Camp · Mila',
    year: '2025',
  },
]

export const projects = [
  {
    id: 'ironrail',
    title: 'IronRail',
    subtitle: 'Industrial AI Safety Platform',
    description:
      'Led end-to-end development of a real-time industrial safety system integrating computer vision for hazard detection. Ranked 1st nationally across 27 teams from 17 Algerian universities.',
    tags: ['Python', 'React', 'Node.js', 'TensorFlow', 'OpenCV', 'REST API'],
    highlight: '🥇 1st Place Nationally',
    category: 'AI / Computer Vision',
    year: '2026',
    role: 'Team Lead · AI & Full-Stack',
  },
  {
    id: 'journalism-ai',
    title: 'AI Journalism Assistant',
    subtitle: 'Fake News Detection System',
    description:
      'NLP-powered platform enabling journalists to draft faster, cross-reference verified news sources, and detect misinformation using transformer-based text classification. Won national hackathon under time constraints.',
    tags: ['Python', 'Hugging Face', 'FastAPI', 'React', 'NLP'],
    highlight: '🥇 1st Place — National Hackathon',
    category: 'NLP / Full-Stack',
    year: '2025',
    role: 'Team Lead · NLP Engineer',
  },
  {
    id: 'freelance',
    title: 'Freelance AI-Integrated Apps',
    subtitle: '10+ Production Web Applications',
    description:
      'Nearly 3 years delivering AI-powered web applications for real clients: NLP chatbots, predictive dashboards, computer vision modules, and multilingual interfaces with Figma-designed UX.',
    tags: ['React', 'Node.js', 'Python', 'Figma', 'Flask', 'FastAPI'],
    highlight: '3 Years · 10+ Clients',
    category: 'Full-Stack / UI-UX',
    year: '2023–Present',
    role: 'Full-Stack Developer',
  },
  {
    id: 'pv-sonelgaz',
    title: 'PV System Integration Study',
    subtitle: 'SONELGAZ Energy Research',
    description:
      'Complete photovoltaic system sizing for a primary school (4,900 Wh/day · 1.3 kW). Evaluated grid impact parameters including voltage variation, reverse power flow, and cathodic protection techniques.',
    tags: ['PV Systems', 'Grid Analysis', 'MATLAB', 'Energy Engineering'],
    highlight: 'SONELGAZ Internship',
    category: 'Renewable Energy',
    year: '2026',
    role: 'Energy Systems Intern',
  },
]

export const skills = {
  'AI & Machine Learning': [
    'TensorFlow', 'PyTorch', 'Hugging Face', 'scikit-learn',
    'CNNs', 'NLP', 'Generative AI', 'Predictive Analytics',
  ],
  'Web Development': [
    'React', 'Node.js', 'Python', 'Flask', 'FastAPI',
    'HTML5', 'CSS3', 'JavaScript', 'REST APIs',
  ],
  'Design & Prototyping': [
    'Figma', 'UI/UX Design', 'SOLIDWORKS', 'Graphic Design',
  ],
  'Energy & Science': [
    'PV System Sizing', 'Grid Integration', 'MATLAB',
    'Scientific Writing', 'Data Visualization',
  ],
}

export const experience = [
  {
    role: 'Web Developer & UI/UX Designer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Jun 2023 – Present',
    bullets: [
      'Designed and delivered 10+ responsive full-stack web apps including AI dashboards, NLP chatbots, and multilingual interfaces for real clients.',
      'Integrated computer vision and NLP models into production web environments.',
      'Created UI/UX prototypes in Figma consistently reducing client revision cycles.',
    ],
  },
  {
    role: 'Energy Systems & PV Integration Intern',
    company: 'SONELGAZ – Direction de Distribution Mila',
    location: 'Mila, Algeria',
    period: 'Mar 2026 – Apr 2026',
    bullets: [
      'Sized a complete PV system for a primary school (~4,900 Wh/day, ~1.3 kW) and evaluated grid-integration constraints.',
      'Participated in commissioning and maintenance of on-grid PV systems.',
      'Studied cathodic protection for infrastructure corrosion prevention.',
    ],
  },
]

export const education = [
  {
    degree: 'MSc, Energy Physics & Renewable Energy',
    school: 'University of Constantine 1 – Frères Mentouri',
    period: 'Sep 2025 – Jul 2027',
    note: 'Concurrent with MSc in IT (AI)',
  },
  {
    degree: 'MSc, Information Technology — AI Track',
    school: 'University of Constantine 1 – Frères Mentouri',
    period: 'Sep 2025 – Jul 2027',
    note: 'Rare dual-degree combining smart-grid engineering with applied AI',
  },
  {
    degree: 'BSc, Physics',
    school: 'University of Constantine 1 – Frères Mentouri',
    period: 'Sep 2022 – Jun 2025',
    note: 'Grade A · Ranked 2nd in cohort · Student Representative',
  },
]

export const certifications = [
  { title: 'HCIA-AI V4.0 — Deep Learning, ML, Neural Networks', issuer: 'Huawei', date: 'Dec 2025' },
  { title: 'Artificial Intelligence and Application', issuer: 'Huawei', date: 'Dec 2025' },
  { title: 'Generative AI in Action', issuer: 'Penn State University', date: 'Jul 2025' },
  { title: 'Delivering Quality Work with Agility', issuer: 'IBM', date: 'Feb 2026' },
  { title: 'Sustainable Regional Principles, Planning & Transportation', issuer: 'Johns Hopkins University', date: 'Feb 2026' },
  { title: 'Machine Eyes: Computer Vision with CNN', issuer: 'AI4SCIENCE 2025 · Univ. Constantine 1', date: 'Nov 2025' },
]
