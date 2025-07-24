import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/home/Products";
import Cart from "./pages/home/Cart";
import HomeLayout from "./pages/home/HomeLayout";
import None from "./pages/none/None";
import Login from "./pages/login/Login";
import PrivateRoute from "./pages/admin/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      {/* Home */}
      <Route element={<HomeLayout />}>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="products" element={<Products />}/>
        <Route path="cart" element={<Cart />}/>
      </Route>
      {/* Other pages */}
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<None />}/>
      <Route path="login" element={<Login />}/>
      <Route path="admin/dashboard" element={
        <PrivateRoute>
          <AdminDashboard/>
        </PrivateRoute>
      }/>
      </Route>
    </>
  )
);

export default router;