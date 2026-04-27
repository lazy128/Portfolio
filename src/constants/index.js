export const myProjects = [
  {
    id: 1,
    title: "LMS - Learning Management System",
    description:
      "A comprehensive learning management platform with full features for students, teachers, and administrators.",
    subDescription: [
      "Built RESTful backend API with Node.js/Express and MySQL database, supporting full CRUD operations.",
      "Developed frontend with React, Redux Toolkit, and Tailwind CSS, ensuring responsive design across all devices.",
      "Implemented JWT authentication system with roles: Admin, Teacher, Student.",
      "Added reporting, grade statistics, and learning material management features.",
    ],
    href: "",
    logo: "",
    image: "assets/projects/Screenshot 2026-04-26 123510.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql-svgrepo-com.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description:
      "A social image-sharing platform with full Pinterest-like features.",
    subDescription: [
      "Built full-stack application with React frontend and Node.js/Express backend.",
      "Implemented image upload with Cloudinary/AWS S3, supporting multiple formats and size optimization.",
      "Developed board creation, image pinning, likes, comments, and user following features.",
      "Built feed recommendation system and image search by tags and keywords.",
    ],
    href: "",
    logo: "",
    image: "assets/projects/Screenshot 2026-04-26 124001.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb-svgrepo-com.svg" },
      { id: 4, name: "Cloudinary", path: "/assets/logos/cloudinary-svgrepo-com.svg" },
    ],
  },
  {
    id: 3,
    title: "Kinematics Calculator Tool",
    description:
      "Web application for kinematics calculations and cost-optimized component suggestions for mechanical engineers.",
    subDescription: [
      "Built a kinematics calculator with multiple machine types, components, and complex formulas.",
      "Developed a component substitution system based on cost and performance optimization algorithms.",
      "Integrated large component database with fast search and multi-criteria filtering.",
      "Created visualization charts with Chart.js for comparison results and detailed reports.",
    ],
    href: "",
    logo: "",
    image: "assets/projects/Screenshot 2026-04-26 123913.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Redis", path: "/assets/logos/redis-svgrepo-com.svg" },
      { id: 4, name: "Prisma", path: "/assets/logos/prisma-svgrepo-com.svg" },
    ],
  },
  {
    id: 4,
    title: "Ticket Booking System",
    description:
      "Movie ticket booking website with full booking, payment, and theater management features.",
    subDescription: [
      "Built comprehensive ticket booking system with interactive seat selection and real-time availability.",
      "Developed backend with Node.js/Express, integrating payments via MoMo/VNPay/Stripe.",
      "Designed admin dashboard for movie, showtime, theater, and revenue management.",
      "Integrated email notifications with Nodemailer and SMS with Twilio.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Redis", path: "/assets/logos/redis-svgrepo-com.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nguyen.duy.576646",
    icon: "/assets/socials/facebook.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/duy-nguy%E1%BB%85n-511549388/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lazy_.128/?hl=en",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "IT Student",
    job: "Ho Chi Minh City University of Technology - HCMUT",
    date: "2023 - Present",
    contents: [
      "Third-year student, entering fourth year, majoring in Information Technology at HCMUT with Japan-oriented program.",
      "Deepening expertise in full-stack web development with React, Node.js, and modern frameworks.",
      "Continuously learning and applying new technologies to real-world projects.",
    ],
  },
  {
    title: "Backend Developer",
    job: "LMS - Learning Management System Project",
    date: "2025",
    contents: [
      "Developed LMS platform with full features for student, teacher, and course management.",
      "Built backend API with Node.js/Express and MySQL/PostgreSQL database.",
      "Designed responsive UI with React and Tailwind CSS.",
      "Implemented authentication, authorization, and detailed reporting systems.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Pinterest Clone - Image Sharing Social Network",
    date: "2026",
    contents: [
      "Developed Pinterest clone with full features: image upload, board creation, likes, comments, follows.",
      "Handled image upload and optimization with Cloudinary/AWS S3.",
      "Built content recommendation system and image search by tags/keywords.",
      "Implemented real-time features with WebSocket and caching with Redis.",
    ],
  },
  {
    title: "Backend Developer",
    job: "Kinematics Calculator & Cost Optimization Tool",
    date: "2026",
    contents: [
      "Built web application for kinematics calculations and component substitution suggestions for mechanical engineers.",
      "Developed component recommendation system based on cost and performance optimization algorithms.",
      "Integrated large component database with fast search and multi-criteria filtering.",
      "Created visualization charts for calculation results and detailed reports.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Ticket Booking System - Movie Ticket Sales",
    date: "2026",
    contents: [
      "Developed movie ticket booking website with seat selection, payment, and ticket management.",
      "Built interactive theater seating map with real-time seat availability.",
      "Integrated payment gateways (MoMo, VNPay, Stripe) and email notification system.",
      "Created admin dashboard for movie, showtime, theater, and revenue management.",
    ],
  },
];
export const reviews = [
  {
    name: "Do Not Disturb",
    username: "@Drake",
    body: "I'll probably self-destruct if I ever lose,but I never do",
    img: "assets/avatar/Morelife.webp",
    spotifyId: "2KvHC9z14GSl4YpkNMX384",  
  },
  {
    name: "Successful(feat. Trey Songz& Lil Wayne)",
    username: "@Drake @Trey Songz @Lil Wayne",
    body: "The game need change and I'm the motherfuckin' cashier",
    img: "assets/avatar/successful.png",
    spotifyId: "6NwhtCYkfwWlcR62Ac4E7y",
  },
  {
    name: "The Violet Color",
    username: "@Tory Lanez",
    body: "She's in my ear, she's got no fear, she could care less if we crash ",
    img: "assets/avatar/aloneatprom.webp",
    spotifyId: "3azJifCSqg9fRij2yKIbWz",
  },
  {
    name: "Hours In Silence",
    username: "@Drake",
    body: "Only Thing really worth chasing is a dream",
    img: "assets/avatar/hours in silence.webp",
    spotifyId: "0sSRLXxknVTQDStgU1NqpY",
  },
  {
    name: "I Do This",
    username: "@NisseyHussle @YoungThug @Mozzy",
    body: "See,the best teacher in life is your own experience",
    img: "assets/avatar/idothis.webp",
    spotifyId: "1AhSn0PZTgHJkJbu8p2Cjv",
  },
  {
    name: "Flashing Lights",
    username: "@ye",
    body: "I know it's been a while, sweetheart. We hardly talk, I was doin' my thing",
    img: "assets/avatar/flashinglights.jpg",
    spotifyId: "5TRPicyLGbAF2LGBFbHGvO",
  },
  {
    name: "Love Me",
    username: "@LilWayne @Drake @Future",
    body: "With no makeup, she a ten and she the best with that head.",
    img: "assets/avatar/loveme.jpg",
    spotifyId: "2XHzzp1j4IfTNp1FTn7YFg",
  },
  {
    name: "Passionfruit",
    username: "@Drake",
    body: "Listen Seein' you got ritualistic Cleansin' my soul of addiction for now 'Cause I'm fallin' apart, yeah",
    img: "assets/avatar/Morelife.webp",
    spotifyId: "5mCPDVBb16L4XQwDdbRUpz",
  },
];
