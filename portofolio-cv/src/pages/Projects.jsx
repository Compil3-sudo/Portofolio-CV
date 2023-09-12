import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const projectProps = {
    imgSource: "",
    title: "",
    text: "",
    github: "",
    live: "",
    description: "",
  };

  return (
    <>
      <h1 style={{ marginTop: "6rem" }}>Need to add Product Card with grid</h1>
      <p>add image with each project inside card</p>
      <p>add links to github code and live deploy on hover card</p>
      <p>add detailed project description somewhere</p>

      <p>should look similar to this:</p>
      <img src="/projects_template.png" alt="" style={{ width: "70%" }} />

      <ProjectCard
        imgSource=""
        title="React Learning Projects"
        text="15 React Projects by Jogn Smilga combined with theoretical React concepts and extra features."
        github="https://github.com/Compil3-sudo/React-Learning"
        live="https://react-learning-projects.netlify.app/"
        description="description"
      />

      <h2>My Projects:</h2>
      <ul>
        <li>
          <a href="https://react-learning-projects.netlify.app/">
            React Learning Projects
          </a>
        </li>
        <li>
          <a href="https://crown-clothing-compil3.netlify.app/">
            Crown Clothing - E-commerce Clothing Shop
          </a>
        </li>
        <li>
          <a href="https://academind-react-meals.netlify.app/">
            React Meals - Order Food with HTTP request to Firebase DB
          </a>
        </li>
        <li>
          <a href="https://react-mp-events-auth.onrender.com/">
            React Multi Page Events with User Auth
          </a>
        </li>
        <li>
          <a href="https://meetups-nextjs-academind-project-gvm37hd9s-compil3-sudo.vercel.app/">
            Meetups - NextJs Project with MongoDB
          </a>
        </li>
        <li>
          <a href="https://reactposter.onrender.com/">
            React Poster - Create Posts with a dummy backend
          </a>
        </li>
        <li>
          <a href="https://reduxcart-firebase-db.netlify.app/">
            Redux shopping Cart with a Firebase Database
          </a>
        </li>
        <li>
          <a href="https://compil3-react-animations.netlify.app/">
            React animations and modals
          </a>
        </li>
        <li>
          <a href="https://compil3-sudo.github.io/javascript_games/dicee.html">
            Javascript dice game
          </a>
        </li>
        <li>
          <a href="https://compil3-sudo.github.io/javascript_games/drums.html">
            Javascript drums game
          </a>
        </li>
        <li>
          <a href="https://compil3-sudo.github.io/javascript_games/simon.html">
            Javascript simon game
          </a>
        </li>
      </ul>
    </>
  );
};

export default Projects;
