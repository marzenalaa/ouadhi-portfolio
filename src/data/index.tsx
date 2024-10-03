import Github from "../../public/github.svg";
import Linkedin from "../../public/linkedin.svg";
import Whatsapp from "../../public/whatsapp.svg";
import Email from "../../public/envelope.svg";
import Address from "../../public/geo-alt.svg";
import {
  FaHouse,
  FaUser,
  FaFile,
  FaKeyboard,
  FaEnvelope,
} from "react-icons/fa6";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHouse className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experiences",
    link: "#experiences",
    icon: <FaFile className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "#services",
    icon: <FaKeyboard className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const heroSection = {
  subtitel: "Building Full-Stack Solutions from the Ground Up",
  title: "Delivering Robust and Scalable Web Applications.",
  description:
    "Hi, I'm Mohammed, a Full Stack Engineer with a strong foundation in Java, Spring, and React. I specialize in building scalable and efficient web applications using modern technologies and best practices.",
  buttonTitle: "Show my services",
};

export const about = {
  title: "Who am i?",
  subtitle: "I'm Mohammed OUADHI, a Full-stack Engineer.",
  description:
    "I am a freelancer based in the Luxembourg and i have been building noteworthy web applications for years, which comply with the latest technologies. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.",
  link: "https://firebasestorage.googleapis.com/v0/b/costum-email-signature.appspot.com/o/Mohammed_OUADHI.pdf?alt=media&token=59258185-2943-4fc7-a3a7-100931e3c823",
  aboutInfo: [
    { id: "1", title: "Full Name", desc: "Mohammed OUADHI" },
    { id: "2", title: "Age", desc: "32" },
    { id: "3", title: "Freelance", desc: "Available" },
    { id: "4", title: "Address", desc: "Luxembourg" },
    { id: "5", title: "WhatsApp", desc: "+213 553 485 908" },
    { id: "6", title: "Email", desc: "ouadhimohammed@gmail.com" },
  ],
};

export const experiences = [
  {
    title: "January 2024 - July 2024",
    content: (
      <div>
        <h4 className="text-lg">
          Beilix (Norvège - Oslo) As{" "}
          <span className="text-purple">Tech Lead - Full Stack</span>
        </h4>
        <ul className="text-sm py-4">
          <li>
            - Authored and validated comprehensive technical and functional
            documentation.
          </li>
          <li>
            - Designed and automated workflows for the Education and Training
            Evaluation Commission.
          </li>
          <li>
            - Orchestrated collaboration within a multinational team to drive
            project advancements.
          </li>
          <li>
            - Contributed to product roadmap discussions, leveraging expertise
            in backend technologies.
          </li>
          <li>
            - Resolved complex technical issues and bugs, systematically
            identifying root causes and implementing effective solutions.
          </li>
          <li>
            - Developed end-to-end tests using Selenium and TestNG, ensuring
            robust application quality.
          </li>
          <li>
            - Built applications to generate various reports, enhancing data
            accessibility and usability.
          </li>
          <li>
            - Communicated effectively with team members to resolve issues and
            ensure project cohesion.
          </li>
        </ul>
        <p>
          <b className="text-purple">Environments techniques:</b> Spring Boot,
          SptringCloud, Mysql, Microservices, Event-driven, CQRS, Axon, Domain
          Driven Design, kafka, jasperreport, BPMN camunda, AWS, Resend,
          Maizzel, Miro, GithubAction, SuperToken.
        </p>
      </div>
    ),
  },
  {
    title: "January 2023 - January 2024",
    content: (
      <div>
        <h4 className="text-lg">
          Nassej (Saudi Arabia , riadh) - Education and Training Evaluation
          Commission Software Engineer As{" "}
          <span className="text-purple">
            – Full stack web developer ( SpringBoot - Angular )
          </span>
        </h4>
        <ul className="text-sm py-4">
          <li>
            - Authored and validated comprehensive technical and functional
            documentation.
          </li>
          <li>
            - Designed and automated workflows for the Education and Training
            Evaluation Commission.
          </li>
          <li>
            - Orchestrated collaboration within a multinational team to drive
            project advancements.
          </li>
          <li>
            - Contributed to product roadmap discussions, leveraging expertise
            in backend technologies.
          </li>
          <li>
            - Resolved complex technical issues and bugs, systematically
            identifying root causes and implementing effective solutions.
          </li>
          <li>
            - Developed end-to-end tests using Selenium and TestNG, ensuring
            robust application quality.
          </li>
          <li>
            - Built applications to generate various reports, enhancing data
            accessibility and usability.
          </li>
          <li>
            - Communicated effectively with team members to resolve issues and
            ensure project cohesion.
          </li>
        </ul>
        <p>
          <b className="text-purple">Environments techniques:</b> Microservices,
          Event-driven, Spring Boot, SptringCloud, Mysql, Angular, cockpitCMS,
          Formio, MongoDb, kafka, keycloak, BPMN, camunda, Docker, Jreport,
          Linux, keycloak.
        </p>
      </div>
    ),
  },
  {
    title: "January 2021 - June 2023",
    content: (
      <div>
        <h4 className="text-lg">
          Kepler Technologies - Algerie ( IPA, AXA, SAA, CAR, SGA, MUA assurance
          maurice) As <span className="text-purple">– Tech Lead</span>
        </h4>
        <ul className="text-sm py-4">
          <li>
            - Collected and defined business requirements, translating them into
            actionable project plans.
          </li>
          <li>
            - Authored detailed functional and technical specifications to guide
            development efforts.
          </li>
          <li>
            - Developed comprehensive project phase plans, defining objectives,
            allocating resources, and estimating timelines.
          </li>
          <li>
            - Provided clear task assignments and responsibilities to team
            members, leveraging individual skills and interests.
          </li>
          <li>
            - Organized regular meetings to discuss progress, address issues,
            and align team objectives with project goals.
          </li>
          <li>
            - Offered technical expertise to guide the team in selecting
            technologies, frameworks, and best development practices.
          </li>
          <li>
            - Conducted regular code reviews to ensure adherence to quality
            standards and coding conventions.
          </li>
          <li>
            - Spearheaded the development of innovative technical architectures
            for new projects.
          </li>
          <li>
            - Successfully resolved complex technical issues and bugs, ensuring
            smooth project execution.
          </li>
          <li>
            - Wrote scripts in JIRA using PowerScript to automate tasks and
            enhance workflow efficiency.
          </li>
        </ul>
        <p>
          <b className="text-purple">Environments techniques:</b> Spring Boot,
          SptringCloud, React, Mysql, Activity, Docker, JiraRestApi, Jira plugin
          SDK, AtlassKit, bitbucket pipelines, Selenium, TestNG, JMeter,
          Activity, Jira PowerScript, Angular, Oracl, Apache-Superset, GitLab,
          Jenkins, Keycloak.
        </p>
      </div>
    ),
  },
  {
    title: "2017 - 2021",
    content: (
      <div>
        <h4 className="text-lg">
          National Centre of Transmission and Information System of Customs As{" "}
          <span className="text-purple">
            – Software Engineer (Spring Boot + React)
          </span>
        </h4>
        <ul className="text-sm py-4">
          <li>
            - Refactored existing applications to adopt a distributed N-tier
            architecture, enhancing scalability, maintainability, and
            performance.
          </li>
          <li>
            - investigated customs procedures to create an efficient
            single-window system, simplifying import/export processes and
            reducing bureaucratic hurdles.
          </li>
          <li>
            - Collected, examined and defined business requirements, translating
            them into actionable project specifications.
          </li>
          <li>- Authored detailed functional and technical specifications.</li>
          <li>
            Created technical architectures and conceptual diagrams to guide
            project development.
          </li>
          <li>
            - Built a secure and reliable platform to facilitate data exchange
            and communication between customs authorities and other ports in
            Algeria, improving logistics and trade operations.
          </li>
          <li>
            - Defined and executed comprehensive testing scenarios to ensure
            software functionality and reliability.
          </li>
          <li>
            - Communicated effectively with team members to resolve issues and
            ensure project progress.
          </li>
          <li>
            - Authored and validated all technical and functional documentation.
          </li>
        </ul>
        <p>
          <b className="text-purple">Environments techniques:</b> Spring Boot,
          JSF, React, Informix DB + 4GL, camundaBPMN SpringBatch, Db Access,
          redhat, Glassfish, TomCat, DB administration, Network.
        </p>
      </div>
    ),
  },
];

