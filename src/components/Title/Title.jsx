import React from "react";

function Title({ title }) {
  return (
    <>
      <h2 className="inner-title">{title}</h2>
      <h3 className="inner-second-title">{title}</h3>
    </>
  );
}

export default Title;
