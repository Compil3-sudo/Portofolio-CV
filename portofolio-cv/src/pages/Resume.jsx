import { Button } from "react-bootstrap";
import RaresResume from "../assets/Rares_Tincu_resume.pdf";

const Resume = () => {
  return (
    <>
      <h2>Click on the button to download my Resume (CV)</h2>
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
    </>
  );
};

export default Resume;
