import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { SiUdemy } from "react-icons/si";

import classes from "./Education.module.css";
import EducationItem from "../components/education-item/EducationItem";

const Education = () => {
  const educationColor = "#639cd9";

  const uniParagraphs = [
    "Computer Science (B.Sc.)",
    "Grades from 1-6, where 1 is the best",
    "Bachelor's Degree grade: <strong>1.0</strong>",
    "Specialization: Computer Science.",
    "Graduation grade: <strong>2.6</strong>",
  ];

  const uniEducationProps = {
    date: "10/2018 - 08/2023",
    icon: <FaUniversity />,
    color: educationColor,
    title: "Universität Augsburg",
    subtitle: "Augsburg(DE)",
  };

  const thgParagraphs = [
    "Graduation: Abitur",
    "Examination Subjects (Grades: from 1-15, where 15 is the best):",
    "German(8), Mathematics (10), English (14), Ethics (4), Arts (13)",
    "Graduation grade (from 1-6, where 1 is the best): <strong>2.4</strong>",
  ];

  const thgEducationProps = {
    date: "09/2013 – 06/2017",
    icon: <IoMdSchool />,
    color: educationColor,
    title: "Theodor-Heuss-Gymnasium",
    subtitle: "Nördlingen (DE)",
  };

  const ogsParagraphs = [
    "Studied natural sciences with bi-lingual classes in English, before moving to Germany in the 10th grade.",
  ];

  const ogsEducationProps = {
    date: "09/2008 – 08/2013",
    icon: <IoMdSchool />,
    color: educationColor,
    title: "Colegiul National Octavian Goga (Gymnasium)",
    subtitle: "Sibiu, (Hermanstadt) (RO)",
  };

  const udemyColor = "#AD49F1";

  const udemyOneParagraphs = [
    "Zero to Mastery",
    "Further improved my knowledge with new features, such as Redux, GraphQL, Typescript, Firebase, Jest",
  ];

  const udemyOneEducationProps = {
    date: "08/09/2023",
    icon: <SiUdemy />,
    color: udemyColor,
    title: "Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)",
    subtitle: "Udemy",
    udemyCertification:
      "https://www.udemy.com/certificate/UC-6ef9b5b1-6494-4d8b-b233-0f3901ad7d50/",
  };

  const udemyTwoParagraphs = [
    "Academind",
    "Learned a lot about React, Redux, Unit Testing, NextJS, React-router-dom, MongoDB",
  ];

  const udemyTwoEducationProps = {
    date: "24/07/2023",
    icon: <SiUdemy />,
    color: udemyColor,
    title: "React - The Complete Guide 2023 (incl. React Router & Redux)",
    subtitle: "Udemy",
    udemyCertification:
      "https://www.udemy.com/certificate/UC-e97ab2b7-8a52-4f23-a638-1c739b590f40/",
  };

  const udemyThreeParagraphs = [
    "App Brewery",
    "First introduction to Web Development. Learned core Javascript, HTML, CSS, NodeJS, React, MongoDB, Mongoose concepts.",
  ];

  const udemyThreeEducationProps = {
    date: "30/11/2022",
    icon: <SiUdemy />,
    color: udemyColor,
    title: "The Complete 2023 Web Development Bootcamp",
    subtitle: "Udemy",
    udemyCertification:
      "https://www.udemy.com/certificate/UC-244fc3ba-17c9-4f7c-a540-ec9542fb491c/",
  };

  const udemyFourParagraphs = [
    "Improved existing PyTorch, NumPy and Machine Learning knowledge.",
    "Learned fundamental pandas concepts.",
  ];

  const udemyFourEducationProps = {
    date: "21/06/2022",
    icon: <SiUdemy />,
    color: udemyColor,
    title: "PyTorch for Deep Learning with Python Bootcamp",
    subtitle: "Udemy",
    udemyCertification:
      "https://www.udemy.com/certificate/UC-04e34ef2-03ad-4af3-8ed5-04d016209c38/",
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-24 mb-8  text-5xl font-bold">Education</h1>
        <VerticalTimeline animate={true} layout="1-column">
          <EducationItem
            date={uniEducationProps.date}
            icon={uniEducationProps.icon}
            color={uniEducationProps.color}
            title={uniEducationProps.title}
            subtitle={uniEducationProps.subtitle}
            paragraphs={uniParagraphs}
          />

          <EducationItem
            date={thgEducationProps.date}
            icon={thgEducationProps.icon}
            color={thgEducationProps.color}
            title={thgEducationProps.title}
            subtitle={thgEducationProps.subtitle}
            paragraphs={thgParagraphs}
          />

          <EducationItem
            date={ogsEducationProps.date}
            icon={ogsEducationProps.icon}
            color={ogsEducationProps.color}
            title={ogsEducationProps.title}
            subtitle={ogsEducationProps.subtitle}
            paragraphs={ogsParagraphs}
          />
        </VerticalTimeline>

        <h2 className="text-3xl font-semibold mt-4 mb-4 pt-2 pb-2">
          Personal Development:
        </h2>

        <VerticalTimeline animate={true} layout="1-column-right">
          <EducationItem
            date={udemyOneEducationProps.date}
            icon={udemyOneEducationProps.icon}
            color={udemyOneEducationProps.color}
            title={udemyOneEducationProps.title}
            subtitle={udemyOneEducationProps.subtitle}
            paragraphs={udemyOneParagraphs}
            udemyCertification={udemyOneEducationProps.udemyCertification}
          />

          <EducationItem
            date={udemyTwoEducationProps.date}
            icon={udemyTwoEducationProps.icon}
            color={udemyTwoEducationProps.color}
            title={udemyTwoEducationProps.title}
            subtitle={udemyTwoEducationProps.subtitle}
            paragraphs={udemyTwoParagraphs}
            udemyCertification={udemyTwoEducationProps.udemyCertification}
          />

          <EducationItem
            date={udemyThreeEducationProps.date}
            icon={udemyThreeEducationProps.icon}
            color={udemyThreeEducationProps.color}
            title={udemyThreeEducationProps.title}
            subtitle={udemyThreeEducationProps.subtitle}
            paragraphs={udemyThreeParagraphs}
            udemyCertification={udemyThreeEducationProps.udemyCertification}
          />

          <EducationItem
            date={udemyFourEducationProps.date}
            icon={udemyFourEducationProps.icon}
            color={udemyFourEducationProps.color}
            title={udemyFourEducationProps.title}
            subtitle={udemyFourEducationProps.subtitle}
            paragraphs={udemyFourParagraphs}
            udemyCertification={udemyFourEducationProps.udemyCertification}
          />
        </VerticalTimeline>

        <h2 className="text-3xl font-semibold mt-4 mb-4 pt-2 pb-2">
          Spoken Languages:
        </h2>
        <div className={classes.languagesContainer}>
          <ul className={classes.languages}>
            <li>German (Fluent)</li>
            <li>English Advanced (C1)</li>
            <li>French (B1+)</li>
            <li>Romanian (Native)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
