import React from "react";
import NavBar from "./general/NavBar";
import Header from "./pages/Header";
import Books from "./pages/catalog/Books";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDetails from "./pages/catalog/BookDetails";
import BookMark from "./general/BookMark";
import Notification from "./general/Notification";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Books />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/bookmark">
            <BookMark />
          </Route>{" "}
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/book/:id">
            <BookDetails />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
