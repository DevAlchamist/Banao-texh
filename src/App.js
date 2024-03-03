import { useState } from "react";
import "./App.css";
import FrontImage from "./Components/FrontImage";
import Navbar from "./Components/Navbar";
import PostNav from "./Components/PostNav";
import PostSection from "./Components/PostSection";
import Facebook from "./assets/f_logo_RGB-Blue_1024.png";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="App">
      <div>
        <Navbar />
        <FrontImage />
        <PostNav />
        <PostSection />
      </div>
      <div
        className="position-fixed d-sm-none bottom-0 end-0"
        style={{ bottom: "0px", right: "0px" }}
      >
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_1_266)">
              <circle cx="31" cy="29" r="27" fill="url(#paint0_linear_1_266)" />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.6588 20C36.4088 20 36.1488 20.1 35.9588 20.29L34.1288 22.12L37.8788 25.87L39.7088 24.04C40.0988 23.65 40.0988 23.02 39.7088 22.63L37.3688 20.29C37.1688 20.09 36.9188 20 36.6588 20ZM33.0588 26.02L33.9788 26.94L24.9188 36H23.9988V35.08L33.0588 26.02ZM21.9988 34.25L33.0588 23.19L36.8088 26.94L25.7488 38H21.9988V34.25Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_dd_1_266"
                x="0"
                y="0"
                width="62"
                height="62"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_266"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_266"
                  result="effect2_dropShadow_1_266"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_266"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_266"
                x1="31"
                y1="2"
                x2="31"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF5C5C" />
                <stop offset="1" stop-color="#F0568A" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        <div
          style={{height:"auto"}}
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              {(login === true && "Login") || "Create Account"}
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <div className="d-flex flex-column ps-2 justify-content-start">
              <h3 className="d-flex justify-content-start"></h3>
              <div>
                {!login && (
                  <div className="input-group">
                    <input
                      style={{ borderRadius: "0px" }}
                      type="text"
                      aria-label="First name"
                      placeholder="FirstName"
                      className="form-control"
                    />
                    <input
                      placeholder="LastName"
                      type="text"
                      aria-label="Last name"
                      style={{ borderRadius: "0px" }}
                      className="form-control"
                    />
                  </div>
                )}
                <input
                  placeholder="Email"
                  style={{ borderRadius: "0px" }}
                  type="email"
                  aria-label="Email"
                  className="form-control"
                />
                <input
                  style={{ borderRadius: "0px" }}
                  placeholder="Password"
                  type="password"
                  aria-label="password"
                  className="form-control"
                />
                <input
                  placeholder="Confirm Password"
                  style={{ borderRadius: "0px" }}
                  type="password"
                  aria-label="Confirm Password"
                  className="form-control"
                />
                <button
                  type="button"
                  style={{ borderRadius: "20px" }}
                  className="fullw mt-3 btn btn-primary"
                  >
                  {(login === true && "Login") || "Create Account"}
                </button>
                <div className="my-2" onClick={handleLogin}>or,Sign In</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
