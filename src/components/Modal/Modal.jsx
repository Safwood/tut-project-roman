import React from "react";

import "./Modal.css";

const Modal = ({ isOpen, children }) => {
  return (
    <div className="modal" style={{ display: `${isOpen ? "flex" : "none"}` }}>
      <div className="modal__button-wrapper">
        <button className="modal__button">X</button>
      </div>
      {children}
    </div>
  );
};

export { Modal };
