import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "jane",
    password: "1234567",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

/*   const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }; */

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      if(location.state?.from){
        navigate(location.state.from, { state: { dates: location.state?.dates, options: location.state?.options} })
      }else{
        navigate("/")
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
        />
        <form >

        </form>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Use Demo Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
