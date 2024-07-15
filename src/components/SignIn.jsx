import { useRef, useState } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { signInStart, signInError, signInSuccess } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const email = useRef();
  const password = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
      const data = await res.json();
      console.log("Received login data", data.message);
      if (res.status === 401) {
        dispatch(signInError(data.message));
        setErrorMsg(data.message);
        return;
      } else if (res.status === 200) {
        console.log("200 ok", data.name);
        dispatch(signInSuccess(data));
        
        navigate("/");
      } else {
        dispatch(signInError(data.message));
        setErrorMsg(data.message);
        return;
      }
    } catch (error) {
      dispatch(signInError("Failed to fetch"));
      setErrorMsg("Failed to fetch");
      return;
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
      <p className="text-danger">{errorMsg}</p>
    </form>
  );
};
export default SignIn;
