import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form method="POST" className="signin container-div">
      <h4>Sign in</h4>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          
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
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign-In
      </button>
      <Link to="/forgot-password" class="card-link forgot-text">
        Forgot Password
      </Link>
    </form>
  );
};
export default SignIn;
