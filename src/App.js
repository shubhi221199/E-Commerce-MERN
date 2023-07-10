import React from "react";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },

  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },

  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },

  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
