import React from 'react';

const ItemNews = ({news}) => {
  const timeFormat = new Date(news.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
  return (
    <>
      <li class="item_news">
        <div class="about_news">
          <time class="data">{displayDate}</time>
          <div class="reitng">score: {news.score}</div>
          <div class="autor">{news.by}</div>
        </div>
        <h2 class="heading_news">{news.title}</h2>
      </li>
    </>
  );
};

export default ItemNews;