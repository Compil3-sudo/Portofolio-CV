import Card from "react-bootstrap/Card";
import { Badge, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
  imgSource,
  title,
  text,
  github,
  live,
  details,
  tags,
}) => {
  const redirectToUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [showDetails, setShowDetails] = useState(false);

  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);

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
          <Button
            style={{ margin: "10px" }}
            variant="outline-light"
            onClick={handleShow}
          >
            Details
          </Button>
          {tags && tags.length && (
            <Card.Footer>
              {tags.map((tag) => (
                <Badge
                  pill
                  key={tag}
                  bg="light"
                  style={{
                    color: "black",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  #{tag}
                </Badge>
              ))}
            </Card.Footer>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={showDetails}
        onHide={handleClose}
        centered
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Array.isArray(details)
            ? details.map((detail, index) => <p key={index}>{detail}</p>)
            : details}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProjectCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
