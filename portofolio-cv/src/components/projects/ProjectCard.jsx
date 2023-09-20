import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/Button";

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
      <div
        id="project-card"
        className="w-80 border bg-gray-900 rounded-lg text-slate-100 flex flex-col h-full"
      >
        <img src={imgSource} alt={title} className="rounded-t-lg" />
        <div id="card-body" className="flex flex-col h-full">
          <div className="container mx-auto px-2">
            <h2 className="text-center py-3 text-lg font-semibold">{title}</h2>
            <h3 className="text-justify px-6">{text}</h3>
            <div className="flex justify-center mt-4 mb-2">
              <Button onClick={() => redirectToUrl(github)}>Github</Button>
              <Button onClick={() => redirectToUrl(live)}>Live</Button>
              <Button onClick={handleShow}>Details</Button>
            </div>
          </div>

          {tags && tags.length && (
            <div
              id="tags"
              className="rounded-b-lg border-t-2 bg-stone-600 bg-opacity-70 flex-grow"
            >
              <div className="flex flex-wrap justify-center">
                {tags.map((tag) => (
                  <div
                    className="rounded-full bg-slate-50 text-slate-800 text-xs font-semibold m-2"
                    key={tag}
                  >
                    <div className="p-1">#{tag}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

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
          <button onClick={handleClose}>Close</button>
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
