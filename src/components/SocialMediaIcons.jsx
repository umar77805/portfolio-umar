import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMediaIcons = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/umar-ahmed-747ba722b/"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
    <div>
      <a target="_blank" href="https://twitter.com/Umar_Ahmed_7780">
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
    <div>
      <a target="_blank" href="https://www.instagram.com/umar_7780">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  </div>
);

export default SocialMediaIcons;
