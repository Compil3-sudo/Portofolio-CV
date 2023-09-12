import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.center}>
        <div className={classes.profileImage}>
          <img src="rares.png" alt="Rares Tincu" />
        </div>
        <div>
          <p>
            Hello! I&apos;m&nbsp;<strong>Rares</strong>, a Computer Science
            student from Augsburg, Germany.
          </p>
          <p>
            I moved to Germany in the 10th grade from Sibiu, Romania and
            enrolled at the Nördlingen Gymnasium. I didn&apos;t&nbsp;know any
            german, so I had to learn it as soon as possible in order to finish
            my Abitur (highschool graduation exam). I was very determined to
            learn german and finish my highschool with a good grade. With a lot
            of hard work and determination I&apos;ve&nbsp;managed to graduate
            with 2.4 (grades are from 1 to 6, where 1 is the best).
          </p>
          <p>
            After this I&apos;ve&nbsp;moved to Augsburg to study Computer
            Science at the University. I&apos;ve&nbsp;learned a lot about object
            oriented programming, the SOLID programming principles, java,
            python, machine learning and many other things. One of my favourite
            courses was about machine learning in the field of computer vision,
            where I&apos;ve&nbsp;coded different projects about object detection
            from pictures. I&apos;ve&nbsp; also worked with a team of fellow
            students on a Web Application based on ASP.NET Core MVC with C#.
            We&apos;ve&nbsp; created an appointment system for employees to
            reserve a charging slot for their electic car at their workplace.
            This application also enabled administrators to create simulations
            in order to determine what would be the best infrastucture for their
            parking lot to optimize the appointments. I&apos;ve&nbsp;finished my
            bachelors degree with the best grade <strong>1.0</strong> with a
            thesis about a large language model, which takes audio samples as
            input, generates a description and finally categorizes this
            description with zero-shot text classification, in order to
            determine whether the description matches the expected sound events.
          </p>
          <p>
            During the last year I&apos;ve&nbsp;been learning core concepts
            about Web Development on my own, such as React and Javascript. My
            main goal is to improve my programming knowledge and become a better
            programmer and get a job.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
