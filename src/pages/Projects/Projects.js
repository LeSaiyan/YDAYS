import React, { Component } from "react";
import "./projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="row">
          <div className="project">
            <label>Bar de recherche </label>
            <p>
              Ceci est un projet réalisé pour une entreprise suite à une
              candidature de stage. Le projet consistait à reproduire une bar de
              recherche pour un trajet en train.
            </p>
            <p>
              <a href="https://search-bar-test.herokuapp.com/" target="_blank">
                Lien
              </a>
            </p>

            <p>
              <a
                href="https://github.com/LeSaiyan/exo-search-bar"
                target="_blank"
              >
                Lien du repo git
              </a>
            </p>
          </div>

          <div className="project">
            <label>Projet cours OpenClassroom </label>
            <p>
              Ceci et le projet final une fois le cours d'OpenClassroom réalisé.
              Cet un jeu ou il faut trouver des pairs de carte avec les mêmes
              motifs
            </p>
            <p>
              <a href="#" target="_blank">
                Lien
              </a>
            </p>

            <p>
              <a href="https://github.com/LeSaiyan/pair-game" target="_blank">
                Lien du repo git
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="project">
            <label>Application météo </label>
            <p>
              Ce projet est un application qui donne la météo de la ville
              choisie.
            </p>
            <p>
              <a href="#" target="_blank">
                Lien
              </a>
            </p>

            <p>
              <a
                href="https://github.com/LeSaiyan/React-Weather-App"
                target="_blank"
              >
                Lien du repo git
              </a>
            </p>
          </div>

          <div className="project">
            <label>Application de gestion de projet </label>
            <p>
              Projet de groupe donnée par mon école, je travaille dessus en tant
              que développeur front. C'est une application de gestion de promet,
              on peut ya créer des projet ainsi qu'y définir des sprint et des
              tâches etc...
            </p>
            <p>Lien pas encore disponible</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
