import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AddProduct from "../components/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../components/ProductList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar></Sidebar>

      <div className="content">
        <Header></Header>

        <Outlet></Outlet>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