export const projects = [
  {
    id: "1",
    title: "7+",
    description: "Years of Experience.",
  },
  { id: "2", title: "50+", description: "Projects Completed." },
  { id: "3", title: "10+", description: "Happy Clients" },
];

export const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Build responsive and dynamic web applications using modern front-end and back-end technologies.",
    link: "#",
  },
  {
    id: "02",
    title: "Front-End Frameworks Integration",
    description:
      "Develop interactive user interfaces using frameworks like React, Angular, or Vue.js for enhanced user experience.",
    link: "#",
  },
  {
    id: "03",
    title: "DevOps and Continuous Integration",
    description:
      "Set up automated deployment pipelines and integrate CI/CD tools to streamline development and deployment processes.",
    link: "#",
  },
  {
    id: "04",
    title: "Database Design and Integration",
    description:
      "Create and manage databases, ensuring efficient data storage and retrieval using SQL and NoSQL databases.",
    link: "#",
  },
  {
    id: "05",
    title: "Full-Stack Application Testing",
    description:
      "Implement comprehensive testing strategies, covering both front-end and back-end components to ensure application stability and reliability.",
    link: "#",
  },
  {
    id: "06",
    title: "Back-End API Development",
    description:
      "Design and implement robust RESTful or GraphQL APIs to facilitate seamless communication between front-end and back-end.",
    link: "#",
  },
];

export const contact = {
  text: "I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me.",
  contactInfo: [
    {
      id: 1,
      title: "Address:",
      desc: "Luxembourg, 1 Op der Gare, 5730-Aspelt.",
      img: Address,
      link: "#",
    },
    {
      id: 2,
      title: "WhatsApp:",
      desc: "+213 553 485 908",
      img: Whatsapp,
      link: "https://wa.me/213553485908",
    },
    {
      id: 3,
      title: "Email:",
      desc: "ouadhimohammed@gmail.com",
      img: Email,
      link: "mailto:ouadhimohammed@gmail.com",
    },
  ],
};

export const socialMedia = [
  {
    id: 1,
    img: Github,
    link: "https://github.com/ouadhi",
  },
  {
    id: 2,
    img: Linkedin,
    link: "https://www.linkedin.com/in/mohammed-ouadhi-66196510a/",
  },
  {
    id: 3,
    img: Whatsapp,
    link: "https://wa.me/213553485908",
  },
];
