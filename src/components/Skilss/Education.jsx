import React from "react";
import { dataEducation } from "../../utils/dataSkilss";

function Education() {
  return (
    <div className="education">
      <h4 className="label">Education</h4>
      <ul className="education-list">
        {dataEducation.map((item, index) => {
          return (
            <li className="item" key={index}>
              <span className="year">{item.year}1</span>
              <p>{item.discription}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Education;
