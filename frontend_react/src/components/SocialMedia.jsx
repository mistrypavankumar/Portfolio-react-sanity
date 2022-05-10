import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social" target="_blank">
      <a href="https://github.com/mg143pavankumar" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/mistry-pavan-kumar-5067b21b1/"
        target="_blank"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://twitter.com/pavan7143mg" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.facebook.com/pavan.mistry.143mg.77/" target="_blank">
        <div>
          <BsFacebook />
        </div>
      </a>
      <a href="https://www.instagram.com/mg143pavankumar/" target="_blank">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
