import React, { Component } from "react";
import "./professional.scss";
import DavLogo from "../../assets/images/logo-intro.png";

class Professional extends Component {
  render() {
    return (
      <div className="professional">
        <div>
          <p>
            Ma seule expérience professionelle fut un stage de 9 mois dans
            l'entreprise Davidson Consulting. Dans cette entreprise je
            travaillais sur un projet interne nommé AppSkills, cette plateforme
            devait permettre au manager d'envoyer des tests sous forme de QCM à
            des candidats pour en suite recevoir les résultats de ces tests. La
            plateforme etait développer sous Angular 8.
          </p>
          <img src={DavLogo} />
        </div>
      </div>
    );
  }
}

export default Professional;
