import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";


export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const {auth} = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8000/api/v1/user-auth", {
        headers: {
          Authorization: auth?.token,
        },
      });
     
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok && <Outlet /> ;
}
