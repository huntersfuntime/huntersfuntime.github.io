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
  rainfocus,
  kaskaskia,
  easystorage,
  dawson,
  carrent,
  jobit,
  tripguide,
  threejs,
  taxbit,
  flightsfromhome,
  talyntbox,
  wp21,
  mickeybee,
  scss,
  graphql,
  reactquery
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Frontend Engineer",
    icon: web
  },
  {
    title: "Teacher",
    icon: backend
  },
  {
    title: "Resume Writer",
    icon: mobile
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "SCSS",
    icon: scss
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "GraphQL",
    icon: graphql
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "React Query",
    icon: reactquery
  }
];

const experiences = [
  {
    title: "Adjunct Professor",
    company_name: "Kaskaskia College",
    icon: kaskaskia,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Current",
    points: [
      "Taught Programming 1 (CITP 155) at the college level, demonstrating the ability to break down complex coding concepts into manageable chunks for students.",
      "Credit Hours 3.00.",
      "Help students gain a strong foundation in programming through clear and concise explanations of key concepts and hands-on exercises",
      "Curriculum included Object-Oriented Programming, Data Types, Variables, Control Structures, File Handling, Database Connectivity, and the Software Development Life Cycle."
    ]
  },
  {
    title: "Software Engineer 2",
    company_name: "TaxBit",
    icon: taxbit,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2023",
    points: [
      "As the first front-end engineer at Taxbit, played a key role in shaping the company's technical direction and culture and participated in interviewing new hires.",
      "Developed a “resolution center” helping users backfill transactions from our vendors if there are failed price lookups, or bad asset data. This solution backfilled 70% of missing cost basis transactions without the intervention of a data engineer.",
      "Developed advanced dynamic forms using React Hook Forms and Zod for validation.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Frontend Software Engineer",
    company_name: "TaxBit",
    icon: taxbit,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Jan 2021",
    points: [
      "Increased our QA test coverage from 30% to 90% by configuring Webpack to execute linters, magnifiers, pre/post-processors, tests, transpires, etc.",
      "Turned design concepts into polished, accessible, cross-device, responsive experiences.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Improved the performance of our Consumer product by 20-30% by  implementing lazy loading, switching CRA to Vite, and optimizing images, used Lighthouse to measure performance."
    ]
  },
  {
    title: "React JavaScript Developer",
    company_name: "RainFocus",
    icon: rainfocus,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Apr 2020",
    points: [
      "Write reusable React components using various design patterns such as HOCs.",
      "Write unit tests with React-Testing-Library resulting in reduction of manual regression testing.",
      "Responsible for checking cross-browser compatibility."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Easy Storage Solutions",
    icon: easystorage,
    iconBg: "#383E56",
    date: "Jun 2018 - Feb 2019",
    points: [
      "Developed and deployed new features to an existing legacy app using a range of technologies, including Ruby, JavaScript, Bootstrap, jQuery, and React.js.",
      "Used JSON for data transmission for Restful web services",
      "Implemented and enhanced CRUD operations for the applications using the MVC (Model View Controller) architecture of Rails framework and Ruby, as well as conduct code reviews.",
      "Refactor CSS into a scalable way using variables and mixins"
    ]
  },
  {
    title: "Instructor of Software Development",
    company_name: "Dawson Community College",
    icon: dawson,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Feb 2018",
    points: [
      "Demonstrated strong teaching skills and a commitment to helping students succeed.",
      "Built and maintained strong relationships with hiring partners to secure internship and job opportunities for students."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "It was a great experience to work with Hunter, he was an important asset as a developer at RainFocus. He is a real team player and has broad experience in front-end development, skills that really helped our team. Hunter is focused and dedicated to improving as a developer every day. I think any company would be lucky to have him as a Software Developer.",
    name: "Martin Boggio",
    designation: "Frontend Developer",
    company: "RainFocus",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFZGs3gqrsGpQ/profile-displayphoto-shrink_100_100/0/1536877517899?e=1697068800&v=beta&t=dVuwMEsl6w_PQyUcgeBBeLnpLkWNIEGxV2gczoSNyzA"
  },
  {
    testimonial:
      "I couldn't have asked for a better developer on our team. After Hunter joined the team, our collaboration and productivity immediately improved. I attribute this to Hunter's great communication and asking the right questions during our planning meetings. He's a hard worker, skilled developer, and someone that is easy to get along with. Hunter also goes above and beyond to help the team. When he would finish with his dev stories early, he would look for ways to improve the code to make things easier for future development, write unit tests, and assist the other team members in any way possible to help others get their stories out the door.",
    name: "Larry Kemp",
    designation: "Project Manager",
    company: "RainFocus",
    image:
      "https://media.licdn.com/dms/image/C5603AQECLLzQFaf2-Q/profile-displayphoto-shrink_200_200/0/1632272676399?e=1697068800&v=beta&t=HxTlTYommbFWgSvfeufkOWvX4zwEvZ0TKWCIDJdvQGg"
  },
  {
    testimonial:
      "Hunter Orges is determined, persistent, and reliable. He is a person you want to work with because his creativity, entrepreneurial spirit, and connections. He works hard and makes everyone around him better. I highly recommend Hunter as a person of integrity, a person of grit, and a person of passion; you will not regret working with Hunter.",
    name: "Scott Schwab",
    designation: "Co-Chief Executive Officer",
    company: "Mett Naturals",
    image:
      "https://media.licdn.com/dms/image/C5603AQGzJ6HHjNgQwg/profile-displayphoto-shrink_200_200/0/1657322830252?e=1697068800&v=beta&t=U_qXtA0SjFn-TQnKK8uEB0YUpvOUHvfReOql7EyOqOA"
  },
  {
    testimonial:
      "Hunter is an exceptional front-end developer with a real knack for React.js. Beyond his coding skills, what's really impressive is his commitment to code quality and ownership. He takes great care in ensuring that the code is not just functional but also maintainable. His mentorship has been invaluable; he’s always ready to share knowledge and help others grow. I feel fortunate to work alongside Hunter who brought so much positivity and expertise to our team.",
    name: "Devansh Tandon",
    designation: "Software Engineer 2",
    company: "TaxBit",
    image:
      "https://media.licdn.com/dms/image/C5603AQGJiR5P-LzNMA/profile-displayphoto-shrink_200_200/0/1661286113586?e=1697068800&v=beta&t=kpEHBcMV5akDtOGAIu-BFFZfoO69vI5iPIAuAsbu4FY"
  }
];

const projects = [
  {
    name: "FlightsFromHome",
    description:
      "Flights From Home was started as a way to share travel deals with friends and family in Salt Lake City, Utah.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "rubyonrails",
        color: "red-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: flightsfromhome,
    source_code_link: "https://www.flightsfromhome.com/"
  },
  {
    name: "MickeyBee",
    description:
      "This is a fully responsive website for a makeup artist. Features include animations to direct your eyes through the story. working contact form.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: mickeybee,
    source_code_link: "https://github.com/huntersfuntime/mickeybee"
  },
  {
    name: "Workplace21",
    description:
      "AI in HR for high performing corporate teams with executive mentoring, leadership coaching, performance consulting, AI coaching programs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "rubyonrails",
        color: "red-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: wp21,
    source_code_link: "https://wp21.com/"
  },
  {
    name: "TalyntBox",
    description:
      "HR software that creates intelligent matches between companies and candidates. Easily manage resumes, schedule interviews, and make data-driven hiring decisions. Say goodbye to guesswork and hello to top talent.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "graphql",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: talyntbox,
    source_code_link: "https://www.talyntbox.com/"
  }
];

export { services, technologies, experiences, testimonials, projects };
