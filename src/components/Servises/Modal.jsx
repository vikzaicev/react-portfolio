import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Modal({ item, isActive, onClose }) {
  return (
    <div className={isActive ? "service-modal active" : "service-modal"}>
      <div className="service-modal-body">
        <FaXmark className="modal-close-btn" onClick={onClose} />
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
        <p>{item.text}</p>
        <h4>{item.titleH4}</h4>
        <ul>
          {item.link.map((i, index) => {
            return (
              <li key={index}>
                <FaCheckCircle />
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
