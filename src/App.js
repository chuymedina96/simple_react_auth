import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import Landing from "./components/LandingPage";
import Navigation from "./components/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Landing}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/users" component={Users}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App