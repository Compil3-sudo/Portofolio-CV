import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSource, title, text, github, live, details }) => {
  console.log("TODO: create modal onclick to show: ", details);

  const redirectToUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Card
        style={{
          width: "20rem",
        }}
        data-bs-theme="dark"
      >
        <Card.Img
          variant="top"
          src={imgSource}
          alt={title}
          style={{ maxHeight: "200px", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button
            style={{ margin: "10px" }}
            onClick={() => redirectToUrl(github)}
            variant="outline-light"
          >
            Github
          </Button>
          <Button
            style={{ margin: "10px" }}
            onClick={() => redirectToUrl(live)}
            variant="outline-light"
          >
            Live
          </Button>
          <Button style={{ margin: "10px" }} variant="outline-light">
            Details
          </Button>
          <Card.Footer>Add Tags here ?</Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

ProjectCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ProjectCard;
