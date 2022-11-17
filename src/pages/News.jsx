import React from 'react';
import { useLocation } from 'react-router-dom';
const News = (props) => {
  const location = useLocation();
  const { from } = location.state;
  const timeFormat = new Date(from.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
  return (
    <>
      <div className="wraper news_container">
        <main className="main_news">
          <h2 className="heading_news_page">{from.title}</h2>
          <div className="about_newss">
            <a href={from.url}>
              <h4 className="sourse_news">source</h4>
            </a>
            <h4 className="name_autor">
              autor: <span className="name">{from.by}</span>
            </h4>
            <h4 className="data_news">
              data: <span className="data_n">{displayDate}</span>{' '}
            </h4>
          </div>
        </main>
        <section className="coments_container">
          <h3 className="heading_coments">
            <span>12</span> coments
          </h3>

          <ul className="list_coments">
            <li className="item_coments">
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus illum, suscipit vero
                reiciendis itaque libero quidem omnis voluptatum, ratione saepe corporis obcaecati, praesentium optio?
                Libero optio architecto quas quis?
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default News;
