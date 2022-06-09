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
      <Link to="/register" className="menu__link">
        register
      </Link>
      <Link to="/dashboard" className="menu__link">
        admin
      </Link>

      <div>
      </div>
    </nav>
  );
};

export default Header;
