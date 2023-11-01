import React from "react";
import { Link } from "react-router-dom";
import './navstyle.scss'
import Logo from "../../assets/image/logo.png";

function Navbar() {
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
            <Link to="/about">
              About
            </Link>
            <Link to='/vans' >Vans</Link>
          </div>
        </nav>
      </div>
    </section>
    </>
  );
}

export default Navbar;
