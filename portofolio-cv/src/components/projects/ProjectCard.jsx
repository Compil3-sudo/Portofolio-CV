import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSource, title, text, github, live, description }) => {
  console.log("TODO: create modal onclick to show: ", description);

  const redirectToUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={imgSource} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button onClick={() => redirectToUrl(github)}>Github</Button>
          <Button onClick={() => redirectToUrl(live)}>Live</Button>
          <Button>Description</Button>
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
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
