import React, { useEffect, useState } from 'react';
import Image from '../assets/logo.png';
import { addNewsViews, getNews, getNewsItem } from '../firebase';
import NewsItem from '../components/NewsItem/NewsItem';
import Loader from '../components/Loader/Loader';
import Newsletter from '../components/Newsletter/Newsletter';
import { useLocation, NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

export default function SingleNews() {
  const [news, setNews] = useState(null);
  const [scroll, setScroll] = useState(0);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(null);
  let location = useLocation();
  
  const readingTime = (articleText) => {
      const wordsArray = articleText.split(' ');
      // Count the number of words in the array
      const wordCount = wordsArray.length;
      // Calculate the estimated reading time
      const wordsPerMinute = 200;
      return Math.ceil(wordCount / wordsPerMinute);
  }
  
  function truncateTitle(input, value) {
    if (input.length > value) {
       return input.substring(0, value) + '...';
    }
    return input;
 };
  
  useEffect(() => {
    getNewsItem(window.location.pathname.split('/news/')[1], setNews, setLoading);
    addNewsViews(window.location.pathname.split('/news/')[1]);
    window.onscroll = () => {
      var windowTop = document.documentElement.scrollTop;
      var documentHeight = window.document.body.offsetHeight;//document.documentElement.clientHeight;
      var windowHeight = window.innerHeight;
      setScroll((windowTop / (documentHeight - windowHeight))*100);
    }
  }, [location]);

  useEffect(() => {
    news && getNews(3,  news.category, setRelatedNews, setLoading);
  }, [news])
  
  return (
    <div className='single-news'>
          
          {news &&<Helmet>
            <meta charSet="utf-8" />
            <title>{news.title}</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={news.title}/>
            <meta name="keywords" content={`tax, business, policy, ${news.category}`}/>
            <meta name="author" content="Taxa Kenya"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Helmet>}
          <div className="scroll-line" style={{width: scroll + '%'}}></div>
          {news && <div className="wrapper">
            <img src={news.imageUrl ? news.imageUrl : Image} alt={truncateTitle(news.title, 5)} />
            <h2>{news.title}</h2>
            <h4>
                <NavLink to={`/news?category=${news.category}`} className="category">{news.category}</NavLink>
                <span className="article-pre__aut date">{new Date(news.timestamp).toDateString()}</span> 
                <span className="read">{readingTime(news.description)} min read</span>
            </h4>
            <p style={{ whiteSpace: 'pre-wrap' }}>{news.description}</p>
          </div>}
          
          {news && <div className="sidebar">
            <Newsletter />
            <h3>Related News:</h3>
            <div className="news-items">
            {
              relatedNews.length > 0 && relatedNews.filter((blog) =>{
                return blog.id !== news.id;
              }).map((blog) => {
                return <NewsItem key={blog.id} data={blog}/>
              })
            }
            </div>
          </div>}

          {
            (!news && loading) && <Loader />
          }
    </div>
  )
}
