import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";

const navigationItems = props => (
  <ul className="NavigationItems">
    <NavigationItem link="/">Accueil</NavigationItem>
    <NavigationItem link="/skills">Compétences</NavigationItem>
    <NavigationItem link="/projects">Projets</NavigationItem>
    <NavigationItem link="/professional">Expériences</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
