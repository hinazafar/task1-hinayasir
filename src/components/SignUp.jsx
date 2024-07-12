import { useRef, useState } from "react";
import OTPSignUp from "./OTPSignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const temp_res = {
    username: "hina",
    email: "hina.nida@gmail.com",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzIwMjAzNzQwfQ.YsStJdmdUjKOUlbXdqze0nEScCM_RJw9rnuy0RdSn88",
    isOtpSent: true,
    otp_value: "123456",
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
  //Handle form Submit and Server Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordMatch && isPasswordValid) {
      console.log(name, email, password);
      // Send server request here ????????????????
    }
    navigate("/otp-signup", { state: { temp_res } });
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
