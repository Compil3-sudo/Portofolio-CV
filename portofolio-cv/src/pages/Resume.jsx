import { Button } from "react-bootstrap";
import RaresResume from "../assets/Rares_Tincu_resume.pdf";

const Resume = () => {
  return (
    <>
      <div className="container mx-auto px-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold">
            Click on the button to download my Resume (CV)
          </h2>
          <a
            href={RaresResume}
            download="Rares Tincu CV"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="light"
              style={{ fontWeight: "bold", marginTop: "2rem" }}
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
