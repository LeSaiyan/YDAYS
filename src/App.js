import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./hoc/Layout/Footer";
import FadeIn from "react-fade-in";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
          <FadeIn>
            <Routes />
          </FadeIn>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
