import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Logo from '../../assets/logo.png';
import { Email, Phone } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import Bg from '../../assets/bg.mp4';
import Dialog from '../Dialog/Dialog';
import {addContact} from '../../firebase';


const Contact = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({name, email, message}, setSuccess, setError);
  };
  
  useEffect(() => {
    error && setTimeout(() => {
      setError(null);
    }, 1000);
    
    success && setTimeout(() => {
      setSuccess(null);
      setEmail('');
      setName('');
      setMessage('');
    }, 1000);
  }, [error, success]);
    return (
        <div className="contact">
          <video className='video' autoPlay loop muted>
            <source src={Bg} type='video/mp4' />
          </video>
          <h1>Get Connected</h1>
          {success && <Dialog text={success} title={"Your details was submitted!"} isError={false}/>}
          {error && <Dialog text={error} title={"An Error Occurred!"} isError={true}/>}
          <div className="wrapper">
              <div className="contacts">
                <NavLink to="/" title='taxa'>
                  <img src={Logo} alt='taxa_logo'/>
                  <h1>TAXA<span>.org</span></h1>
                </NavLink>
                <p>
                  431 University Way, 1st Floor<br/>
                  Nairobi NI 10013<br/>
                  Kenya
                </p>
                <p><Phone />  phone <Link to="tel:+1234567890">+1 234 567 890</Link></p>
                <p><Email />  mail to. <Link to="mailto:admin@taxa.org">admin@taxa.org</Link></p>
              </div>
            
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text"  placeholder="NAME"  required value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email"  placeholder="EMAIL"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <textarea placeholder="MESSAGE" required value={message} onChange={(e) => setMessage(e.target.value)}/>
              <button className='btn' title='send' type='submit'>SEND</button>
          </form> 
          </div>

     </div>
    );
}
export default Contact;