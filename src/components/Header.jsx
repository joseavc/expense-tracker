import React from 'react';
import logo from '../img/logo.svg';
function Header() {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="" />
    </div>
  );
}

export default Header;
