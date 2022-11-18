import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import TextField from "@mui/material/TextField";
import LoginStyle from "./login.module.css";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/v1/login", {
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

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:8000/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });
  const data = await response.json();
  console.log(data);
  return data.accessToken;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((user) => {
        if (!user.data) {
          setError(user.message);
        } else {
          localStorage.setItem("token", user.data.token);
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
          localStorage.setItem("token", token);
          setIsLoggedIn(token);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.wrapper}>
        <div className="inner-warpper text-center">
          <h2 className={LoginStyle.title}>Login to your account</h2>
          {!isLoggedIn ? (
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
                <span className={LoginStyle.errorMessage}>{error}</span>
              </div>

              <input
                type="submit"
                className="button-28"
                value={isLoading ? "Loading" : "Login"}
              />
              <p className={LoginStyle.p}>OR</p>
              <GoogleOAuthProvider
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    haldleSuccessGoogle(credentialResponse);
                  }}
                  onError={() => {
                    haldleFailureGoogle('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>

              <div className="signup-wrapper text-center">
                <Link to="/Register">
                  <a href="#register">
                    Don&apos;t have an accout?
                    <span className="text-primary"> Create One</span>
                  </a>
                </Link>
              </div>
            </form>
          ) : (
            <Navigate to="/" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
