import { Code,Database,Settings,Cloud,ShieldCheck,Settiings,TerminalSquare,Wind,Bot,GitMerge,GithubIcon,Braces,Palette,Server,BrainCircuit,Link as LinkIcon} from 'lucide-astro'

export const experiences = [
    {
        id:'Don By Uib',
        title:'Web, Mobile & AI Developer',
        company:'UIB',
        companyLink:'https://www.uib.com.tn/',
        location:'Tunis, Tunisia',
        period:'6 months (2025)',
        summary:'As a Web, Mobile & AI Developer at UIB, I was Tasked to redesign the Current Don By UIB solution, which is a web and mobile application that allows customers to make donations to various associations. The goal was to enhance the user experience and improve the overall functionality of the application. I added various IA integrations such as , a chatbot , sentiment analysis arabizi and french , langauge detection and text ocr features. I also worked on the backend to ensure that the application was secure and efficient. The project was a success, and I was able to deliver a high-quality product that met the needs of the client.',
        responsibilities:[
            'Redesigning the Don By UIB solution to enhance user experience.',
            'Implementing AI integrations such as chatbot, sentiment analysis, language detection, and text OCR.',
            'Ensuring backend security and efficiency.',
            'Delivering a high-quality product that meets client needs.','creating a role Based application','enhance the admin experience by adding analytics and statistics features and functions to retrain arabizi model and Human in the loop process the fix the arabizi predictions',
        ],skills:[
            'Flutter',
            'Dart',
            'Python',
            'FastAPI',
            'Firebase',
            'camemBERT',
            'PaddleOCR',
            'Pytorch',
            'openssl',
            'git',
            'marBERTV2',
            'XLM-RoBERTa',
        ],


    },
    {
        id:'Votini',
        title:'Blockchain Developer',
        company:'Centre National Informatique (CNI)',
        companyLink:'http://www.cni.tn/',
        location:'Tunis, Tunisia',
        period:'2 months (2024)',
        summary:'As a Blockchain Developer at CNI, I was responsible for developing a voting system using blockchain technology. The goal was to create a secure and transparent voting system that could be used for various elections. I worked on the smart contracts, the frontend and the backend of the application. The project was a success, and I was able to deliver a high-quality product that met the needs of the client.',
        responsibilities:[
            'Developing a secure and transparent voting system leverging Blockchan capabilities.',
            'Creating smart contracts for the voting process.',
            'Implementing the frontend and backend of the application.',
            'Ensuring the application met client needs and security standards.',
            'Integrating IPFS for decentralized file storage.',
        ],skills:[
            'Solidity',
            'JavaScript',
            'React',
            'Node.js',
            'IPFS',
            'Web3.js',
            'Truffle',
            'Ganache',
            'Metamask',
            'Git',
        ],
    },

]




export const skills = [
  { name: 'Python', icon: Code },
  { name: 'Dart', icon: Code },
  { name: 'PyTorch', icon: Settings },
  { name: 'React', icon: Bot },
  { name: 'Next.js', icon: LinkIcon },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'HTML5', icon: Code },
  { name: 'CSS3', icon: Palette },
  { name: 'Node.js', icon: Server },
  { name: 'SQL Databases', icon: Database },
  { name: 'Git', icon: GitMerge },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'GitHub Actions', icon: Settings },
  { name: 'Docker', icon: TerminalSquare },
  { name: 'Kubernetes', icon: Settings },
  { name: 'REST APIs', icon: LinkIcon },
  { name: 'Blockchain / Ethereum', icon: BrainCircuit },
];

export const education = [
  {
    institution: 'The Higher Institute of Information and Communications Technologies (ISTIC)',
    degree: 'Bachelor Computer Science, Software Engineering',
    period: '2023 - 2025',
    location: 'Borj Cedria, Tunisia',
  },
  {
    institution: 'Higher Institute of Applied Sciences and Technology of Mateur (ISSATM)',
    degree: 'Bachelor Computer Science, Software Engineering',
    period: '2022 - 2023',
    location: 'Mateur, Bizerte',
  },
  {
    institution: 'High School Ahmed amine Mourouj 4',
    degree: 'computer science baccalaureate',
    period: '2018 - 2022',
    location: 'Mourouj 4 , Ben Arous',
  },
];
export const certificates = [
  {
    name: 'Big Date Engineer Certificate',
    issuer: 'IBM',
    year: '2025',
    link: 'https://www.credly.com/badges/7aa2d3e5-e2db-47a0-bdb3-e0cfc956113d/linked_in_profile',
  },
  {
    name: 'Applications of AI Predictive Maintenance',
    issuer: 'Nvidia',
    year: '2024',
    link: 'https://learn.nvidia.com/certificates?id=vpKQW0R6RoGl5lfSYEUhhQ',
  },
  {
    name: 'Building Transformer-Based Natural Language Processing (NLP) Applications',
    issuer: 'Nvidia',
    year: '2024',
    link: 'https://learn.nvidia.com/certificates?id=fu2ox50WSwKZYNsx3p1zcg',
  },
  {
    name: 'Fundamentals of Deep Learning',
    issuer: 'Nvidia',
    year: '2024',
    link: 'https://learn.nvidia.com/certificates?id=9zRJbg7nSoecwBht1UlUkg',
  },
];
