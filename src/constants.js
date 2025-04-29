// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/Infosys_logo.png';
import agcLogo from './assets/company_logo/waisl_logo.png';
import newtonschoolLogo from './assets/company_logo/gmr_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gmr_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/contactus_form.png';
import csprepLogo from './assets/work_logo/E_commerce.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "SENIOR ASSOCIATE CONSULTANT",
      company: "INFOSYS",
      date: "JULY 2023 - NOV 2024",
      desc: "Proven track record of optimizing web application performance, reducing HTTP requests by 80% and enhancing UI responsiveness by 60%. Strong advocate for web accessibility, ensuring 100% ADA compliance in projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "Redux",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Senior Engineer IT",
      company: "WAISL LIMITED",
      date: "AUGUST 2020 - JUNE 2022",
      desc: "Experienced in creating reusable UI components for efficient development and maintaining scalable codebases.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Graduate Engineer Trainee",
      company: "GMR Group",
      date: "JULY 2022 - JUNE 2023",
      desc: "Worked as a Graduate Engineer Trainee, focusing on developing and maintaining web applications using React.js and Node.js. Gained hands-on experience in building responsive user interfaces and collaborating with cross-functional teams to deliver high-quality software solutions.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GMR Institute of Technology, Rajam, Srikakulam",
      date: "JUNE 2015 - JUNE 2019",
      grade: "7.5 CGPA",
      desc: "I completed my Bachelor's degree in Electronics and Communication Engineering (B.Tech - ECE) from GMR Institute of Technology, Rajam, Srikakulam. My coursework included a mix of theoretical and practical subjects, providing me with a solid foundation in electronics and communication principles. I actively participated in various projects and internships that enhanced my technical skills and prepared me for real-world challenges.",
      degree: "B.Tech - ECE",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Multi-Step Contact Us Form",
      description:
        "Implemented a dynamic multi-step contact form using React.js in both International and North america regions. Designed a subject selection dropdown that triggers dynamic field updates in the enquiry section. Utilized conditional logic to display relevant enquiry fields based on the selected subject. Created a comprehensive user information capture system, including name, contact details, and address. Identified rendering bottlenecks and leveraged React Context API and Hooks to achieve a smooth and responsive user experience. Optimized UI components and effectively utilized React lifecycle methods for efficient data loading and rendering, leading to a noticeably faster user experience.",
      image: githubdetLogo,
      tags: ["React.js","Typescript","JavaScript","Tailwindcss", "HTML", "CSS"],
      webapp: "https://contactus.kraftheinz.com/",
    },
    {
      id: 1,
      title: "E-Commerce Food & Beverage Website",
      description: "Built a scalable web application using React.js and React-Router for customers in North America and Canada. Designed intuitive page flow between product listings, details, creation, and customer login. Implemented Redux for efficient data retrieval and storage within the React application. Ensured a dynamic and smooth user experience across the platform. Created a mobile-responsive design using CSS3 and Bootstrap/Tailwind CSS to ensure a seamless experience across all devices. Utilized Git for version control and collaborative development with the team.",
      image: csprepLogo,
      tags: ["React.js","Typescript","JavaScript", "HTML", "CSS"],
      webapp: "https://www.kraftheinz.com/en-IN",
    },
  ];  