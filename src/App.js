import React from "react";
import { HashRouter, Route } from "react-router-dom";
import './app.css';
import Home from "./routes/home";
import About from "./routes/about";
import Navigation from "./components/navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;