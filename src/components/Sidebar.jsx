import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (currentUser === null) {
      navigate("/sign-in");
    } else {
      navigate("/add-product");
    }
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
      style={{ width: "20%" }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">RollOver Kids</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="nav-link" onClick={(e) => handleAddProduct(e)}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Add Product
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default Sidebar;
