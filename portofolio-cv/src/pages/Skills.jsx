import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <h2 style={{ marginTop: "6rem", textAlign: "justify" }}>
        I&apos;m&nbsp;focusing on improving my knowledge with hard work and
        determination. Here are some of the major languages, frameworks, and
        other tools that I&apos;ve&nbsp;worked with:
      </h2>

      <h2>Web Development:</h2>
      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-react-original colored"></i>
          <p>React</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-redux-original colored"></i>
          <p>Redux</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-javascript-plain colored"></i>
          <p>Javascript</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-typescript-plain colored"></i>
          <p>Typescript</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-jest-plain colored"></i>
          <p>Jest</p>
        </div>
      </div>

      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <p>MongoDB</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-firebase-plain-wordmark colored"></i>
          <p>Firebase</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-dotnetcore-plain colored"></i>
          <p>ASP.NET Core MVC</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-nextjs-plain"></i>
          <p>NextJs</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-nodejs-plain colored"></i>
          <p>NodeJs</p>
        </div>
      </div>

      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <p>HTML</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <p>CSS</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <p>Bootstrap 5</p>
        </div>
      </div>

      <h2>Machine Learning:</h2>
      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-python-plain-wordmark colored"></i>
          <p>Python</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-numpy-original colored"></i>
          <p>Numpy</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-pytorch-plain-wordmark colored"></i>
          <p>PyTorch</p>
        </div>
      </div>

      <h2>Other Programming Languages:</h2>
      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-csharp-plain colored"></i>
          <p>C#</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-java-plain-wordmark"></i>
          <p>Java</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-c-plain colored"></i>
          <p>C</p>
        </div>
      </div>

      <h2>Git and IDEs:</h2>
      <div className={classes.devicon}>
        <div className={classes.devText}>
          <i className="devicon-git-plain-wordmark colored"></i>
          <p>GIT</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-vscode-plain colored"></i>
          <p>VS Code</p>
          <p>(Favourite)</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-pycharm-plain-wordmark colored"></i>
          <p>PyCharm</p>
          <p>(For ML)</p>
        </div>
        <div className={classes.devText}>
          <i className="devicon-intellij-plain-wordmark colored"></i>
          <p>InteliJ</p>
          <p>(Java)</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
