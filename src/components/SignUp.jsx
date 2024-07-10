import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const handleSubmit = () => {
    e.preventDefault();
    console.log(name, email, password, password2);
  };
  return (
    <form method="POST" className="signup container-div" action={handleSubmit}>
      <h4>Sign up</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name..."
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain atleast one
          uppercase and one lowercase letters, numbers, special characters
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword5" className="form-label">
          Re-Enter Password
        </label>
        <input
          type="password"
          id="inputPassword6"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign-Up
      </button>
    </form>
  );
};
export default SignUp;
