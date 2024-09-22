import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About Me",
    url: "#about-me",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Hunger Hub",
    text: "Designed a dynamic food ordering platform allowing users to browse menus, place orders, and track deliveries in real time. Integrated secure payment with Stripe for smooth transactions, and added user login and signup features. Developed an intuitive admin dashboard for managing orders, menus, and delivery logistics, offering real-time insights to streamline business operations.",
    date: "Full Stack Dev",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "E-Coderce",
    text: "Developed an e-commerce platform with React, Node.js, Express, and MongoDB, allowing users to browse and purchase online courses and templates. Integrated admin authentication and authorization, alongside a secure Stripe payment gateway, ensuring a seamless and secure shopping experience for users.",
    date: "Full Stack Dev",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Bukhari Clone",
    text: "Created a clone of the Bukhari Enterprises website, focusing on frontend development with React. Designed an intuitive user interface featuring product listings, search functionality, and a responsive layout. Implemented seamless navigation and visually appealing components, enhancing user experience while ensuring accessibility across devices",
    date: "Frontend Dev",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Foodone",
    text: "Built a frontend project for a food restaurant using React, featuring a vibrant and user-friendly interface. The application includes a menu display and reservation functionality. Utilized responsive design principles to ensure accessibility across devices, enhancing user engagement with interactive elements and visually appealing layouts",
    date: "Frontend Dev",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js, Mongo DB, My SQL, Redux, Framer-Motion, Responsive design, Bootstrap, Socket.IO, WebRTC, RESTful APIs ";
export const collabText1 =
  "C++, JavaScript, Python, TypeScript(Beginner) ";
export const collabText2 =
  "Data Structures and Algorithms, Competitive Programming, Full stack Web development, Frontend Development, Backend Development. ";

export const collabContent = [
  
  {
    id: "1",
    title: "Programming Languages",
    text: collabText1,
  },
  {
    id: "0",
    title: "Tech Stack",
    text: collabText,
  },
  {
    id: "2",
    title: "Areas of Interest",
    text:collabText2,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: discordBlack,
    url: "https://www.linkedin.com/in/singh-suryanx/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/suryansh_0903/",
  },
  {
    id: "3",
    title: "whatsapp",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Telegram",
    iconUrl: facebook,
    url: "https://github.com/surya-ansh",
  },
  
];
