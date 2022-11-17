import React from 'react';

const ItemNews = (props) => {
  const timeFormat = new Date(props.news.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
  return (
    <>
      <li className="item_news">
        <div className="about_news">
          <time className="data">{displayDate}</time>
          <div className="reitng">{props.news.score}</div>
          <div className="autor">{props.news.by}</div>
        </div>
        <h2 className="heading_news">{props.news.title}</h2>
      </li>
    </>
  );
};

export default ItemNews;
