import {useState, useEffect} from 'react';
import ListNews from "../components/ListNews";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchData = async () => {
    if(!fetching) {
      setFetching(true);

      const articleIds = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`)
        .then(data => data.json());

      const articles = await Promise.all(
        articleIds.map(articleId => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
            .then(data => data.json());
        })
      );

      setArticles(articles);
      setFetching(false);
    }
  }    

  useEffect(() => {          
    fetchData();
    const timerId = setInterval(fetchData, 60000);

    return () => {
      clearInterval(timerId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ListNews news={articles}/>
    </>
  );
};

export default Main;