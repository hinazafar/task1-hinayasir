import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import AddProduct, { createProductAction } from "./components/AddProduct.jsx";
import "./index.css";
import ProductList, { productLoader } from "./components/ProductList.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import OTPSignIn from "./components/OTPSignIn.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductList />, loader: productLoader },
      {
        path: "/add-product",
        element: <AddProduct />,
        action: createProductAction,
      },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/forgot-password", element: <OTPSignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
