import React from 'react'
import { NavLink } from 'react-router-dom';
export default function JobsFlyer() {
  const handleToggle = async () => {
    document.querySelector('.donate').classList.toggle('active');
  }
  return (
    <div className="flyer" style={{width: '100%', padding: '5px'}}>
          <h1>Oh! You have digged our website and would like to contribute?</h1>
          <h1>We use your contribution to get information to more people like you.</h1>
        <NavLink className="btn"  onClick={handleToggle} title='donate'>DONATE</NavLink>
    </div>
  )
}
