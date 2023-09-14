import ReactLearningImage from "/projectImages/react_learning.png";
import CrownClothingImage from "/projectImages/crown_clothing.png";
import ReactAnimationsImage from "/projectImages/react_animations.png";
import ReactMealsImage from "/projectImages/react_meals.png";
import ReactPosterImage from "/projectImages/react_poster.png";
import ReduxCartImage from "/projectImages/redux_cart.png";
import ReactMeetupsImage from "/projectImages/react_meetups.png";
import ReactMpEventsImage from "/projectImages/react_mp_events.png";

// TODO: ADD detailed details
// TODO: improve text

const projectsList = [
  {
    imgSource: ReactLearningImage,
    title: "React Learning Projects",
    text: "15 React Projects by Jogn Smilga combined with theoretical React concepts and extra features.",
    github: "https://github.com/Compil3-sudo/React-Learning",
    live: "https://react-learning-projects.netlify.app/",
    details: [
      "React Hooks",
      "Conditional Rendering",
      "Forms",
      "Prop Drilling",
      "Prop Types",
      "React Router",
    ],
    tags: ["React", "John Smilga"],
  },
  {
    imgSource: CrownClothingImage,
    title: "Crown Clothing",
    text: "E-commerce App from the ZTM React Course. Learned Typescript, Jest Unit Testing & Mocking, pre-loading data, stripe, firebase. Fixed bugs and added some extra features.",
    github:
      "https://github.com/Compil3-sudo/ZTM-React/tree/06-crown-clothing-redux-saga-typescript",
    live: "https://crown-clothing-compil3.netlify.app/",
    details: [
      "Typescript",
      "Redux Saga",
      "Loading Data in advance with React Lazy and Suspense",
      "Stripe",
      "Firebase",
      "Jest - Testing & Mocking",
      "Fetching Data from Firebase",
      "User Authetication with Email/Google",
      "Other Branches: GraphQL, Redux Toolkit & GatsbyJS",
    ],
    tags: ["TS", "React", "Firebase", "Jest", "GraphQL"],
  },
  {
    imgSource: ReactMealsImage,
    title: "React Meals",
    text: "Food App from the Academind React Course. Learned advanced Redux Toolkit, https requests to MongoDB and rendering modal content with a backdrop overlay and react portals.",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/17-practice-food-order-http-forms",
    live: "https://academind-react-meals.netlify.app/",
    details: [
      "HTTP Requests",
      "Modal Content",
      "React Portals and Refs",
      "Sending Data to Backend",
      "Redux Toolkit",
    ],
    tags: ["Academind", "React", "Redux Toolkit"],
  },
  {
    imgSource: ReactMpEventsImage,
    title: "React Multi-Page Events",
    text: "React-Multi-Page Application. Advanced react-router-dom using loader and action functions to fetch and send data from/to a dummy backend.",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/22-authentication-updated",
    live: "https://react-mp-events-auth.onrender.com/",
    details: [
      "Multi-Page Application - Advanced react-router-dom",
      "Dynamic Routes",
      "Data Fetching with a loader",
      "Pre-rendering data",
      "action() Functions",
      "User Authentication - Token",
    ],
    tags: ["react-router-dom", "loaders", "actions", "dynamic routing"],
  },
  {
    imgSource: ReactMeetupsImage,
    title: "React Meetups",
    text: "NextJS Application to see and create Meetings. Fetching and sending data to MongoDB.",
    github: "https://github.com/Compil3-sudo/Meetups-NextJs-Project",
    live: "https://meetups-nextjs-academind-project.vercel.app/",
    details: [
      "NextJS",
      "NextJS - navigation & hooks",
      "Server Side Rendering",
      "Dynamic Pages with Parameters",
      "Dynamic Routing - NextJS",
      "Fallback for dynamic routing",
      "MongoDB - Collections fetching and sending data",
    ],
    tags: ["NextJS", "dynamic routing", "MongoDB"],
  },
  {
    imgSource: ReactPosterImage,
    title: "React Poster",
    text: "React Overall Concepts - Todo App. Fetching and sending data from/to a dummy backend. Using react-router-dom loader and action functions. Build with ViteJS.",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/zz-reactjs-summary-updated",
    live: "https://reactposter.onrender.com/",
    details: [
      "ViteJS",
      "React-router-dom - Loaders and Actions",
      "using data from loaders",
      "creating new posts with action functions - sending that data to a dummy backend",
      "fetching data with loaders from a dummy backend",
    ],
    tags: ["React", "ViteJS", "dummy backend"],
  },
  {
    imgSource: ReduxCartImage,
    title: "Redux Cart",
    text: "Advanced Redux Toolkit with Firebase DB. Fetching and sending data asyncronously. User UI notifications.",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/19-advanced-redux",
    live: "https://reduxcart-firebase-db.netlify.app/",
    details: ["Redux Toolkit", "FirebaseDB", "UI Notifications"],
    tags: ["Redux Toolkit", "Firebase"],
  },
  {
    imgSource: ReactAnimationsImage,
    title: "React Animations",
    text: "Animations, custom backdrop overlay with modal content. React-Transition-Group for custom animations. List of items with CSSTransition",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/24-animations",
    live: "https://compil3-react-animations.netlify.app/",
    details: [
      "react-transition-group",
      "CSSTransition",
      "Animations - on specific mounting / unmounting react component",
    ],
    tags: ["react-transition-group", "animations", "modal"],
  },
];

export default projectsList;
