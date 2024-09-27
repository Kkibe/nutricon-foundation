import React from 'react';
import AppHelmet from '../components/AppHelmet';

export default function Error() {
  return (
    <div className='not-found'>
      <AppHelmet title={'PAGE NOT FOUND NUTRICON FOUNDATION'} />
      <h1>404 ERROR!</h1>
      <h2>Page not found</h2>
      <div className="btn"  onClick={() =>{
        window.history.back();
      }}>Go back</div>
    </div>
  )
}
