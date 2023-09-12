import { VerticalTimelineElement } from "react-vertical-timeline-component";
import PropTypes from "prop-types";

const EducationItem = (props) => {
  const { date, icon, color, title, subtitle, paragraphs, udemyCertification } =
    props;
  let udemyArrowStyle = null;
  let udemyClick = null;
  let udemyPointer = null;

  if (subtitle === "Udemy") {
    udemyArrowStyle = { borderLeft: "7px solid " + color };

    // in case Programmer forgets url >_>
    try {
      if (!udemyCertification) {
        throw new Error("Missing Udemy Certification");
      }

      udemyClick = () => {
        window.open(udemyCertification, "_blank", "noopener,noreferrer");
      };

      udemyPointer = { background: color, color: "#fff", cursor: "pointer" };
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={
          udemyPointer ? udemyPointer : { background: color, color: "#fff" }
        }
        contentArrowStyle={
          udemyArrowStyle
            ? udemyArrowStyle
            : { borderRight: "7px solid " + color }
        }
        date={date}
        iconStyle={{ background: color, color: "#fff" }}
        icon={icon}
        onTimelineElementClick={udemyClick}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
        {paragraphs.map((item, index) => (
          <p key={title + index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </VerticalTimelineElement>
    </>
  );
};

EducationItem.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  udemyCertification: PropTypes.string,
};

export default EducationItem;
