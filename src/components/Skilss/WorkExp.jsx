import { dataWorkExp } from "../../utils/dataSkilss";

function WorkExp() {
  return (
    <div className="education work-exp">
      <h3 className="work-exp-title">Work & Experience</h3>
      <div className="skills-info">
        {dataWorkExp.map((item, index) => {
          return (
            <div className="experience-card" key={index}>
              <div className="upper">
                <h3>{item.title}</h3>
                <h5>{item.subtitle}</h5>
                <span>{item.year}</span>
              </div>
              <div className="hr"></div>
              <h4 className="label">{item.label}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExp;
