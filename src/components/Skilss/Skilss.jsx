import Title from "../Title/Title";
import Awards from "./Awards";
import Education from "./Education";
import SkilsInfo from "./SkilsInfo";
import WorkExp from "./WorkExp";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <Title title="Skilss" />
        <div className="inner-content">
          <div className="skills-description">
            <h3>Education & Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </div>
          <div className="skills-info education-all">
            <Education />
            <SkilsInfo />
            <Awards />
          </div>
          <WorkExp />
        </div>
      </div>
    </section>
  );
};
