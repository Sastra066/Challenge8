import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "../Login/login.module.css";
import TextField from "@mui/material/TextField";

async function doRegister({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
}

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issetRegisterd, setRegisterd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doRegister({ email, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
        setRegisterd(true);
      });
  }

  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.wrapper}>
        <div className="inner-warpper text-center">
          <h2 className={LoginStyle.title}>Register</h2>
          {!issetRegisterd ? (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  name="userName"
                  className={LoginStyle.input}
                  id="userName"
                  label="Email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <TextField
                  name="userPassword"
                  className={LoginStyle.input}
                  id="userPassword"
                  label="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <br />
              </div>

              <input
                type="submit"
                className="button-28"
                value={isLoading ? "Loading" : "Register"}
              />
              <p className={LoginStyle.p}>OR</p>
              <button className="button-28" role="button">
                <Link
                  to="/Login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Back to Login
                </Link>
              </button>
            </form>
          ) : (
            <div>
              <h1>Register Successfully</h1>
              <Link to="/Login" className={LoginStyle.submit}>
                Go to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
