/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Priscilla Stephan",
  title: "Hi, I'm Priscilla",
  subTitle: emoji(
    "A passionate Software developer 🚀 having  experience in designing and building Web and Mobile applications And Automation Testing Softwares with Reactjs / Nodejs / Selenium and some other cool libraries and frameworks."
    ),
  resumeLink:
  "https://drive.google.com/file/d/11otk0Oytv74DE-6qCcwMk-40Rg_p-dqg/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PriscillaStephan",
  linkedin: "https://www.linkedin.com/in/priscilla-stephan",
  gmail: "priscilla.estephan@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/pressila.estephan",
  medium: "https://priscillastephan.medium.com/",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  //instagram: 'https://www.instagram.com/davidrakosi/',
  //twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WHO CAN CODE AND TEST SOFTWARE USING AUTOMATION SELENIUM TECHNOLOGY...",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean."
    ),
    emoji(
      "⚡ Creating Automation Software testing Frameworks using Selenium. "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-stripe-s"
    },
    {
      skillName: "Appium",
      fontAwesomeClassname: "fas fa-mobile-alt"
    }, 
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Minnesota",
      logo: require("./assets/images/university-of-minnesota.jpg"),
      subHeader: "Software Testing and Automation Specialization",
      duration: "January 2021 - May 2021",
      desc: "Develop Skills in Software Testing. Practice and master theory, techniques, and tools to effectively test software.",
      descBullets: [" cover black-box and white-box testing, automated testing, web & mobile testing, and formal testing theory and techniques, which will prepare you to plan and perform effective testing of your software.",
      "Distinguish between verification and validation describing the key differences between them.",
      "Write automated functional tests for both front-end and back-end code",
      "Measure the fault-finding effectiveness of a functional test suite using mutation testing.",
      "Defend program correctness through the use of formal methods, specifically proof obligations and model checking."]
    },
    {
      schoolName: "Lebanese Canadian University",
      logo: require("./assets/images/lcu.jpg"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2015 - May 2019",
      desc: "Graduated with Honor",
      descBullets: ["Mobile Development & Web Development.",
      "Operational Research & Security and Cryptography.",
     "Software Engineering & Projects Management."
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "90%"
    },
    {
      Stack: "QA Automation Engineering ",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "QA Automation Engineer",
      company: "OnSite SAL",
      companylogo: require("./assets/images/bugs.gif"),
      date: "Sep 2020 – Present",
      desc:
        " ",
      descBullets: [
        "Built an Automation Framework with Selenuim & C# Xunit.",
        "Regression & Exploratory Testing for Mobile & Web Apps.",
        "White Box Testing.",
        "Black Box Testing...",
      ]
    },
    {
      role: "Web Developer",
      company: "General Paint",
      companylogo: require("./assets/images/webdev3.gif"),
      date: "Jan 2020 – Sep 2020",
      desc:   
        "",
        descBullets: [
          "Building a Complete web app industry solution using Yii2 php framework & node.js.",
          "Testing the code using Codeception...",
        ]
      },
    {
      role: "Junior Android Developer",
      company: "Neorcha",
      companylogo: require("./assets/images/mobiledev.gif"),
      date: "Sept 2018 – Dec 2019",
      desc:
        "",
        descBullets: [
          "Building Hotel and University Management Mobile Apps, using Android Studio & Java.",
          "Revamping an old Hotel app to the latest android UI...",
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "PriscillaStephan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS & STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/amazon-clone.jpg"),
      projectName: "Amazon Clone",
      projectDesc: "Clone of the Amazon website using ReactJS and Firebase. the Web Application comes in with full E-commerce functionality.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone-62dab.web.app/"
        }
        //  you can add extra buttons here.
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
     // image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      //image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      //image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
     "With Love for Developing cool stuff, I love to write and Share with others what I have learnt.",

  blogs: [
    {
      url:
        "https://priscillastephan.medium.com/getting-start-with-unit-testing-in-d3b051432f1c",
      title: "Getting Started with Unit Testing in C#",
      description:
        "the NUnit framework gives you a utility library to write your test and a Test Runner which runs your tests and gives you a report of passing and failing tests."
    },
    {
      url:
        "https://priscillastephan.medium.com/what-is-a-unit-testable-c-code-architecture-3531456a527e ",
      title: "What is a Unit testable C# code architecture",
      description:
        "There is one universal tip for writing a unit-testable code. You should just use the SOLID principle..."
    },
    {
      url:
        "https://priscillastephan.medium.com/what-is-moq-and-how-to-use-it-to-ease-unit-testing-88e849010f6e",
      title: "What is Moq and How to Use it to Ease Unit Testing",
      description:
        "Moq is a mocking framework built to facilitate the testing of components with dependencies."
    },
    {
      url:
        "https://priscillastephan.medium.com/adding-nunit-test-project-12c489cf9ff0",
      title: "Adding NUnit test project",
      description:
        "It is best practice to keep your unit tests apart from your production code, so we’ll add a new project that includes our tests."
    }
  ],
  meduimbloglink: "https://priscillastephan.medium.com/",
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    emoji("Want to Discuss a project or a cool idea? 👇"),
    number: "+961 76345173",
    email_address: "priscilla.estephan@gmail.com"
  };

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
