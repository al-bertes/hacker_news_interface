import { useEffect, useContext } from 'react';
import ListNews from '../components/ListNews';
import { NewsContext } from '../components/NewsProvider';

const Main = () => {
  const { articles, fetchData } = useContext(NewsContext);

  useEffect(() => {
    const timerId = setInterval(fetchData, 60000);

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ListNews news={articles} />
    </>
  );
};

export default Main;
