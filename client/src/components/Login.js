import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  isFetching: false
}


const Login = props => {
  const [login, setLogin] = useState(initialState);

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLogin({ ...login, isFetching: true });
    axiosWithAuth()
      .post("/api/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        props.history.push("/bubble");
      })
      .catch(err => {
        console.log(err, "Login Error")
      });
  };

  return(
    <div>
      <h1>LOGIN HERE</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="username"
        placeholder="username"
        value={login.username}
        onChange={handleChange}
        />
        <br />
        <input
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleChange}
        />
        <br />
        <button>Log In</button>
      </form>
    </div>
  )

 
};

export default Login;
