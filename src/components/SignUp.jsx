import { useRef, useState } from "react";
import OTPSignUp from "./OTPSignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const signup_res = {
    name: "",
    email: "",
    token: "",
    refreshToken: "",
    otp_value: "",
  };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState();
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password validation regex (example: at least 8 characters, one letter, and one number)
  const passwordRegex =
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(passwordRegex.test(value));
    setIsPasswordMatch(value === rePassword);
  };
  // Handle re-enter password input change
  const handleRePasswordChange = (e) => {
    const value = e.target.value;
    setRePassword(value);
    setIsPasswordMatch(value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordMatch && isPasswordValid) {
      console.log(name, email, password);
      // Server Request
      try {
        const res = await fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });

        const data = await res.json();
        console.log("Received SignUp data", data.user);
        if (res.status === 401) {
          setError(data.message);
          return;
        } else if (res.status === 200) {
          signup_res.name = data.user.name;
          signup_res.email = data.user.email;
          signup_res.token = "test_token";
          signup_res.refreshToken = "refreshToken";
          signup_res.isOtpSent = true;
          signup_res.otp_value = data.user.otp;
          navigate("/otp-signup", { state: signup_res });
        } else {
          setError(data.message);
          return;
        }
      } catch (error) {
        setError("Network Problem, please try again!");
        return;
      }
    }
  };
  return (
    <form
      method="POST"
      className="signup container-div"
      onSubmit={handleSubmit}
    >
      <h4>Sign up</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <div style={{ color: isEmailValid ? "green" : "red" }}>
          {isEmailValid ? "Valid Email" : "Invalid Email"}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          required
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={password}
          onChange={handlePasswordChange}
          minLength={8}
        />
        <div style={{ color: isPasswordValid ? "green" : "red" }}>
          {isPasswordValid ? "Valid Password" : "Invalid Password"}
        </div>
        <div id="passwordHelpBlock" className="form-text">
          password must contain at least 08 characters, including at least 01
          number, both lower and uppercase letters and at least 01 special
          character.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword5" className="form-label">
          Re-Enter Password
        </label>
        <input
          type="password"
          id="inputPassword6"
          required
          minLength={8}
          onChange={handleRePasswordChange}
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={rePassword}
        />
        <div style={{ color: isPasswordMatch ? "green" : "red" }}>
          {isPasswordMatch ? "Passwords Match" : "Passwords Do Not Match"}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign-Up
      </button>
      <p className="text-danger">{error}</p>
    </form>
  );
};
export default SignUp;
