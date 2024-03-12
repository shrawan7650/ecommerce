import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./signup.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignupNow = () => {
  const navigate = useNavigate()
  const [value, SetValue] = useState({
    name: "",
    email: "",
    password: "",
    // cpassword: "",
    phone: "",
    answer:"",
    address: "",
  });
  const changeHandler = (event) => {
    SetValue((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  const sumbitHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        value
      );
      const data = response.data.msg;
      alert(data);
      navigate('/login')
      SetValue({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
       
      });
      
    } catch (err) {
      console.log("this is err", err);
      const data = err.response.data.msg;
      alert(data);
    }
  };
  return (
    <Layout>
 <div>
       <form onSubmit={sumbitHandler} className="SignUpForm">
        <div className="containers">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={value.name}
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={value.email}
            onChange={changeHandler}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={value.password}
            onChange={changeHandler}
            required
          />
          {/* <input
            type="password"
            placeholder="Repeat Password"
            name="cpassword"
            
            onChange={changeHandler}
          /> */}
          <input
            type="text"
            placeholder="Enter Phone No"
            name="phone"
            value={value.phone}
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={value.address}
            onChange={changeHandler}
            required
          />
          
          <input
            type="checkbox"
           
            name="remember"
            style={{ marginBottom: 15 }}
          />{" "}
          Remember me
          <span>
            <Link to="/login">Login In</Link>
          </span>
          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a>
            .
          </p>
          <div className="clearfix">
            <button type="submit" className="signupbtns sign-btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
 </div>
    </Layout>
  );
};
