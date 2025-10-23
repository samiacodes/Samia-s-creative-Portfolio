export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


export const gridItems = [
  {
    id: 1,
    title: "Who I Am",
    description:
      "I would describe myself as somewhere between introvert and extrovert. I always try to give my best effort, even when things aren't perfect. I believe in growth through trying, failing, and improving. Learning something new excites me, and I'm never afraid to explore unfamiliar paths.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "What I Enjoy",
    description:
      "I equally enjoy both frontend and backend development. For me, functionality and visual appeal go hand-in-hand. I love creating interfaces that feel alive, with meaningful interactivity. While I haven't worked in a team yet, I'm genuinely excited to collaborate — I believe teamwork opens doors to greater creativity and learning.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Beyond Coding",
    description:
      "Outside of programming, I'm passionate about books, crafting, DIY projects, and embroidery. I love nature, planting trees, and find joy in peaceful moments. These hobbies keep me grounded and bring balance to my everyday life.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "My Journey",
    description:
      "I first started coding during the COVID lockdown, just after finishing college. I began with HTML and CSS by recreating examples from my textbook, which led me to build my first simple website. Although I faced a long break and lack of support, I turned that challenge into motivation. Now, I'm confidently back—working on real projects and turning coding into a career.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Where I'm Going",
    description:
      "My goal is to keep growing — not just technically, but personally too. I'm focused on identifying and improving my weak areas so I can become more confident and efficient. I'm targeting to land a job by January 26, and preparing myself to be fully job-ready before then.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Let's Connect",
    description:
      " Dhaka, Bangladesh\n emiliyalamia@gmail.com\n +880 1234-567890\n WhatsApp: wa.me/8801234567890\n linkedin.com/in/samiaislamlamia",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 border dark:border-neutral-800 border-neutral-200 p-6 rounded-xl text-sm whitespace-pre-wrap",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Tech Skills with proficiency levels
export const techSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90, icon: "SiHtml5", color: "#ffffff" },
      { name: "CSS3", level: 85, icon: "SiCss3", color: "#ffffff" },
      { name: "JavaScript", level: 80, icon: "SiJavascript", color: "#ffffff" },
      { name: "React", level: 75, icon: "SiReact", color: "#ffffff" },
      { name: "Tailwind CSS", level: 85, icon: "SiTailwindcss", color: "#ffffff" },
      { name: "Next.js", level: 65, icon: "SiNextdotjs", color: "#ffffff" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 70, icon: "SiNodedotjs", color: "#ffffff" },
      { name: "Express", level: 70, icon: "SiExpress", color: "#ffffff" },
      { name: "MongoDB", level: 75, icon: "SiMongodb", color: "#ffffff" },
      { name: "Firebase", level: 65, icon: "SiFirebase", color: "#ffffff" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 75, icon: "SiGit", color: "#ffffff" },
      // { name: "VS Code", level: 90, icon: "", color: "#ffffff" },
      { name: "Figma", level: 60, icon: "SiFigma", color: "#ffffff" },
      { name: "TypeScript", level: 55, icon: "SiTypescript", color: "#ffffff" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/samiacodes", 
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/in/samiyalamiya", 
  },
];