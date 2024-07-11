import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
  };
  return (
    <nav class="py-2 bg-body-tertiary border-bottom">
      <div class="container flex-row-reverse d-flex">
        <ul class="nav">
          {currentUser === null ? (
            <>
              <li class="nav-item">
                <Link to="/sign-in" class="nav-link link-body-emphasis px-2">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/sign-up" class="nav-link link-body-emphasis px-2">
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <li class="nav-item">
              <div class="flex-shrink-0 dropdown">
                <a
                  href="#"
                  class="d-block link-body-emphasis text-decoration-none dropdown-toggle nav-link link-body-emphasis px-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaCircleUser size="25px" />
                  <span style={{ padding: "0px 5px 0px 10px" }}>
                    {currentUser.username}
                  </span>
                </a>
                <ul class="dropdown-menu text-small shadow">
                  <li>
                    <Link class="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={handleSignOut}>
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
