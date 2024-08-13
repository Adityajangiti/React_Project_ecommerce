import React, { useState } from "react";
import { registerService } from "../services/auth.service";
const initalState = {
  name: "",
  password: "",
  email: "",
  password2: "",
};
const Register = () => {
  const [formData, setformData] = useState(initalState);
  const [error, setError] = useState({});
  const { password, email, password2, name } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from register");
    console.log(formData);
    registerService(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        let errDetails = {};
        err.response.data.errors.forEach((e) => {
          console.log(e.param + " " + e.msg);
          errDetails[e.param] = e.msg;
        });
        setError({ ...errDetails });
      });
  };
 
  const onChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
 
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              name="email"
              onChange={onChange}
            />
            <div>{error.email}</div>
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
          </div>
          <div>{error.password}</div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
 
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};
 
export default Register;
 
 