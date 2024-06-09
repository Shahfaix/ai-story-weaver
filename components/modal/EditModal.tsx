import React from "react";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;