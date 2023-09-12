import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { SiUdemy } from "react-icons/si";

import classes from "./Education.module.css";

const Education = () => {
  return (
    <>
      <h1 style={{ marginTop: "5rem" }}>Education</h1>
      <p>make VerticalTimelineElement component</p>
      <p>Add onClick to send you to verify the certificate</p>

      <VerticalTimeline animate={true} layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#639cd9", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #639cd9" }}
          date="10/2018 - 08/2023"
          iconStyle={{ background: "#639cd9", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            Universität Augsburg
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Augsburg (DE)</h4>
          <p>Computer Science (B.Sc.)</p>
          <p>Grades from 1-6, where 1 is the best</p>
          <p>
            Bachelor&apos;s&nbsp;Degree grade: <strong>1.0</strong>
          </p>
          <p>Specialization: Computer Science.</p>
          <p>
            Graduation grade: <strong>2.6</strong>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#639cd9", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #639cd9" }}
          date="09/2013 – 06/2017"
          iconStyle={{ background: "#639cd9", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Theodor-Heuss-Gymnasium
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nördlingen (DE)
          </h4>
          <p>Graduation: Abitur</p>
          <p>Examination Subjects (Grades: from 1-15, where 15 is the best):</p>
          <p>
            German(8), Mathematics (10), English (14), Ethics (4), Arts (13)
          </p>
          <p>
            Graduation grade (from 1-6, where 1 is the best):{" "}
            <strong>2.4</strong>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#639cd9", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #639cd9" }}
          date="09/2008 – 08/2013"
          iconStyle={{ background: "#639cd9", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Colegiul National “Octavian Goga” (Gymnasium)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sibiu, (Hermanstadt) (RO)
          </h4>
          <p>
            Studied natural sciences with bi-lingual classes in English, before
            moving to Germany in the 10th grade.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2>Personal Development:</h2>

      <VerticalTimeline animate={true} layout="1-column-right">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#AD49F1", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  #AD49F1" }}
          date="08/09/2023"
          iconStyle={{ background: "#AD49F1", color: "#fff" }}
          icon={<SiUdemy />}
        >
          <h3 className="vertical-timeline-element-title">
            Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>Zero to Mastery</p>
          <p>
            Further improved my knowledge with new features, such as Redux,
            GraphQL, Typescript, Firebase, Jest
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#AD49F1", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  #AD49F1" }}
          date="24/07/2023"
          iconStyle={{ background: "#AD49F1", color: "#fff" }}
          icon={<SiUdemy />}
        >
          <h3 className="vertical-timeline-element-title">
            React - The Complete Guide 2023 (incl. React Router & Redux)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>Academind</p>
          <p>
            Learned a lot about React, Redux, Unit Testing, NextJS,
            React-router-dom, MongoDB
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#AD49F1", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  #AD49F1" }}
          date="30/11/2022"
          iconStyle={{ background: "#AD49F1", color: "#fff" }}
          icon={<SiUdemy />}
        >
          <h3 className="vertical-timeline-element-title">
            The Complete 2023 Web Development Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>App Brewery</p>
          <p>
            First introduction to Web Development. Learned core Javascript,
            HTML, CSS, NodeJS, React, MongoDB, Mongoose concepts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#AD49F1", color: "#fff" }}
          contentArrowStyle={{ borderLeft: "7px solid  #AD49F1" }}
          date="21/06/2022"
          iconStyle={{ background: "#AD49F1", color: "#fff" }}
          icon={<SiUdemy />}
        >
          <h3 className="vertical-timeline-element-title">
            PyTorch for Deep Learning with Python Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>
            Improved existing PyTorch, NumPy and Machine Learning knowledge.
            Learned fundamental pandas concepts.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2>Spoken Languages:</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className={classes.languages}>
          <li>German (Fluent)</li>
          <li>English Advanced (C1)</li>
          <li>French (B1+)</li>
          <li>Romanian (Native)</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
