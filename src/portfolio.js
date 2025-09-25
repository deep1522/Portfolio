/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Deep Yadav",
  title: "Hi all, It's Deep yadav",
  subTitle: emoji(
    "A Software Developer and an AI Engineer with hands-on experience building AI-powered applications and automation workflows."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y0aZFSvWh-AAHMz1HCoW7ubWIEPY0364/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deep1522",
  linkedin: "https://www.linkedin.com/in/deep-yadav-24bb7122a/",
  gmail: "deep.dyadav@gmail.com",
  // gitlab: "https://leetcode.com/u/deepyadav21_10/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER AND AI Engineer - Spend my day learning new Tech Stack and Creating AI Agents",
  skills: [
    emoji(
      "⚡ Develop highly interactive Full Stack Applications and RAG ChatBots for your Websites"
    ),
    emoji("⚡ Automate Workflows on n8n and Flowise."),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Agentic AI"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName:"Java",
      
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRM Institute of Science and Technology.",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Computer Applications.",
      duration: "july 2024 - May 2025",
      desc: "CGPA: 9.87",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Jain University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Computer Applications.",
      duration: "August 2021 - may 2024",
      desc: "CGPA: 7.5",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Agentic AI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Accelerus IT Solutions",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "march 2023 - july 2023",
      desc: "Integrated RESTful APIs to dynamically fetch, display, and update content across the application, significantlyimproving responsiveness and user experience.",
      
    },
    {
      role: "AI Engineer Intern",
      company: "GyftEasy",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "May 2025 – August 2025",
      desc: "Research and development of AI-driven solutions to enhance products. Data collected, pre-processed, and analyzed to build machine learning models.Supported product and engineering teams in AI integration and testing."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL LEARNING BASED PROJECTS.",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AskMyDocs",
      projectDesc: "I built a conversational AI system using LangGraph to streamline employee training and knowledge transfer, enabling new hires to query role-specific information through natural language. The solution leverages a Retrieval-Augmented Generation (RAG) pipeline that boosted response accuracy to 95%, with continuous knowledge syncing from Google Drive to ensure up-to-date context without manual updates. Integrated Identity and Access Management enforces secure, tiered access, reducing onboarding time by 15% while maintaining compliance and data security.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "http://github.com/deep1522/AskMyDocs"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "SENSAI",
      projectDesc: "Developed an AI career coach using Gemini API for job suggestions and resume insights. Used Clerk for auth, Prisma + NeonDB for relational data, and Inngest for async workflows.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "http://github.com/deep1522/SENSAI"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "AXION",
      projectDesc: "A web-based platform utilizing Next.js, React, and Tailwind CSS to provide AI-powered code generation and an interactive development environment. Implemented features such as live code previews with Sandpack, secure payments via the PayPal API, and ShadCN for improved UI components.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "http://github.com/deep1522/AXION"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Edith",
      projectDesc: "I developed a personal vision assistant capable of analyzing both the user’s environment and on-screen activities to provide context-aware assistance. It intelligently interprets visual inputs, whether from the surroundings or the user’s screen, to interact with queries related to programming, productivity tasks, or real-world objects. This enables seamless, multimodal support by combining vision understanding with natural language interaction for a more intuitive and efficient user experience.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/deep1522/EDITH---AI-Vision-Assistant"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Courses, Certifications",

  achievementsCards: [
    {
      title: "LeetCode",
      subtitle:
        "Solved 300+ Problems on LeetCode.",
      image: require("./assets/images/LeetCode_logo_black.png"),
      imageAlt: "LeetCode",
      footerLink: [
        {
          name: "LeetCode Page",
          url: "https://leetcode.com/u/deepyadav21_10/"
        }
      ]
    },
    {
      title: "Udemy Course",
      subtitle:
        "AI Agents and LLMs with RAG ",
      image: require("./assets/images/Udemy-Logo.png"),
      imageAlt: "Udemy",
      footerLink: [
        {
          name: "RAG Agents",
          url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-83ad8803-7edd-45b4-a155-5deade9448f9.pdf"
        }
      ]
    },

    {
      title: "AICTE Virtual Internship",
      subtitle: "Completed Certifcation from Google for AI/ML",
      image: require("./assets/images/AICTE-Logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.dropbox.com/scl/fi/gp4gmor7nmt3xc2sh8499/DEEP-YADAV-350098.pdf?rlkey=mvz3fkmp2bi8zepy9xkei4cbc&e=1&st=gjkdaduf&dl=0"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9580353814",
  email_address: "deep.dyadav@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
