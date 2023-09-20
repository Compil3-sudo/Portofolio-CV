import RaresResume from "../assets/Rares_Tincu_resume.pdf";
import Button from "../components/button/Button";
import { BiSolidDownload } from "react-icons/bi";

const Resume = () => {
  return (
    <>
      <div className="container mx-auto px-16">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-8">
            Click on the button to download my Resume (CV)
          </h2>
          <a
            href={RaresResume}
            download="Rares Tincu CV"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <div className="inline-flex items-center">
                <BiSolidDownload size={20} style={{ marginRight: "0.25rem" }} />
                Download CV
              </div>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
