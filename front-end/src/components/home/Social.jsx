import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/gabe.vllrl/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://leetcode.com/gpv/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/GPVcode"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
