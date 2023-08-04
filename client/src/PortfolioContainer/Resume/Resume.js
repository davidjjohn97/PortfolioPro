import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

    /* Bugfix for project description css */
    const ProjectHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="project-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="project-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="project-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "TypeScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 82 },
    { skill: "DBMS", ratingPercentage: 78 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "Agile", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, NodeJs, CSS",
    },
    {
      title: "Data Analytics for OCR Startup in Portugal ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Led a team of 5 students to pioneer a custom data analytics solution that enabled real-time insights for stakeholders",
      subHeading:
        "Technologies Used:  R, Python, Azure, AWS Architecture",
    },
    {
      title: "Analysis of Cryptocurrencies ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "•	Data collection was executed using CoinMarketCap APIs and performed Data Analysis (Correlation, ANOVA) ",
      subHeading:
        "Technologies Used: R, Python, SQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Northeastern University, Boston, United States"}
        subHeading={"Masters in Professional Studies, Data Analytics"}
        fromDate={"2021"}
        toDate={"2023"}
      />
      <div className="experience-description">
          <span className="resume-description-text">
          •	Relevant Courses: Data Mining, Predictive Analytics, Data Visualizations, Data Warehousing and SQL, Decision Support and Business Intelligence, Risk Management and Big Data 
          </span>
          <br />
        </div>

      <ResumeHeading
        heading={"Kerala Technical University"}
        subHeading={"Bachelor of Technology, Computer Science Engineering"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <div className="experience-description">
          <span className="resume-description-text">
          •	Relevant Courses: Data Structures, Principles of Database Design, Design and Analysis of Algorithms, Software Engineering and Project Management, Programming Paradigms
          </span>
          <br />
        </div>
    </div>,
    <div className="experience-description">
    <br />
</div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Shell Tech Works"}
          subHeading={"SOFTWARE ENGINEER INTERN"}
          fromDate={"2022"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          •	Collaborated on developing a Well Classification Tool using NodeJs that streamlines work of geologists for Carbon Recapture
          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          •	Built common React component libraries (User-Feedback and Layout) to reduce coding time in Shell Development Teams
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"KeyValue Software Systems"}
          subHeading={"ASSOCIATE SOFTWARE ENGINEER"}
          fromDate={"2019"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          • Developed 5+ NodeJS microservices (Warehouse Management service, Online Management service, Delivery Management service and so on) supporting B2B E-Commerce
          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          •	Implemented Unit Testing on APIs using Mocha and Jest, yielding 85% test-coverage in SonarQube
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ProjectHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travelling"
        description="New places, New Friends, New Experiences, New Perspectives"
      />
      <ResumeHeading
        heading="Cooking"
        description="Favourite pastime which helps me calm down"
      />
      <ResumeHeading
        heading="Soccer"
        description="Played as Defender (Right-back) in school, college and company teams. Also worked as Soccer Official for Intramurals at Northeastern University"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;