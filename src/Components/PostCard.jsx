import React from "react";

const PostCard = ({ PostInfo }) => {
  return (
    <div className="sm-overflow-auto d-flex flex-column align-items-center overflow-auto">
      {PostInfo.map((map) => (
        <div className="card my-3 ">
          {map.PostImage && (
            <img src={map.PostImage} className="card-img-top" alt="..." />
          )}
          <div className="card-body">
            <p
              style={{ color: "#5C5C5C" }}
              className="card-text d-flex text-start"
            >
              {map.articleType}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="card-title d-flex fs-6 lg-fs-3 xl-fs-3 md-fs-3 text-start">
                {map.postTitle}
              </h4>
              <div className="">
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            {/* When Post Desc is available */}
            {map.postDesc && (
              <h6
                style={{ color: "#5C5C5C" }}
                className="card-text d-flex text-start"
              >
                {map.postDesc}
              </h6>
            )}
            {/* When Post Desc Is Not Available */}
            {!map.postDesc && (
              <>
                <div className="d-flex">
                  {map.postDescDate && (
                    <div className="pe-4 d-flex align-items-center">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" me-2"
                      >
                        <path
                          d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z"
                          fill="black"
                        />
                      </svg>
                      {map.postDescDate}
                    </div>
                  )}
                  {map.postDescJob && (
                    <div className="pe-4 d-flex align-items-center">
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        className=" me-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z"
                          fill="black"
                        />
                      </svg>

                      {map.postDescJob}
                    </div>
                  )}
                  <div className="ps-4 d-flex align-items-center">
                    <svg
                      width="12"
                      height="18"
                      viewBox="0 0 12 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" me-2"
                    >
                      <path
                        d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z"
                        fill="black"
                      />
                      <path
                        d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z"
                        fill="black"
                      />
                    </svg>
                    {map.Location}
                  </div>
                </div>
                <div>
                  <button
                    className="fullw mt-2 py-2"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "transparent",
                      borderColor: "#A9AEB8",
                    }}
                  >
                    <span
                      style={{
                        color: `${map.postButtonColor}`,
                      }}
                    >
                      {map.postButton}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="d-flex px-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center ">
              <img src={map.PostPfp} className="rounded-circle p-3" alt="pfp" />
              <div>
                <strong>{map.userName}</strong>
                <div className="px-4 d-flex d-lg-none d-md-none d-xl-none justify-content-center align-items-center ">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
                      fill="#525252"
                    />
                  </svg>
                  {map.Views} Views
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="px-4 d-none d-lg-flex d-md-flex d-xl-flex d-flex justify-content-center align-items-center ">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
                    fill="#525252"
                  />
                </svg>
                {map.Views} Views
              </div>
              <div
                className="px-3 d-flex py-2 rounded d-flex align-items-center "
                style={{ backgroundColor: "#EDEEF0", cursor: "pointer" }}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
                    fill="#2D2D2D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
