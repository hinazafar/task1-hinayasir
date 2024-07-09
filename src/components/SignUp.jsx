const SignUp = () => {
  return (
    <form method="POST" className="signup container-div">
      <h4>Sign up</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name..."
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
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign-Up
      </button>
    </form>
  );
};
export default SignUp;
