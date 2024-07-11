import { useRef, useState } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { signInStart, signInError, signInSuccess } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email.current.value.split("@")[0],
          //username: email.current.value, //"emilys",
          password: password.current.value, //"emilyspass",
          expiresInMins: 60,
        }),
      });

      const data = await res.json();
      console.log("Received login data", data);
      if (data.message === "Invalid credentials") {
        dispatch(signInError(data));
        navigate("/sign-in");
        return;
      } else {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInError(error));
    }
  };

  return (
    <form
      method="POST"
      className="signin container-div"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h4>Sign in</h4>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          ref={email}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          ref={password}
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign-In
      </button>
      <Link to="/forgot-password" className="card-link forgot-text">
        Forgot Password
      </Link>
      <p className="login-error">
        {error ? error.message || "Something went wrong" : ""}
      </p>
    </form>
  );
};
export default SignIn;
