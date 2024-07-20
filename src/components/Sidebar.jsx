import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";
import { changeTab } from "../store/tabSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const { selectedTab } = useSelector((state) => state.tab);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("Tab value", selectedTab);
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("Add Product Clicked");
    if (currentUser === null) {
      navigate("/sign-in");
    } else {
      console.log("in dispatch");
      dispatch(changeTab("add-product"));
      navigate("/add-product");
    }
  };
  const handleHome = (e) => {
    e.preventDefault();
    console.log("Home Clicked");
    dispatch(changeTab("home"));
    navigate("/");
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-5 bg-body-tertiary sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${selectedTab === "home" && "active"}`}
            aria-current="page"
            onClick={(e) => handleHome(e)}
          >
            <IoHomeOutline
              className="me-2"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Home
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${selectedTab === "add-product" && "active"}`}
            aria-current="page"
            onClick={(e) => handleAddProduct(e)}
          >
            <MdOutlineAddBox
              className="me-2"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 0px 5px 0px",
              }}
            />
            Add Product
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default Sidebar;
