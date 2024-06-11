import React, { useEffect, useState } from 'react'
import Featured from '../components/Featured/Featured';
import Slider from '../components/Slider/Slider';
import JobsFlyer from '../components/JobsFlyer/JobsFlyer';
import NewsItem from '../components/NewsItem/NewsItem';
import Services from '../components/Services/Services';
import { getNews } from '../firebase';
import { Helmet } from 'react-helmet-async';
import InternetDialog from '../components/InternetDialog/InternetDialog';

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const [isOnline] = useState(() =>{
    return navigator.onLine
  })
  
  useEffect(() =>{
    getNews(4, "all", setNews, setLoading);
  }, [isOnline]);
  
  return (
    <div className='Home'>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Taxa Kenya - Fair Taxes, Just Kenya: Unite for Equity and Accountability.</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Taxa Kenya is dedicated to combating tax discrimination and injustices in Kenya. Through education, advocacy, and community engagement, we are committed to advocating for fair and equitable tax policies that benefit all citizens."}/>
          </Helmet>
      {!isOnline && <InternetDialog />}
      <Slider />
      <h1 id='services'>What we offer:</h1>
      <Services />
      <Featured />
      {
        news.length > 0 && <><h1>News Feed</h1>
        <h2>Read Our Trending Articles</h2>
        </>
      }

      <div className='post-container'>
        {
          news.length > 0 && news.map((item) => {
            return <NewsItem key={item.id} data={item}/>
          })
        }
      </div>
      <JobsFlyer />
    </div>
  )
}
