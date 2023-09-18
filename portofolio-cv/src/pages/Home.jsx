import SocialIcons from "../components/socials/SocialIcons";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={classes.bottomSpace}>Rares Tincu</h1>
      <h2 className={classes.bottomSpace}>
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
      <h3>
        Open to work as a full-time entry level Full-Stack / Backend Web
        Developer
      </h3>
      <h3 className={classes.bottomSpace}>
        Open to work as a Software Engineer with Python, C# or Java.
      </h3>
      <SocialIcons />
    </>
  );
};

export default Home;
