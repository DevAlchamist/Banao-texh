import React from "react";
import PostCard from "./PostCard";
import pfp1 from "../assets/Rectangle 3 (1).png";
import pfp2 from "../assets/Rectangle 3 (2).png";
import pfp3 from "../assets/Rectangle 3 (3).png";
import pfp4 from "../assets/Rectangle 3 (4).png";

import PostImage1 from "../assets/Rectangle 5.png";
import PostImage2 from "../assets/Rectangle 5 (1).png";
import PostImage3 from "../assets/Rectangle 5 (2).png";

const PostSection = () => {
  const PostInfo = [
    {
      id: "1",
      PostImage: PostImage1,
      articleType: "✍️ Article",
      postTitle: "What if famous brands had regular fonts? Meet RegulaBrands!",
      postDesc:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to retire",
      userName: "Sarthak Kamra",
      Views: "1.4k",
      PostPfp: pfp1,
    },
    {
      id: "2",
      PostImage: PostImage2,
      articleType: "🔬 Education",
      postTitle:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      postDesc:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to retire",
      userName: "Sarah West",
      Views: "1.4k",
      PostPfp: pfp2,
    },
    {
      id: "3",
      articleType: "📝 Meetup",
      postTitle: "Finance & Investment Elite Social Mixer @Lujiazui",
      PostImage: PostImage3,
      Location: "Ahmedabad, India",
      postDescDate: "Fri,12 Oct,2018",
      postButton: "Visit Website",
      postButtonColor: "#E56135",
      userName: "Ronal Jones",
      Views: "1.4k",
      PostPfp: pfp3,
    },
    {
      id: "4",
      articleType: "💼 Job",
      postTitle: "Software Development",
      Location: "Noida, India",
      postDescJob: "Innovaccer Analytics Private Ltd.",
      postButton: "Apply on TimesJobs",
      postButtonColor: "#02B875",
      userName: "Joseph Gray",
      Views: "1.4k",
      PostPfp: pfp4,
    },
  ];
  return (
    <div>
      <div
        style={{ marginTop: "25px" }}
        className=" d-flex justify-content-around align-items-center fullw"
      >
        <div
          style={{ width: "1040px" }}
          className=" border-bottom  d-flex"
        >
          <div
            className="d-flex align-items-center fullw"
          >
            <PostCard PostInfo={PostInfo} />
          </div>
          <div className="d-lg-flex d-xl-flex d-md-flex d-none pb-3 justify-content-center">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  className="position-absolute"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.5C3.0975 0.5 0.749999 2.8475 0.749999 5.75C0.749999 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM2.25 5.75C2.25 3.68 3.93 2 6 2C8.07 2 9.75 3.68 9.75 5.75C9.75 7.91 7.59 11.1425 6 13.16C4.44 11.1575 2.25 7.8875 2.25 5.75Z"
                    fill="black"
                  />
                  <path
                    d="M6 7.625C7.03553 7.625 7.875 6.78553 7.875 5.75C7.875 4.71447 7.03553 3.875 6 3.875C4.96447 3.875 4.125 4.71447 4.125 5.75C4.125 6.78553 4.96447 7.625 6 7.625Z"
                    fill="black"
                  />
                </svg>
                <input
                  type="text"
                  style={{ border: "none", width: "243px" }}
                  className=" border-bottom pb-1 ps-4"
                  placeholder="Enter Your Location"
                />
                {/* Location Edit */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "-15px" }}
                >
                  <path
                    d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                    fill="black"
                  />
                </svg>
                {/* Location Selected Svg */}
                {/* <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "-15px" }}
                >
                  <path
                    d="M11.8333 1.34169L10.6583 0.166687L6.00001 4.82502L1.34167 0.166687L0.166672 1.34169L4.82501 6.00002L0.166672 10.6584L1.34167 11.8334L6.00001 7.17502L10.6583 11.8334L11.8333 10.6584L7.17501 6.00002L11.8333 1.34169Z"
                    fill="black"
                  />
                </svg> */}
              </div>
              {/* If User Not Logged In */}
              <div style={{ width: "243px" }}>
                Your location will help us serve better and extend a
                personalised experience.
              </div>
              {/* If User Logged In */}
              {/* <div
                style={{ width: "240px", height: "252px" }}
                className=" mt-5"
              >
                <div>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
                      fill="black"
                    />
                  </svg>
                  Recommended Groups
                </div>
                <div>
                  <div className="d-flex px-3 justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={pfp}
                        style={{ width: "36px", height: "36px" }}
                        className="rounded-circle mt-2 me-2 "
                        alt="pfp"
                      />
                      Sarthak
                    </div>
                    <div className="d-flex">
                      <button
                        className="px-2"
                        style={{ border: "none", borderRadius: "21px" }}
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ color: "#2F6CE5" }}
                className="d-flex justify-content-end align-items-center"
              >
                See More...
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
