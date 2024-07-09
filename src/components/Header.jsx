import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/sign-in");
  };
  const handleSignUpClick = () => {
    navigate("/sign-up");
  };
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="text-end login-panel">
          <button
            type="button"
            className="btn btn-outline-light me-2"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleSignUpClick}
          >
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
