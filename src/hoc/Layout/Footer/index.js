import React from "react";
import "./footer.scss";
import insta from "../../../assets/images/instagram.png";
import git from "../../../assets/images/github-image.png";
import sound from "../../../assets/images/soundcloud.png";

const footer = props => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://www.instagram.com/lesviyvn/" target="_blank">
          <img className="logo" src={insta} />
        </a>
      </div>

      <div className="social">
        <a href="https://github.com/LeSaiyan?tab=repositories" target="_blank">
          <img className="logo" src={git} />
        </a>
      </div>

      <div className="social">
        <a href="https://soundcloud.com/lsd-27" target="_blank">
          <img className="logo" src={sound} />
        </a>
      </div>
    </div>
  );
};

export default footer;
