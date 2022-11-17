import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import update from '../img/update.png';
import { NewsContext } from './NewsProvider';

const Header = () => {
  const { fetchData } = useContext(NewsContext);

  const navigate = useNavigate();

  const onUpdateBtnClick = () => {
    fetchData();
    navigate('/');
  };

  return (
    <>
      <div className="wraper header_container">
        <header className="header">
          <div className="logo">
            <h1 className="logo_heading">hacker news_</h1>
          </div>
          <button onClick={onUpdateBtnClick} className="update_btn">
            <img id="update_img" src={update} alt="" />
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
