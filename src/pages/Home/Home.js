import React, { Component } from "react";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <p>Bienvenue</p>

          <p>
            Je m'appelle Bastien PINARD, je suis actuellement en mastère 1 à
            l'école YNOV Informatique basée à Nanterre.
          </p>

          <p>
            Dans le cadre des YDAYS je choisi d'apprndre à utiliser React, j'ai
            donc créer ce portefolio qui repertorit mes informations ainsi que
            les projets sur lesquels j'ai pu travailler durant cette période
            d'apprentissage de la bibliothèque
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
