import React from "react";
import "./App.css";
import Routes from "./Routes";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./hoc/Layout/Footer";
import FadeIn from "react-fade-in";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <FadeIn>
          <Routes />
        </FadeIn>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
