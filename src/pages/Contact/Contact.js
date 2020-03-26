import React, { Component } from "react";
import "./contact.scss";
import Mail from "../../assets/images/mail.png";
import Git from "../../assets/images/github-image.png";
import linkedin from "../../assets/images/linkedin.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div>
          <img src={Mail} />
          <p>
            <a href="mailto:bastpinpro@gmail.com" target="_blank">
              bastpinpro@gmail.com
            </a>
          </p>
        </div>

        <div>
          <img src={linkedin} />
          <p>
            <a
              href="https://www.linkedin.com/in/bastien-pinard/"
              target="_blank"
            >
              Mon Linkedin
            </a>
          </p>
        </div>

        <div>
          <img src={Git} />
          <p>
            <a
              href="https://github.com/LeSaiyan?tab=repositories"
              target="_blank"
            >
              Mon Github
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
