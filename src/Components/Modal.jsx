import React from "react";
import "./modal.css"; // Make sure to create this CSS file with appropriate styles

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className=" modal-main">
        <button
          className="position-absolute"
          style={{
            outline: "none",
            border: "0px",
            backgroundColor: "transparent",
            right: "0px",
          }}
          type="button"
          onClick={handleClose}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z"
              fill="black"
            />
          </svg>
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
