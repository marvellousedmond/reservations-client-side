import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Travels</span>
        </Link>
        {user ? <p>Welcome {user.username}!</p> : (
          <div className="navItems">
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
            <button className="navButton">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
