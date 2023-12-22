import React from "react";
import leetcode from "../../assets/leetcode2.svg"

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
        <img src={leetcode} href="https://leetcode.com/gpv/" alt="leetcode logo" className="home__social-icon" />
        <i className="uil uil-leetcode"></i>
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
