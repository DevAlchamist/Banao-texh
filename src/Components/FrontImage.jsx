import React from "react";
import frontImg from "../assets/Rectangle 2.png";
import frontImgRepo from "../assets/Rectangle 2 (1).png";

const FrontImage = () => {
  return (
    <div className="position-relative fullw">
      <div className="d-flex justify-content-center">
        <div className="" style={{ objectFit: "fill" }}>
          <img
            src={frontImg}
            alt="FrontImage"
            className="d-none d-lg-flex d-xl-flex d-md-flex"
          />
          <img
            src={frontImgRepo}
            alt="FrontImage"
            className="d-flex d-lg-none d-xl-none d-md-none"
          />
        </div>
        <div className="d-flex position-absolute md-pb-5 md-ps-5 lg-pb-5 lg-ps-5 pb-3 ps-2  flex-column fullw fullh ">
          <div className="d-flex d-lg-none d-xl-none d-md-none pt-2 px-3  justify-content-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="white"
              />
            </svg>
            <button style={{borderRadius:"8px",backgroundColor:"transparent",borderColor:"#ffffff",color:"#ffffff"}}>Join Group</button>
          </div>
          <div
            style={{ fontSize: "15px", height: "440px" }}
            className="d-none d-lg-flex d-xl-flex d-md-flex text-light flex-column ps-5 justify-content-end align-items-baseline fullh fullw d-flex"
          >
            <h1 className="d-none d-lg-flex d-xl-flex d-md-flex">
              Computer Engineering
            </h1>
            142,765 Computer Engineering Follow This
          </div>
          <div
            style={{ fontSize: "10px", height: "236px" }}
            className="d-flex d-lg-none d-xl-none d-md-none text-light flex-column justify-content-end align-items-baseline fullh fullw d-flex"
          >
            <h6 className=" ps-2">
              Computer Engineering
            </h6>
            142,765 Computer Engineering Follow This
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontImage;
