import React from 'react';

import update from "../img/update.png"

const Header = () => {
  return (
    <>
      <div className="wraper header_container">
        <header className="header">
          <div className="logo">
            <h1 className="logo_heading">hacker news_</h1>
          </div>
          <a href="/"  className="update_page">
            <img id="update_img" src={update} alt=""/>
          </a>
        </header>
      </div>
    </>
  );
};

export default Header;