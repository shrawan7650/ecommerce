import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { About } from "./Pages/About";
import { Conatct } from "./Pages/Conatct";
import { Policy } from "./Pages/Policy";
import { PageNotFound } from "./Pages/PageNotFound";
import { Login } from "./Pages/login/Login";
import { SignupNow } from "./Pages/registration/Signup";
import Dashboard from "./user/UserDashboard";
import PrivateRoute from "./components/layout/Routes/Private";
import ChangePassword from "./Pages/password/ChangePassword";
import SendOtp from "./Pages/password/SendOtps";

import AdminDashboard from "./components/layout/Admin/AdminDashboard";
import AdminRoute from "./components/layout/Routes/AdminRoute";
import CreateCategory from "./components/layout/Admin/CreateCategory";
import CreateProduct from "./components/layout/Admin/CreateProduct";
import Users from "./components/layout/Admin/Users";
import Orders from "./user/Order";
import Profile from "./user/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/otp" element={<SendOtp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile/>} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/policy" element={<Policy />} />
        <Route path="/forget" element={<ChangePassword />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupNow />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
