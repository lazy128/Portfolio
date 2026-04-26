export const myProjects = [
  {
    id: 1,
    title: "LMS - Hệ thống Quản lý Học tập",
    description:
      "Nền tảng quản lý học tập toàn diện với đầy đủ tính năng cho sinh viên, giảng viên và quản lý.",
    subDescription: [
      "Xây dựng backend RESTful API với Node.js/Express và database MySQL, hỗ trợ đầy đủ CRUD operations.",
      "Phát triển frontend với React, Redux Toolkit, và Tailwind CSS, đảm bảo responsive trên mọi thiết bị.",
      "Triển khai hệ thống xác thực JWT với các vai trò: Admin, Giảng viên, Sinh viên.",
      "Thêm tính năng báo cáo, thống kê điểm số và quản lý tài liệu học tập.",
    ],
    href: "",
    logo: "",
    image: "assets\\projects\\Screenshot 2026-04-26 123510.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Pinterest Clone",
    description:
      "Mạng xã hội chia sẻ hình ảnh với đầy đủ tính năng như Pinterest.",
    subDescription: [
      "Xây dựng ứng dụng full-stack với React frontend và Node.js/Express backend.",
      "Triển khai upload ảnh với Cloudinary/AWS S3, hỗ trợ nhiều định dạng và tối ưu kích thước.",
      "Phát triển tính năng tạo board, pin ảnh, like, comment, follow users.",
      "Xây dựng hệ thống feed recommendations và tìm kiếm ảnh theo tag, keyword.",
    ],
    href: "",
    logo: "",
    image: "assets\\projects\\Screenshot 2026-04-26 124001.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "Cloudinary",
        path: "/assets/logos/cloudinary-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Công cụ Tính toán Động lực học",
    description:
      "Web application tính toán động lực học và gợi ý linh kiện tối ưu chi phí cho kỹ sư cơ khí.",
    subDescription: [
      "Xây dựng công cụ tính toán động lực học với nhiều loại máy, linh kiện và công thức phức tạp.",
      "Phát triển hệ thống gợi ý linh kiện thay thế dựa trên thuật toán tối ưu chi phí và hiệu suất.",
      "Tích hợp database lớn linh kiện với khả năng tìm kiếm nhanh và filter theo nhiều tiêu chí.",
      "Tạo visualization charts với Chart.js để hiển thị kết quả so sánh và báo cáo chi tiết.",
    ],
    href: "",
    logo: "",
    image: "assets\\projects\\Screenshot 2026-04-26 123913.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "redis",
        path: "/assets/logos/redis-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "Prisma",
        path: "/assets/logos/prisma-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Ticket Booking System",
    description:
      "Website bán vé xem phim với đầy đủ chức năng đặt vé, thanh toán và quản lý rạp.",
    subDescription: [
      "Xây dựng hệ thống đặt vé toàn diện với seat selection interactive và real-time availability.",
      "Triển khai backend với Node.js/Express, xử lý thanh toán qua MoMo/VNPay/Stripe.",
      "Thiết kế admin dashboard quản lý phim, suất chiếu, rạp và báo cáo doanh thu.",
      "Tích hợp email notifications với Nodemailer và SMS với Twilio.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Redis",
        path: "/assets/logos/redis-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
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
    title: "Sinh viên CNTT",
    job: "Đại học Bách Khoa TP.HCM",
    date: "2023 - Hiện tại",
    contents: [
      "Đang học năm 3, sắp lên năm 4 chuyên ngành Công nghệ Thông tin tại Đại học Bách Khoa TP.HCM với chương trình định hướng Nhật Bản.",
      "Chuyên sâu về phát triển web full-stack với React, Node.js, và các framework hiện đại.",
      "Không ngừng học hỏi và áp dụng công nghệ mới vào các dự án thực tế.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Dự án LMS - Hệ thống quản lý học tập",
    date: "2025",
    contents: [
      "Phát triển nền tảng LMS (Learning Management System) với đầy đủ chức năng quản lý sinh viên, giáo viên và khóa học.",
      "Xây dựng backend API với Node.js/Express và database MySQL/PostgreSQL.",
      "Thiết kế giao diện responsive với React và Tailwind CSS.",
      "Triển khai hệ thống xác thực, phân quyền và báo cáo chi tiết.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Pinterest Clone - Mạng xã hội chia sẻ hình ảnh",
    date: "2026",
    contents: [
      "Phát triển bản sao của Pinterest với đầy đủ tính năng: upload ảnh, tạo board, like, comment, follow.",
      "Xử lý upload và tối ưu hóa hình ảnh với Cloudinary/ AWS S3.",
      "Xây dựng hệ thống tìm kiếm và đề xuất nội dung dựa trên sở thích người dùng.",
      "Triển khai real-time features với WebSocket và caching với Redis.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Công cụ Tính toán Động lực học & Tối ưu Chi phí",
    date: "2026",
    contents: [
      "Xây dựng web application tính toán động lực học cho kỹ sư cơ khí.",
      "Phát triển hệ thống gợi ý linh kiện thay thế và tối ưu chi phí dựa trên algorithms.",
      "Tích hợp database lớn linh kiện với khả năng search và filter nhanh.",
      "Tạo visualization charts cho kết quả tính toán và báo cáo chi tiết.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Ticket Booking System - Bán vé xem phim",
    date: "2026",
    contents: [
      "Phát triển website đặt vé xem phim với chức năng chọn ghế, thanh toán, và quản lý vé.",
      "Xây dựng sơ đồ rạp chiếu phim interactive với real-time seat availability.",
      "Tích hợp cổng thanh toán (MoMo, VNPay, Stripe) và hệ thống email notification.",
      "Xây dựng admin dashboard để quản lý phim, suất chiếu và doanh thu.",
    ],
  },
];
export const reviews = [
  {
    name: "Do Not Disturb",
    username: "@Drake",
    body: "I'll probably self-destruct if I ever lose,but I never do",
    img: "assets\\avatar\\Morelife.webp",
  },
  {
    name: "Successful(feat. Trey Songz& Lil Wayne)",
    username: "@Drake @Trey Songz @Lil Wayne",
    body: "The game need change and I'm the motherfuckin' cashier",
    img: "assets\\avatar\\successful.png",
  },
  {
    name: "The Violet Color",
    username: "@Tory Lanez",
    body: "She's in my ear, she's got no fear, she could care less if we crash ",
    img: "assets\\avatar\\aloneatprom.webp",
    spotifyId: "3azJifCSqg9fRij2yKIbWz",
  },
  {
    name: "Hours In Silence",
    username: "@Drake",
    body: "Only Thing really worth chasing is a dream",
    img: "assets\\avatar\\hours in silence.webp",
  },
  {
    name: "I Do This",
    username: "@NisseyHussle @YoungThug @Mozzy",
    body: "See,the best teacher in life is your own experience",
    img: "assets\\avatar\\idothis.webp",
  },
  {
    name: "Flashing Lights",
    username: "@ye",
    body: "I know it's been a while, sweetheart. We hardly talk, I was doin' my thing",
    img: "assets\\avatar\\flashinglights.jpg",
    spotifyId: "5TRPicyLGbAF2LGBFbHGvO",
  },
  {
    name: "Love Me",
    username: "@LilWayne @Drake @Future",
    body: "With no makeup, she a ten and she the best with that head.",
    img: "assets\\avatar\\loveme.jpg",
  },
  {
    name: "Passionfruit",
    username: "@Drake",
    body: "Listen Seein' you got ritualistic Cleansin' my soul of addiction for now 'Cause I'm fallin' apart, yeah",
    img: "assets\\avatar\\Morelife.webp",
    spotifyId: "5mCPDVBb16L4XQwDdbRUpz",
  },
];
