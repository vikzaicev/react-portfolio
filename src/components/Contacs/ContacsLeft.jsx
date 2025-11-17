import React from "react";
import { dataContacts } from "../../utils/dataContacts";

function ContacsLeft() {
  return (
    <div className="contact-left">
      <h2>Let's discuss your project</h2>
      <ul className="contact-list">
        {dataContacts.map((item) => {
          return (
            <li key={item.id}>
              <h3>
                <item.img /> {item.name}
              </h3>
              <span>
                <a href="tel:001237779999">{item.value}</a>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContacsLeft;
