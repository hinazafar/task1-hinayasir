import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate("/sign-in");
  };
  return (
    <nav className="py-2 bg-body-tertiary border-bottom">
      <div className="container flex-row-reverse d-flex">
        <ul className="nav">
          {currentUser === null ? (
            <>
              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="nav-link link-body-emphasis px-2"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-link link-body-emphasis px-2"
                >
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle nav-link link-body-emphasis px-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaCircleUser size="25px" />
                  <span style={{ padding: "0px 5px 0px 10px" }}>
                    {currentUser.name}
                  </span>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => handleSignOut(e)}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
