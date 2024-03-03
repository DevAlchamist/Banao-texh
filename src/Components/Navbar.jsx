import React, { useState } from "react";
import logo from "../assets/whole.svg";
import Modal from "./Modal";
import Facebook from "../assets/f_logo_RGB-Blue_1024.png";
import SignupImage from "../assets/Group 3.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} handleClose={handleClose}>
        <div
          className="d-flex flex-column"
          style={{ width: "750px", height: "513px" }}
        >
          <div
            style={{ color: "#008A45", backgroundColor: "#EFFFF4" }}
            className="fs-6 px-4 py-3"
          >
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="d-flex ms-5 mt-4 align-items-center justify-content-between">
            <div
              style={{ width: "320px", height: "403px" }}
              className="d-flex flex-column ps-2 justify-content-start"
            >
              <h3 className="d-flex justify-content-start">
                {(login === true && "Login") || "Create Account"}
              </h3>
              <div style={{ height: "240px" }}>
                {!login && (
                  <div class="input-group">
                    <input
                      style={{ borderRadius: "0px" }}
                      type="text"
                      aria-label="First name"
                      placeholder="FirstName"
                      class="form-control"
                    />
                    <input
                      placeholder="LastName"
                      type="text"
                      aria-label="Last name"
                      style={{ borderRadius: "0px" }}
                      class="form-control"
                    />
                  </div>
                )}
                <input
                  placeholder="Email"
                  style={{ borderRadius: "0px" }}
                  type="email"
                  aria-label="Email"
                  class="form-control"
                />
                <input
                  style={{ borderRadius: "0px" }}
                  placeholder="Password"
                  type="password"
                  aria-label="password"
                  class="form-control"
                />
                <input
                  placeholder="Confirm Password"
                  style={{ borderRadius: "0px" }}
                  type="password"
                  aria-label="Confirm Password"
                  class="form-control"
                />
                <button
                  type="button"
                  style={{ borderRadius: "20px" }}
                  className="fullw mt-3 btn btn-primary"
                >
                  {(login === true && "Login") || "Create Account"}
                </button>
              </div>
              <div className="py-2 border">
                <img src={Facebook} className="me-2" alt="Facebook" />
                {(login === true && "Login With FaceBook") ||
                  "Sign Up With FaceBook"}
              </div>
              <div className="py-2 my-2 border fullw">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_2217)">
                    <path
                      d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z"
                      fill="#28B446"
                    />
                    <path
                      d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z"
                      fill="#F14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2217">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {(login === true && "Login With Google") ||
                  "Sign Up With Google"}
              </div>
            </div>
            <div className="">
              <div className="d-flex flex-column justify-content-center align-items-center pe-5">
                <span className="fs-6">
                  Already Have an Account ?
                  <span onClick={handleLogin} className="fs-6 text-primary">
                    Login
                  </span>
                </span>
                <img src={SignupImage} alt="LoginImage" />
                <div style={{ width: "317px" }}>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div
        style={{ height: "72px", backgroundColor: "#ffffff" }}
        className=" border d-none d-md-flex d-lg-flex d-xl-flex sticky-top p-2 justify-content-around align-items-center fullw"
      >
        <div className="d-flex justify-content-start ps-5 align-items-center fullw">
          <img height={24} width={162.57} src={logo} alt="Not" />
        </div>
        <div className="d-flex justify-content-center align-items-center fullw">
          <div
            className="input-group flex-nowrap d.flex align-items-center"
            style={{
              backgroundColor: "#F2F2F2",
              borderRadius: "21px",
              width: "360px",
              height: "42px",
            }}
          >
            <span className="ps-3">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
                  fill="#7A7A7A"
                />
              </svg>
            </span>
            <input
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: "21px",
                border: "none",
                focus: "none",
              }}
              type="text"
              className="form-control"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end pe-5 align-items-center fullw">
          <div className="" style={{ backgroundColor: "none" }}>
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Create account.
              <span className="text-primary">It’s free!</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  type="button"
                  onClick={handleShow}
                  className="dropdown-item"
                >
                  Create Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="d-flex d-lg-none d-md-none justify-content-end align-items-center"
        style={{ height: "24px" }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 my-2"
        >
          <rect y="0.000244141" width="10" height="10" fill="#868E96" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="mx-2 my-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 10.0002C7.76142 10.0002 10 7.76167 10 5.00024C10 2.23882 7.76142 0.000244141 5 0.000244141C2.23858 0.000244141 0 2.23882 0 5.00024C0 7.76167 2.23858 10.0002 5 10.0002Z"
            fill="#868E96"
          />
        </svg>
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 my-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.000244141H12L6 10.0002L0 0.000244141Z"
            fill="#868E96"
          />
        </svg>
      </div>
    </>
  );
};

export default Navbar;
