import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { Alerts } from "./components/layout/Alerts";
import { PrivateRoute } from "./components/routing/PrivateRoute";

import { ContactState } from "./context/contact/ContactState";
import { AuthState } from "./context/auth/AuthState";
import { AlertState } from "./context/alert/AlertState";
import { setAuthToken } from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const history = createBrowserHistory();
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router history={history}>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route exact path="/" element={<PrivateRoute />}>
                    <Route exact path="/" element={<Home />} />
                  </Route>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
