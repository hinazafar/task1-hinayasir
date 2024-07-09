import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AddProduct from "./components/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <ProductList></ProductList>
        ) : (
          <AddProduct></AddProduct>
        )}

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
