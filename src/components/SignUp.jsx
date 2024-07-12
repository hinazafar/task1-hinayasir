import { useRef, useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const name = useRef();
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
      console.log(name.current.value, email, password);
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
          ref={name}
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
          password must contain at least eight characters, including at least
          one number, both lower and uppercase letters and at least one special
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
