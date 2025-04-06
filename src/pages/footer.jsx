import { memo } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

let Footer = () => {
  return (
    <>
    <br /><br /><br /><br />
    <footer className="text-99 text-center  py-3  mt-1">
      <div className="container">
        {/* Social Icons */}
        <div className="mb-2">
          {["facebook", "twitter", "linkedin", "instagram"].map((platform) => (
            <a
              key={platform}
              href="javascript:void(0)"
              className="text-99 mx-2 fs-5"
            >
              <i className={`fa-brands fa-${platform}`}></i>
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="fs-6 fw-bold m-0">
          COPYRIGHT © 2025 Mohamed Ashraf. All Rights Reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default memo(Footer);
