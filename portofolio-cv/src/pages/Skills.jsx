import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div className="container mx-auto px-16 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="mt-24 mb-12 text-justify lg:w-4/5 text-3xl">
              I&apos;m&nbsp;focusing on improving my knowledge with hard work
              and determination. I want to follow a <strong>MERN</strong> tech
              stack, while also learning SQL based databses and NextJs. Here are
              some of the major languages, frameworks, and other tools that
              I&apos;ve&nbsp;worked with:
            </h2>
          </div>

          <h2 className="text-2xl font-bold">Web Development:</h2>
          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-react-original colored"></i>
              <p>React</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-redux-original colored"></i>
              <p>Redux</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-javascript-plain colored"></i>
              <p>Javascript</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-typescript-plain colored"></i>
              <p>Typescript</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-jest-plain colored"></i>
              <p>Jest</p>
            </div>
          </div>

          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <p>MongoDB</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-firebase-plain-wordmark colored"></i>
              <p>Firebase</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-dotnetcore-plain colored"></i>
              <p>ASP.NET Core MVC</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-nextjs-plain"></i>
              <p>NextJs</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-nodejs-plain colored"></i>
              <p>NodeJs</p>
            </div>
          </div>

          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <p>HTML</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <p>CSS</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
              <p>Bootstrap 5</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12">Machine Learning:</h2>
          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-python-plain-wordmark colored"></i>
              <p>Python</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-numpy-original colored"></i>
              <p>Numpy</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-pytorch-plain-wordmark colored"></i>
              <p>PyTorch</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12">
            Other Programming Languages:
          </h2>
          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-csharp-plain colored"></i>
              <p>C#</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-java-plain-wordmark"></i>
              <p>Java</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-c-plain colored"></i>
              <p>C</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12">Git and IDEs:</h2>
          <div className={classes.devicons}>
            <div className={classes.devItem}>
              <i className="devicon-git-plain-wordmark colored"></i>
              <p>GIT</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-vscode-plain colored"></i>
              <p>VS Code</p>
              <p>(Favourite)</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-pycharm-plain-wordmark colored"></i>
              <p>PyCharm</p>
              <p>(For ML)</p>
            </div>
            <div className={classes.devItem}>
              <i className="devicon-intellij-plain-wordmark colored"></i>
              <p>InteliJ</p>
              <p>(Java)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
