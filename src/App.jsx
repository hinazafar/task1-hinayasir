import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <div className="flex-d container">
        <div className="p-2">
          <Header></Header>
        </div>

        <div className=".d-sm-none .d-md-block d-flex flex-row">
          <div
            style={{
              width: "20%",
              borderRadius: "5px",
              backgroundColor: "#e9ecef",
            }}
          >
            <Sidebar />
          </div>
          <div className="border" style={{ width: "80%" }}>
            <Outlet />
          </div>
        </div>
        <div className="p-2">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
