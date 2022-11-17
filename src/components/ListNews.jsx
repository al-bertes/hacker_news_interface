import React from 'react';
import { Link } from 'react-router-dom';
import ItemNews from './ItemNews';
const ListNews = (props) => {
  return (
    <div>
      <div className="wraper news_container">
        <main className="main">
          <ul className="list_news">
            {props.news.map((item) => (
              <Link key={item.id} to="news/" state={{ from: item }} style={{ textDecoration: 'none' }}>
                <ItemNews news={item} />
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default ListNews;
