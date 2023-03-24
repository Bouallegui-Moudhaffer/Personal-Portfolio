/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello ",
  title2: "Moudhaffer",
  logo_name: "Moudhaffer Bouallegui",
  nickname: "Moudhaffer / YàKûZa",
  full_name: "Moudhaffer Bouallegui",
  subTitle1: "Software Engineering Student",
  subTitle2: "Data Science Specialist",
  subTitle3: "Artificial Intelligence Researcher",
  resumeLink:
    "https://drive.google.com/file/d/1VJWzjaOQzBsTSykzC0WXhxTsUqtViyjv/view?usp=sharing",
  mail: "mailto:moudhafferbouallegui@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Moudhaffer-Bouallegui",
  linkedin: "https://www.linkedin.com/in/moudhafferbouallegui/",
  gmail: "boualleguimoudhaffer@gmail.com",
  gitlab: "https://gitlab.com/Bouallegui-Moudhaffer",
  facebook: "https://www.facebook.com/Moudhaffer.Blg.3/",
  twitter: "https://twitter.com/MoudhafferBoua1",
  instagram: "https://www.instagram.com/moudhaffer_bouallegui/",
};

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "FullStackImg",
      skills: [
        "⚡ Research cutting edge technologies in AI / Breakthroughs in businesses & industries of application.",
        "⚡ Build a Data Pipeline from collection of unstructured data to data storage.",
        "⚡ Data preparation pipeline and data warehousing using Google Cloud services or otherwise.",
        "⚡ Employ machine learning algorithms and generating training data.",
        "⚡ Deploy high quality machine learning & deep learning models as integrated services or standalone algorithms.",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos-selenium",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working on Google Cloud platform & IBM Watson",
        "⚡ Experience deploying machine learning models on the cloud",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculty of Sciences, University of Monastir",
      subtitle: "Bachelor's in Computer Science",
      logo_path: "logo_fsm.png",
      alt_name: "FSM",
      duration: "2018 - 2021",
      descriptions: [
        "✅ After attending university for 3 years, I acquired my Bachelor's in Computer Sciencs with high praise for my end of studies research paper and project.",
        "⚡ I have studied core subjects like Data Structures & Optimization, DBMS, Networking, Security, graph theory, Fundamentals of Artificial Intelligence, Structured, Procedural and Object Oriented Programming, Linear Algebra, Calculus.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt in my Java, Web and Mobile development courses. ",
      ],
      website_link: "https://fsm.rnu.tn",
    },
    {
      title: "Private Higher School of Engineering & Technology",
      subtitle:
        "Bachelor's in Software Engineering with Specialization in Data Science.",
      logo_path: "esprit.png",
      alt_name: "ESPRIT",
      duration: "2021 - PRESENT",
      descriptions: [
        "⚡ I have studied core subjects like Object Oriented Programming, DBMS & Database Administration, Networking, CyberSecurity, Time Series Analysis, Probability & Statistics, Machine Learning, Deep Learning and Big Data Analytics among various other modules.",
        "⚡ I have also completed various online courses for Python development, Python for Data Science, R for Data Science, Machine Learning Algorithms, Artificial Neural Networks, Convolutional Neural Networks, Deep Learning for Computer Vision.",
        "⚡ I have implemented several projects based on what I've leart under my Software Engineering course. ",
      ],
      website_link: "https://esprit.tn",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fine Tune BERT for Text Classification with TensorFlow",
      subtitle: "Coursera Project Network",
      logo_path: "coursera.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3SAJJA3XUC55",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Artificial Intelligence Foundations: Machine Learning",
      subtitle: "LinkedIn Learning",
      logo_path: "logo_linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      // color_code: "#2AAFED",
      color_code: "#FFFFFF",
    },
    {
      title: "Intermediate Python",
      subtitle: "DataCamp",
      logo_path: "inverted.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "DataCamp",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Python Project for AI & Application Development",
      subtitle: "Coursera: IBM Network",
      logo_path: "IBM.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/967BPMG9TD5D",
      alt_name: "Python Project for AI & Application Development",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Science Foundations",
      subtitle: "LinkedIn Learning",
      logo_path: "logo_linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#FFFFFF",
    },
    {
      title: "Dimensionality Reduction in Python",
      subtitle: "DataCamp",
      logo_path: "inverted.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "DataCamp ",
      color_code: "#47A048",
    },
    {
      title: "Building AI Applications with Watson APIs",
      subtitle: "Coursera: IBM Network",
      logo_path: "IBM.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YL7GA45P2HQJ",
      alt_name: "Building AI Applications with Watson APIs",
      color_code: "#FFFFFF",
    },
    {
      title: "IBM Applied AI Professional Certificate",
      subtitle: "Coursera: IBM Network",
      logo_path: "IBM.svg",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "IBM Applied AI",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Machine Learning with caret in R",
      subtitle: "DataCamp",
      logo_path: "inverted.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Machine Learning with caret in R",
      // color_code: "#f36c3d",
      color_code: "#47A048",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const hobbies = {
  description:
    "Gaming, Anime, and Blogging are all fantastic hobbies that offer a range of benefits. Gaming provides a way to escape reality and immerse yourself in another world, while Anime offers a unique blend of art and storytelling that can be both entertaining and thought-provoking. Blogging allows you to express your thoughts and ideas and connect with others who share your interests. Whether you're looking for a way to relax, explore new worlds, or connect with like-minded individuals, these hobbies are sure to provide hours of enjoyment.",
  gaming_desc:
    "Gaming, Anime, and Blogging are all fantastic hobbies that offer a range of benefits. Gaming provides a way to escape reality and immerse yourself in another world, while Anime offers a unique blend of art and storytelling that can be both entertaining and thought-provoking. Blogging allows you to express your thoughts and ideas and connect with others who share your interests. Whether you're looking for a way to relax, explore new worlds, or connect with like-minded individuals, these hobbies are sure to provide hours of enjoyment.",
};
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed multiple internships, both academic and professional, and have gained valuable experience in various domains. I am actively seeking internships in the field of data science or any data-related field to further enhance my skills and gain real-world experience. Please feel free to contact me if you have any opportunities available.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Deep Learning & Computer Vision Intern",
          company: "Faculty of Sciences of Monastir",
          company_url: "https://fsm.rnu.tn",
          logo_path: "logo_fsm.png",
          duration: "Feb 2021 - June 2021",
          location: "Monastir, Tunisia",
          description: `To conclude my studies, I had to complete an internship in which I helped an entity achieve some business goals. I saw an opportunity to help my university's administrative department and decided to apply my knowledge there.
          I noticed that the administrative department faced a great challenge in manually entering grades for upwards of 3000 students. 
          Therefore, I implemented an Optical Character Recognition Software called SoftOCR which identified student names and their handwritten grades from a table on a grading paper which had been scanned and stored as a pdf file.
          The software was a huge success and is being used today by the administrative department which has made their job much easier and much less stressful and overwhelming.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Wordpress & PHP Development Intern",
          company: "Iware",
          company_url: "https://iware.info",
          logo_path: "Iware.png",
          duration: "June 2020 - July 2020",
          location: "Sousse, Tunisia",
          description: `During my summer internship at Iware, I was a Wordpress and PHP developer responsible for modernizing the design of the startup's website. The task involved working closely with their UI/UX designer to understand their needs and then implementing them. My primary goal was to create a more modern and responsive design to improve the overall user experience of the website.
          In addition to the design work, I had to ensure that the new frontend was compatible with the existing backend and database. This required me to carefully test and troubleshoot any issues that arose during the development process.
          To accomplish the task, I used tools such as Elementor for Wordpress and Photoshop for designing. Working with these tools allowed me to create visually appealing and user-friendly designs that met the needs of the UI/UX designer and the company as a whole.
          Overall, this experience allowed me to gain valuable insights into the web development process, and I developed important skills that I can leverage in future projects.`,
          color: "#0071C5",
        },
        {
          title: "Natural Language Processing Intern",
          company: "Esprit Tech",
          company_url: "https://esprit.tn/",
          logo_path: "esprit.png",
          duration: "Jun 2022 - Aug 2022",
          location: "Ariana, Tunisia",
          description: `During my summer internship as a MERN Stack & NLP intern, my main task was to work on Esprit's ATS (Applicant Tracking System). Specifically, I was responsible for automating the recruitment process by utilizing NLP techniques to extract relevant information from resumes and categorize them based on their fields of expertise and experience. To achieve this, I worked with Python programming language, spaCy, NLTK, and various other NLP libraries, and deployed my work as an API using Flask.
          In addition, I was also responsible for developing a web application using MERN Stack, with ReactJS for the frontend and NodeJS and ExpressJS for the web backend. MongoDB was used to store structured and unstructured data, while Firebase was used to store resume files. The main aim was to showcase my work in a visually appealing manner and make it user-friendly.
          Overall, my internship experience helped me gain valuable insights into the field of NLP and web development, while also allowing me to apply my knowledge and skills in a real-world setting.`,
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "CodeClause",
          company_url: "https://codeclause.com",
          logo_path: "codeclause.png",
          duration: "January 2023 - February 2023",
          location: "Remote Internship",
          description: `During my internship with CodeClause I worked on 4 projects: Credit Card Fraud: This project focuses on using R language and various algorithms such as Decision Trees and Artificial Neural Networks to detect credit card fraud. By fitting models, the project aims to gain insights and derive curves from the data. Through this process, the project will visualize patterns and anomalies that can be used to identify fraudulent activities. The goal of the project is to develop a system that can accurately detect and prevent credit card fraud, thus minimizing the financial losses and risks associated with such fraudulent activities.
          Movie Recommendation System: This project involves building a recommendation system for movies based on a user's previous watchlist. Using data science techniques, the system will analyze the user's preferences and recommend new movies that they may be interested in. The project will work with a highly valued and popular dataset in the industry, which makes it a challenging and interesting project to work on. The ultimate goal is to develop a recommendation system that can provide accurate and relevant movie suggestions to users, enhancing their overall movie-watching experience. This project has great practical applications, as it can be used in various industries to provide personalized recommendations to customers.
          This project aims to build a driver drowsiness detection system that can prevent accidents caused by sleepy drivers. Each year in the USA, nearly 100,000 crashes are caused due to drowsy driving. The project will use computer vision techniques, such as Convolutional Neural Networks (CNNs), to track and analyze the eye movements of drivers and classify whether they are drowsy or not. The system will alert the driver with alarms if they are detected to be sleepy, providing an early warning system to prevent accidents. By applying computer vision skills, the project aims to develop an accurate and reliable driver drowsiness detection system that can enhance road safety and reduce the risk of accidents.
          This project aims to develop a breast cancer detection system in Python using the IDC dataset. With the rise in breast cancer cases, it is essential to diagnose the condition at an early stage to improve the chances of successful treatment. The system will process histology images of cancer-inducing malignant cells using Convolutional Neural Networks (CNNs) to develop a classification-based detection system. By applying machine learning algorithms, the project aims to improve the accuracy of breast cancer detection and reduce the risk of false negatives. The ultimate goal of the project is to develop an efficient and reliable breast cancer detection system that can aid medical professionals in diagnosing the condition at an early stage, thus improving the chances of successful treatment.`,
          color: "#ee3c26",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "CodeClause",
          company_url: "https://codeclause.com",
          logo_path: "codeclause.png",
          duration: "January 2023 - February 2023",
          location: "Remote Internship",
          description: `This was a seperate internship program with CodeClause in which I worked a Sales Predictor. This project involved using machine learning techniques to predict sales for a business based on historical data. The project aims to provide insights into future sales trends and help businesses make informed decisions about their sales and marketing strategies. The project used various machine learning algorithms, such as linear regression, decision trees, and neural networks, to analyze past sales data, including factors such as advertising spend, seasonality, and market trends. By training the models on this data, the project generates predictions for future sales, providing a valuable tool for businesses to plan and optimize their operations. Ultimately, the Sales Predictor project aims to help businesses increase revenue, improve their bottom line, and gain a competitive edge in their industry.`,
          color: "#ee3c26",
        },
        {
          title: "Data Science & Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "sparks_logo.png",
          duration: "December 2022 - February 2023",
          location: "Remote Internship",
          description: `This was an internship with CodeClause in which I worked on Stock Market Prediction using
          Numerical and Textual Analysis. The Hybrid Stock Price Prediction project aimed to create a model to predict the future performance of SENSEX,
           one of the major stock market indices in India. The project used data obtained from Yahoo Finance and involved a hybrid approach combining numerical analysis of historical stock prices with sentimental analysis of news headlines.
           The numerical analysis involved using statistical techniques, such as time-series analysis and regression, to identify patterns and trends in the historical stock prices of SENSEX. The sentimental analysis involved using natural language processing techniques to analyze news headlines and identify sentiment scores that can affect the stock performance of SENSEX.
            By combining these two analyses, the project developed a hybrid model that could predict future stock prices and provide investors with a tool to make informed investment decisions. Ultimately, the Hybrid Stock Price Prediction project aimed to provide investors with a better understanding of the market trends and improve their investment returns.`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Lead",
          company: "Bauddhik-Geeks",
          company_url: "https://bauddhikgeeks.tech/",
          logo_path: "bauddhikgeeks.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
          color: "#FBBD18",
        },
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "personal_photo.png",
    description:
      "You can contact me via the following platforms. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/MoudhafferBoua1",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "SoftOCR",
      url:
        "https://github.com/Bouallegui-Moudhaffer/SoftOCR---Optical-Character-Recognition-Software",
      description:
        "As final year dissertation research and project, I developed an optical character recognition software powered with Deep Learning to streamline the task university's administrative tasks student grade entry.",
      languages: [
        {
          name: "JavaFX",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Candetect",
      url:
        "https://github.com/Bouallegui-Moudhaffer/Candetect--A-ReactJs-Flask-backend-and-MongoDb-Project",
      description:
        "A platform allowing for the extraction of relevant information from resumes by leveraging NLP. The project was achieved with MERN Stack & Flask.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/Bouallegui-Moudhaffer/Candetect--A-ReactJs-Flask-backend-and-MongoDb-Project",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "StreamlitCKD",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "This platform uses machine learning to analyze patient data and accurately classify whether they have or do not have chronic kidney disease.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wix",
          iconifyClass: "bxl:wix",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "GameHex",
      url: "https://github.com/Bouallegui-Moudhaffer/GameHex3",
      description:
        "A gaming platform across a Desktop App developed using Java and JavaFX, a Web App using Symfony & Twig and a Mobile App using Codename One.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bouallegui-Moudhaffer/GameHex3",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "FraudulentAI",
      url:
        "https://github.com/Bouallegui-Moudhaffer/Credit-Fraid-Detection---CodeClause-Internship",
      description:
        "As part of a 1 month long internship with CodeClause, I implemented a Credit Fraud Detection system using state of the art technology by leveraging the power of Deep Learning.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Professional Portfolio",
      url: "https://github.com/harikanani/Fileblok",
      description:
        "A Web App developed using ReactJs to act as a gateway to my academic, professional & personal projects and achievements. This platform can also be conisdered a public record of my personal growth.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  hobbies,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
