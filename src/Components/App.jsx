import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateArea from "./Components/CreateArea";
import NotesPage from "./Components/NotesPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={CreateArea} />
          <Route path="/notes" component={NotesPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
