import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import PrivateRoute from "./pages/admin/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/none";
import Cart from "./pages/home/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="*" element={<NotFound/>}/>
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