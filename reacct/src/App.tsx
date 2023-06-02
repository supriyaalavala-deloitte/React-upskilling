import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
