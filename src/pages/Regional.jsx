import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import NewsCards from '../components/NewsCards';
import Loader from '../components/Loader';

function Regional() {
    const {countryArticles, getCountryNews, loader} = useContext(AppContext);
    useEffect(() => {
       getCountryNews("in");
    }, []);
    
  return (
      <div className="regianal-news">
          {loader ? (<Loader />) : ("")}
          <NewsCards articles={countryArticles} />
      </div>
  );
}

export default Regional