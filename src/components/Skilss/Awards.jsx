import React from "react";
import { dataAwards } from "../../utils/dataSkilss";

function Awards() {
  return (
    <div className="education">
      <h4 className="label">Awards</h4>
      <ul className="education-list">
        {dataAwards.map((item, index) => {
          return (
            <li className="item" key={index}>
              <span className="year">{item.year}</span>
              <p>
                <span>{item.prof}</span> - {item.deskr}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Awards;
