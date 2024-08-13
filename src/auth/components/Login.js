import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useState } from "react";
import { loginService } from "../services/auth.service";
import { loginAction } from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";
const initalState = { email: "", password: "" };
const Login = ({ isAuthenticated, loginAction }) => {
  const [formData, setformData] = useState(initalState);
  const { email, password } = formData;
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello login");
    console.log(formData);
    loginAction(formData, navigate);
    // loginService(formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  return (
    <>
      <section class="container">
        <div class="alert alert-danger">Invalid credentials</div>
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register">Sign Up</a>
        </p>
      </section>
    </>
  );
};
 
Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerAction: PropTypes.func.isRequired,
};
 
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});
 
const mapDispatchToProps = { loginAction };
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
 
 