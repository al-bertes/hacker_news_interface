import React, { useContext } from 'react';
import { NewsContext } from './NewsProvider';

export const Preloader = () => {
  const { fetching } = useContext(NewsContext);

  return fetching ? (
    <div className="preloader_wrapper">
      <span>Loading...</span>
    </div>
  ) : null;
};
