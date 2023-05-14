import React, { useState } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (  
  
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
            <div className="submit-form">
              <div>
                <div className="form-group">
                  <label htmlFor="user">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={user.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    required
                    value={user.id}
                    onChange={handleInputChange}
                    name="id"
                  />
                </div>
                <br></br>
                <div class="text-center">
                <button onClick={login} className="btn btn-primary btn-block">
                  Login
                </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;