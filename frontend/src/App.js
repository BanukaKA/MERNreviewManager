import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="App-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/restaurants" className="navbar-brand">
            RestReviews
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/restaurants"} className="nav-link">
                  Restaurants
                </Link>
              </li>
              <li className="nav-item">
                {user ? (
                  <a onClick={logout} className="nav-link" style={{ cursor: "pointer" }}>
                    Logout {user.name}
                  </a>
                ) : (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;