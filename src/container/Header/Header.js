import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Container>
        <div className="header_inner">
          <div className="logo">
            {/* <img src={} alt='Logo' /> */}
            <h1>
              <Link to="/">
              M.Y.<span>Shop</span>
              </Link>
            </h1>
          </div>

          <div className="icons">
            <Link to='/'><i className="fa-solid fa-cart-shopping"></i> <div className="icon_"> <span>0</span> </div></Link>
            <Link to='/'><i className="fa-solid fa-magnifying-glass"></i></Link>
          </div>
          <div className="list">
            <ul>
                <li><Link to='/signIn'>LogIn</Link></li>
                <li><Link to='/signUp'>Register</Link></li>
                <li className=""><Link to='/'>Admin</Link></li>
                <li className=""><Link to='/'>My Orders</Link></li>
                <li className=""><Link to='/'>LogOut</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
