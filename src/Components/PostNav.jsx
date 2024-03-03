import React from "react";
import logo from "../assets/baseline-group_add-24px.svg";

const PostNav = () => {
  return (
    <>
      <div className="d-flex d-lg-none d-xl-none d-md-none align-items-center justify-content-between px-4 my-2">
        <strong>Posts(368)</strong>
        <div className="p-2" style={{backgroundColor:"#F1F3F5"}}>Filter:All</div>
      </div>
      <div
        style={{ marginTop: "50px" }}
        className="d-none d-lg-flex d-xl-flex d-md-flex justify-content-around align-items-center fullw"
      >
        <div
          style={{ width: "1040px" }}
          className=" border-bottom  d-flex justify-content-between align-items-center"
        >
          <div className="d-flex">
            <div className="px-3 pb-3 border-bottom border-3 border-dark">
              All Posts(32)
            </div>
            <div className="px-3 pb-3 ">Article</div>
            <div className="px-3 pb-3 ">Event</div>
            <div className="px-3 pb-3 ">Education</div>
            <div className="px-3 pb-3 ">Job</div>
          </div>
          <div className="d-flex pb-3 align-items-center">
            <div>
              <div className="dropdown">
                <button
                  style={{ backgroundColor: "#EDEEF0" }}
                  className="btn dropdown-toggle me-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Write a post
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                type="button"
                style={{ backgroundColor: "#2F6CE5" }}
                className="btn text-light"
              >
                <img
                  height={22}
                  width={22}
                  className="me-2"
                  src={logo}
                  alt="Not"
                />
                Primary
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostNav;
