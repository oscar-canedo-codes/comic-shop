import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (

    <nav className="menu">
    
      <Link to="/home" className="menu__link">
        home
      </Link>
      <Link to="/comics" className="menu__link menu__link">
        comics
      </Link>
      <Link to="/shop" className="menu__link">
        shop
      </Link>
      <Link to="/login" className="menu__link">
        login
      </Link>
      <Link to="/admin" className="menu__link">
        admin
      </Link>
      <Link to="/admin-dashboard" className="menu__link">
        admin dashboard
      </Link>

      <div>
      </div>
    </nav>
  );
};

export default Header;
