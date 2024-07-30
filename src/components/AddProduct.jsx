import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
const AddProduct = () => {
  const authtoken = useSelector((state) => state.user.currentUser.token);
  //const [selectedFile, setSelectedFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMsg] = useState("");
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Choose File");
  const [products, setProducts] = useState([]);
  const [showAddProduct, setAddProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", file);
      console.log(formData.get("file"));
      console.log(authtoken);
      const response = await fetch(
        "http://localhost:3000/api/product/add-product",
        {
          headers: {
            "auth-token": authtoken,
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Product uploaded successfully", result);
        setProductName("");
        setDescription("");
        setPrice("");
        setFilename("");
        setAlertMsg("Success: Product added !!");
        setSuccessMsg("Success: Product added");
        setErrorMsg("");
        setAlert(true);
        setAddProduct(false);
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
  useEffect(() => {
    fetchProducts();
  }, [showAddProduct]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/product/products"
      );
      const result = await response.json();
      console.log("Result of all products", result);
      setProducts(result[0]);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
  return (
    <>
      <div className="d-flex flex-row justify-content-end mt-4 my-4 ">
        <button
          type="button"
          className="px-2 py-1 btn btn-primary mx-2"
          onClick={() => {
            setAddProduct(false);
            setShowProduct(true);
            setSuccessMsg("");
          }}
        >
          Show Product
        </button>

        <button
          type="button"
          className="px-2 py-1 btn btn-primary mx-2"
          onClick={() => {
            setShowProduct(false);
            setAddProduct(true);
            setSuccessMsg("");
          }}
        >
          Add Product
        </button>
      </div>

      {showAddProduct && (
        <div className="container container-div">
          {alert && <div className="alert alert-success">{alertMessage}</div>}
          <form method="POST" className="create-post" onSubmit={handleSubmit}>
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
                type="file"
                className="form-control"
                id="formFile"
                onChange={handleFileChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {filename}
              </label>
            </div>
            <button type="submit" className="px-4 btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="px-4 mx-2 btn btn-primary"
              onClick={() => {
                setAddProduct(false);
              }}
            >
              Cancel
            </button>
            <p className="text-danger">{errorMsg}</p>
            <p className="text-success">{successMsg}</p>
          </form>
        </div>
      )}

      {showProduct && (
        <div className="container table-container">
          <h4 className="mt-4 mr-auto">Product List</h4>
          <table className="table  table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    {product?.description.split(" ").slice(0, 6).join(" ")}
                  </td>
                  <td>
                    {/* <img src={product.imageUrl} alt={product.name} width="50" /> */}
                    {product.picture && (
                      <img
                        src={`data:image/jpeg;base64,${btoa(
                          new Uint8Array(product.picture.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                          )
                        )}`}
                        alt={product.name}
                        style={{
                          width: "50px",
                          height: "25px",
                        }}
                      />
                    )}
                  </td>
                  <td className="text-center">
                    {/* <button
                      className="btn btn-danger"
                      // onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button> */}
                    <FiEdit2
                      style={{ width: "20px", height: "20px", color: "red" }}
                    />
                    <CiCircleRemove
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "red",
                        marginLeft: "20px",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default AddProduct;
