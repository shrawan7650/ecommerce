// SendOtp.js
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './otp.css'
const SendOtp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/email-send",
        { email }
      );
      console.log(response.data.data.email);
      const value = response.data.data.email;
      const code = response.data.data.code;
      alert(`This is your otp code: ${code}`);
      navigate(`/forget?email=${value}`);
    } catch (error) {
      alert(error.response.data.msg)
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="on"
            />
          </div>
          <div className="btns">
          <button type="submit" className="btn btn-primary">Send OTP</button>
          <button onClick={() => navigate("/login")} type="button" className="btn btn-primary">Go Back</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SendOtp;
