import React, { useEffect, useState } from 'react'
import Featured from '../components/Featured/Featured';
import Slider from '../components/Slider/Slider';
import NewsItem from '../components/NewsItem/NewsItem';
import Services from '../components/Services/Services';
import { getNews } from '../firebase';
import InternetDialog from '../components/InternetDialog/InternetDialog';
import AppHelmet from '../components/AppHelmet';

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
      <AppHelmet title={'NUTRICON FOUNDATION'} />
      {!isOnline && <InternetDialog />}
      <Slider />
      <h1 id='services'>What we do:</h1>
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
    </div>
  )
}
