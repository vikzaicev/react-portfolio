import React from "react";
import { dataSkilsInfo } from "../../utils/dataSkilss";

function SkilsInfo() {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {dataSkilsInfo.map((item, index) => {
          return (
            <li className="bar" key={index}>
              <div className="info">
                <span>{item.title}</span>
                <span>{item.value}</span>
              </div>
              <div className="line html"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkilsInfo;
