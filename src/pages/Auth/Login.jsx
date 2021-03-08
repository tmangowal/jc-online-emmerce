import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Log in now!</h1>
            <p className="lead">
              Log in now and start shopping in the most affordable ecommerce
              platform
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Log in</h5>
                <input placeholder="Full Name" type="text" className="form-control my-2" />
                <input placeholder="Username" type="text" className="form-control my-2" />
                <input placeholder="Email" type="text" className="form-control my-2" />
                <input placeholder="Password" type="password" className="form-control my-2" />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button className="btn btn-primary mt-2">
                    Login
                  </button>
                  <Link to="/register">Or register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
