import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div id="modal">
      <div>
        <button
          
          onClick={onClose}
        >
          ✖
        </button>
        <div >{children}</div>
      </div>
    </div>
  );
};

export default Modal;
