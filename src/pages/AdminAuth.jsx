import React, { useEffect, useState } from 'react'
import { signInUser } from '../firebase';
import AppHelmet from '../components/AppHelmet';

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
        <AppHelmet title={'Admin Auth | Nutricon Foundation'} />
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
