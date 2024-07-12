import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import AddProduct from "./components/AddProduct.jsx";
import "./index.css";
import ProductList from "./components/ProductList.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import OTPSignIn from "./components/OTPSignIn.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import UserProfile from "./components/UserProfile.jsx";
import OTPSignUp from "./components/OTPSignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductList /> },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      { path: "/profile", element: <UserProfile /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/otp-signup", element: <OTPSignUp /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/forgot-password", element: <OTPSignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
