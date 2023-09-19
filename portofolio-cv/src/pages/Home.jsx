import SocialIcons from "../components/socials/SocialIcons";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-16">
        <div className="text-center">
          <h1 className="mb-8 font-bold">Rares Tincu</h1>
          <h2 className="mb-8 text-2xl px-2">
            I&apos;m&nbsp;a <em>Computer Science graduate</em> at&nbsp;
            <strong>
              <div className={classes.uniLink}>
                <a
                  href="https://www.uni-augsburg.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Universität Augsburg
                </a>
              </div>
            </strong>
          </h2>
          <h3 className="text-lg">
            Open to work as a full-time entry level Full-Stack / Backend Web
            Developer
          </h3>
          <h3 className="mb-8 text-lg">
            Open to work as a Software Engineer with Python, C# or Java.
          </h3>
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default Home;
