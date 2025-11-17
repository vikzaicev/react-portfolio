import { Link } from "react-scroll";

function FooterCrup({ title, dataFooter, isSocial }) {
  return (
    <div className={isSocial ? "follow-group" : "info-group"}>
      <h3>{title}</h3>
      <ul>
        {dataFooter.map((item) => {
          return (
            <li key={item.id}>
              {isSocial ? (
                <a href={item.href} target="_blank">
                  {" "}
                  <item.icon />{" "}
                </a>
              ) : (
                <Link to={item.href}>{item.href}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterCrup;
