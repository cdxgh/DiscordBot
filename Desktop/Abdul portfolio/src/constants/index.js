import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js / python",
    company_name: " Rock Paper Scissors Game",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - Aug 2021",
    points: [
      "Designed and developed the user interface for the game using React.js, including creating components for the game board, player moves, and game results",
      "Implemented game logic using React.js, such as handling game state and triggering animations based on user actions.",
      "Developed a RESTful API using Python and Flask to handle game requests and provide data to the front-end.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "KIET GROUP OF INSTITUTIONS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Feb 2022",
    points: [
      "Designed and developed a mobile app using React Native that provides users with travel recommendations and guides for popular tourist destinations.",
      "Implemented features like user authentication, location-based services, and social sharing to enhance the user experience.",
      "Demonstrated an understanding of front-end web development concepts like component-based design, state management, and responsive layout design.",
      "Developed a mobile app using React Native that enables users to search for and apply to job listings in the IT industry.",
      "Demonstrated an understanding of back-end web development concepts like RESTful APIs, serverless architecture, and database integration.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Code Clause",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Designed and implemented the user interface using HTML, CSS, and JavaScript to create a responsive and user-friendly experiences.",
      "Utilized JavaScript to perform calculations and convert units dynamically, providing real-time feedback to users.",
      "Designed and developed a portfolio website that showcases your skills and experience in web development.",
      "Utilized the GitHub API to build an app that allows users to search for and explore repositories on GitHub.",
      "Developed a memory game that challenges users to match pairs of cards within a set time limit",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Rental Cloth website",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Quadir proved me wrong.",
    name: "Nitin ",
    designation: "BATCHMATE",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like ABDUL does.",
    name: "Priyanshu Sharma",
    designation: "BATCHMATE",
  },
  {
    testimonial:
      "After ABDUL optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "ASHISH",
    designation: "CLASS MATE",
  },
];

const projects = [
  {
    name: "Cloth Rent",
    description:
    "Our web-based platform allows users to search for, rent, and manage cloth rentals from various providers, providing a convenient and efficient solution for people who are in a hurry and need clothing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cdxgh",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/cdxgh",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/cdxgh",
  },
];

export { services, technologies, experiences, testimonials, projects };