// import React from "react";
import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, content, actions }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className={css.btnModal} onClick={onClose}>
            Закрити
          </button>
        </div>
        <div className="modal-content">{content}</div>
        <div className="modal-actions">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
