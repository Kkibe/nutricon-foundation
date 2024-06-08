import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Error() {
  return (
    <div className='not-found'>
          <Helmet>
            <meta charSet="utf-8" />
            <title>PAGE NOT FOUND TAXA KENYA</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"This page was not found!"}/>
          </Helmet>
      <h1>404 ERROR!</h1>
      <h2>Page not found</h2>
      <div className="btn"  onClick={() =>{
        window.history.back();
      }}>Go back</div>
    </div>
  )
}
