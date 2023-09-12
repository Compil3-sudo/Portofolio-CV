import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <h2 style={{ marginTop: "7rem" }}>
        I am continously focusing on improving my knowledge with hard work and
        determination. Here are some of the major languages, frameworks, and
        other tools that I have worked with:
      </h2>
      <div className={classes.devicon}>
        <i className="devicon-react-original colored"></i>

        <i className="devicon-redux-original colored"></i>

        <i className="devicon-javascript-plain colored"></i>

        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-jest-plain colored"></i>
      </div>

      <div className={classes.devicon}>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-firebase-plain-wordmark colored"></i>
        <i className="devicon-dotnetcore-plain colored"></i>
        <i className="devicon-nextjs-plain"></i>
        <i className="devicon-nodejs-plain colored"></i>
      </div>

      <div className={classes.devicon}>
        <i className="devicon-python-plain-wordmark colored"></i>
        <i className="devicon-numpy-original colored"></i>
        <i className="devicon-pytorch-plain-wordmark colored"></i>
      </div>

      <div className={classes.devicon}>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"></i>
      </div>

      <div className={classes.devicon}>
        <i className="devicon-csharp-plain colored"></i>
        <i className="devicon-java-plain-wordmark"></i>
        <i className="devicon-c-plain colored"></i>
      </div>

      <div className={classes.devicon}>
        <i className="devicon-git-plain-wordmark colored"></i>
        <i className="devicon-vscode-plain colored"></i>
        <i className="devicon-pycharm-plain-wordmark colored"></i>
        <i className="devicon-intellij-plain-wordmark colored"></i>
      </div>
    </>
  );
};

export default Skills;
