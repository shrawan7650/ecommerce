import { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [searchParams] = useSearchParams();

  // useEffect to set the initial value of the email state
  const initialEmailValue = searchParams.get("email");
  const email = initialEmailValue;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/change-password",
        { email, otp, newPassword }
      );
      const data = response.data.msg;
      alert(data);
      navigate("/login");
    } catch (error) {
      const data = error.response.data.msg;

      alert(data);
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Change Password</h4>
          <div className="mb-3">
            <label>Enter the OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="4"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter Your New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="btns">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
            <button
              onClick={() => navigate("/otp")}
              type="button"
              className="btn btn-primary"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChangePassword;
