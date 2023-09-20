// import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { VscClose } from "react-icons/vsc";

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
        className="shadow-md shadow-slate-500 w-80 border bg-gray-900 rounded-lg text-slate-100 flex flex-col h-full"
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

      {showDetails && (
        <Modal onClose={handleClose}>
          <div className="flex flex-col">
            <div
              id="modal-header"
              className="grid grid-flow-col items-center border-b-2 border-b-slate-400"
            >
              <h1 className="text-2xl font-bold">{title}</h1>
              <div
                className="justify-self-end cursor-pointer"
                onClick={handleClose}
              >
                <VscClose size={25} />
              </div>
            </div>
            <div id="modal-body" className="border-b-2 border-b-slate-400">
              {Array.isArray(details)
                ? details.map((detail, index) => (
                    <p className="py-1 my-1" key={index}>
                      {detail}
                    </p>
                  ))
                : details}
            </div>
            <div id="modal-footer" className="mt-2 flex flex-col items-end">
              <Button
                additionalStyles="p-2 hover:bg-slate-900"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
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
