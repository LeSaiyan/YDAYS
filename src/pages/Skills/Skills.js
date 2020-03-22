import React, { Component } from "react";
import "./skills.scss";

const langagesArray = [
  { value: "HTML", hrefValue: "#" },
  { value: "CSS", hrefValue: "#" },
  { value: "Pug", hrefValue: "#" },
  { value: "Sass", hrefValue: "#" },
  { value: "javascript", hrefValue: "#" },
  { value: "PHP", hrefValue: "#" },
  { value: "JQuery", hrefValue: "#" },
  { value: "Java", hrefValue: "#" },
  { value: "Swift", hrefValue: "#" },
  { value: "TypeScript", hrefValue: "#" },
  { value: "C#", hrefValue: "#" },
  { value: "Python", hrefValue: "#" },
  { value: "React-Native", hrefValue: "#" },
  { value: "React", hrefValue: "#" }
];

const frameworkArray = [
  { value: "AngularJS (4 & 8)", hrefValue: "#" },
  { value: "NodeJS", hrefValue: "#" }
];

const databaseArray = [
  { value: "MySQL", hrefValue: "#" },
  { value: "PostgreSQL", hrefValue: "#" },
  { value: "MongoDB", hrefValue: "#" },
  { value: "Oracle", hrefValue: "#" },
  { value: "NoSQL", hrefValue: "#" }
];

class Skills extends Component {
  render() {
    let langagesList = langagesArray.map((element, i) => {
      return (
        <li>
          <a href={element.hrefValue}>{element.value}</a>
        </li>
      );
    });

    let frameworkList = frameworkArray.map((element, i) => {
      return (
        <li>
          <a href={element.hrefValue}>{element.value}</a>
        </li>
      );
    });

    let databaseList = databaseArray.map((element, i) => {
      return (
        <li>
          <a href={element.hrefValue}>{element.value}</a>
        </li>
      );
    });

    return (
      <div className="skills">
        <div className="container">
          <label>Languages :</label>
          <div>
            <ul>{langagesList}</ul>
          </div>
        </div>

        <div className="container">
          <label>Frameworks :</label>
          <div>
            <ul>{frameworkList}</ul>
          </div>
        </div>

        <div className="container">
          <label>Base de données :</label>
          <div>
            <ul>{databaseList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
