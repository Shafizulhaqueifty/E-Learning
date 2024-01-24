import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Dictionary from "./pages/Dictionary"; // Adjust the import statement
import Home from "./pages/Home";
import Word from "./pages/Word";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/word" exact component={Word} />
          <Route path="/dictionary" exact component={Dictionary} /> {/* Update the path */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
