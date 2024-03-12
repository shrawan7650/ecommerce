import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../../context/auth";

const Header = () => {
  const {auth, setAuth} = useAuth();
  const logoutHandler = () => {
    console.log(auth)
    setAuth({
      ...auth,
      token: null,
      user: null,
    });
    localStorage.removeItem("auth");
    
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand">Hidden brand</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown ">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     {auth.user.name}
                    </Link>
                    <ul className="dropdown-menu width: 50%">
                      <li>
                        <NavLink to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}className="dropdown-item" >
                         Dashboard
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      onClick={logoutHandler}
                    >
                      Logout
                    </NavLink>
                  </li>
                    </ul>
                  </li>
                  
                </>
              )}

              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <FaCartShopping />
                  (0)
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
