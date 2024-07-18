import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const currentUser = useSelector((state) => state.user);
  //const [selectedFile, setSelectedFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("product value=", productName, price, description);
      const response = await fetch("http://localhost:3000/auth/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: productName,
          price: price,
          description: description,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Product uploaded successfully", result);
        setProductName("");
        setDescription("");
        setPrice("");
        setAlertMsg("Success: Product added !!");
        setAlert(true);
        //navigate("/", { state: "true" });
      } else {
        console.error("Product upload failed", response.statusText);
        setErrorMsg("Product upload failed");
      }
    } catch (error) {
      console.error("Error uploading product", error);
      setErrorMsg("Error uploading product");
    }
  };
  return (
    <>
      {alert && <div className="alert alert-success">{alertMessage}</div>}
      <form
        method="POST"
        className="create-post container-div"
        onSubmit={handleSubmit}
      >
        <h4>Add Product</h4>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Product Name..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price:
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <span className="input-group-text">0.00</span>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Product Description:
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="productDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us more about it."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Upload Product Picture here:
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleFileChange}
            id="formFile"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <p className="text-danger">{errorMsg}</p>
      </form>
    </>
  );
};
export default AddProduct;
