import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navstyle.scss'
import Logo from "../../assets/image/logo.png";

function Navbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <>
    <section className="navSection"> 
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="log">
            <Link to="/">
              <img width="234px" src={Logo} alt="" />
            </Link>
          </div>
          <div className="d-flex gap-5 fw-semibold">
          <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
            <Link to="/about">
              About
            </Link>
            <Link to='/vans' >Vans</Link>
            <Link to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg></Link>
          </div>
        </nav>
      </div>
    </section>
    </>
  );
}

export default Navbar;
