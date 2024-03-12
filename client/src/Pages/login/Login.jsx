import { Link, NavLink } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";
// import login  from '../assets/login.jpeg'
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate , useLocation} from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {auth, setAuth} = useAuth();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setValue((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const forgetPassword = ()=>{
    navigate('/otp')
  }
  const sumbitHandlerLogin = async (e) => {
 
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        value
      );
     
      const{token,msg,user}  = response.data;
   
      setValue({
        email: "",
        password: "",
      });
   
      setAuth({
        ...auth,
        user,
        token,
      })
     
      localStorage.setItem('auth',JSON.stringify(response.data))
      navigate(location.state || "/");
      alert(msg);
    } catch (err) {
      console.log("this is err", err);
      const data = err.response.data.msg;

      alert(data);
      setValue({
        email: "",
        password: "",
      });
    }

   
  };
  return (
    <Layout>
    <div className="main-login-conatiner">
    <form onSubmit={sumbitHandlerLogin} className="form-conatiner">
        {/* <div className="imgcontainer">
          <img src={login} alt="Avatar" className="avatar" />
        </div> */}
        <h1>Login Form</h1>
        <div className="containers">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={changeHandler}
            value={value.email}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={value.password}
            required
          />
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>{" "}
          <span className="signup">
            <NavLink to="/register" className="signup-link">Signup Now</NavLink>
          </span>
        </div>

        <div className="container-btn">
          <button className="button-login" type="submit">
            Login
          </button>

          <button className="forgent-btn" onClick={forgetPassword}>
            <Link to="" className="link-forget-bar">
              Forgot password?
            </Link>{" "}
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};
