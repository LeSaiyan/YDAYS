import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Professional from "./pages/Professional/Professional";
import Contact from "./pages/Contact/Contact";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/professional" component={Professional} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
      </div>
    );
  }
}

export default withRouter(Routes);
