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
  },
  {
    imgSource: CrownClothingImage,
    title: "Crown Clothing",
    text: "E-commerce App from the ZTM React Course.",
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
  },
  {
    imgSource: ReactMealsImage,
    title: "React Meals",
    text: "Food App from the Academind React Course.",
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
  },
  {
    imgSource: ReactMpEventsImage,
    title: "TODO: FIX ERROR 404 BUG",
    text: "React-Multi-Page -> TODO: FIX ERROR 404 BUG",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/22-authentication-updated",
    live: "https://react-mp-events-auth.onrender.com/",
    details: ["NextJS", ""],
  },
  {
    imgSource: ReactMeetupsImage,
    title: "React Meetups",
    text: "",
    github: "https://github.com/Compil3-sudo/Meetups-NextJs-Project",
    live: "https://meetups-nextjs-academind-project.vercel.app/",
    details: "",
  },
  {
    imgSource: ReactPosterImage,
    title: "React Poster",
    text: "",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/zz-reactjs-summary-updated",
    live: "https://reactposter.onrender.com/",
    details: "",
  },
  {
    imgSource: ReduxCartImage,
    title: "Redux Cart",
    text: "",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/19-advanced-redux",
    live: "https://reduxcart-firebase-db.netlify.app/",
    details: "",
  },
  {
    imgSource: ReactAnimationsImage,
    title: "React Animations",
    text: "",
    github:
      "https://github.com/Compil3-sudo/AcadeMind-react-complete-guide-code/tree/24-animations",
    live: "https://compil3-react-animations.netlify.app/",
    details: "",
  },
];

export default projectsList;
