import { createContext, useEffect, useState } from 'react';

export const NewsContext = createContext({
  articles: [],
  fetching: false,
  fetchData: () => {},
});

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchData = async () => {
    if (!fetching) {
      setFetching(true);

      const articleIds = await fetch(
        `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`,
      ).then((data) => data.json());

      const articles = await Promise.all(
        articleIds.map((articleId) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`).then((data) => data.json());
        }),
      );

      setArticles(articles);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NewsContext.Provider
      value={{
        articles,
        fetching,
        fetchData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
