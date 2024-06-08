import React, { useEffect, useState } from 'react'
import { signInUser } from '../firebase';
import { Helmet } from 'react-helmet-async';

export default function AdminAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password, setError);
    }
    
    useEffect(() => {
      error && setTimeout(() => {
        setError(null);
      }, 1000);
    }, [error]);
    
  
  return (
    <div className='admin'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Admin Auth Taxa Kenya - Fair Taxes, Just Kenya: Unite for Equity and Accountability.</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Taxa Kenya is dedicated to combating tax discrimination and injustices in Kenya. Through education, advocacy, and community engagement, we are committed to advocating for fair and equitable tax policies that benefit all citizens."}/>
        </Helmet>
        <h1>ADMIN LOGIN</h1>
        <h4>Only for admin users</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter email:</label>
            <input type="email" name="email" id="email"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Enter password:</label>
            <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn' type='submit' >Login Admin</button>
            {
              error && <h4 className='error'>{error}Try again</h4>
            }
        </form>
    </div>
  )
}
