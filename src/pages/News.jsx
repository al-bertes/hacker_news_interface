import React from 'react';
import { useLocation } from 'react-router-dom'
const News = (props) => {

  const location = useLocation()
  const { from } = location.state
  const timeFormat = new Date(from.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
    return (
        <>
          <div class="wraper news_container">
            <main class="main_news">
              <h2 class="heading_news_page">{from.title}</h2>
                <div className="about_newss">
                  <a href={from.url}><h4 className="sourse_news">source</h4></a>
                  <h4 class="name_autor">autor: <span class="name">{from.by}</span></h4>
                  <h4 class="data_news">data: <span className="data_n">{displayDate}</span> </h4>
                </div>
              
            </main>
            <section class="coments_container">
              <h3 class="heading_coments"><span>12</span> coments</h3>
              
              <ul class="list_coments">
                <li class="item_coments">
                  <p class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus temporibus illum, suscipit vero reiciendis itaque libero quidem omnis voluptatum, 
                  ratione saepe corporis obcaecati, praesentium optio? Libero optio architecto quas quis?</p>
                </li>
              </ul>
            </section>
          </div>
        </>
    );
};

export default News;