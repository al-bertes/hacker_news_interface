import React from 'react';
import {Link} from 'react-router-dom'
import ItemNews from './ItemNews';
const ListNews = ({news}) => {
    return (
        <div>
          <div class="wraper news_container">
            <main class="main">
              <ul class="list_news">
                {news.map(item =>
                  <Link to="news/" state={{ from: item }} style={{ textDecoration: 'none', color: 'black' }}>
                    <ItemNews news={item}/>
                  </Link>
                   )}
            </ul>
        </main>
    </div>
        </div>
    );
};

export default ListNews;