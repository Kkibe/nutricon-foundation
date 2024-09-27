import { ArrowUpward, Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    const handleScroll = (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })}
    return (
        <div className='footer theme'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <Link to='https://www.facebook.com/kibetkorirc' title='facebook/taxa-kenya' target='_blank'><Facebook /></Link>
                    <Link to='https://www.instagram.com/ancientpupy' title='instagram/@taxa_ke' target='_blank'><Instagram /></Link>
                    <Link to='https://twitter.com/ancientpupy' title='twitter/@taxa_kenya' target='_blank'><Twitter /></Link>
                    <Link to='https://www.youtube.com/@codespear' title='youtube/@taxa_kenya' target='_blank'><YouTube /></Link>
                    <Link to='https://www.linkedin.com/in/kibetkorir' title='linkedin/in/taxa-kenya' target='_blank'><LinkedIn /></Link>
                </div >
                
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; NUTRICON_FOUNDATION {new Date().getFullYear()}</p>
                <NavLink to={'/about#faq'} title='what people ask'>FAQ</NavLink>
                <button className="btn-top" onClick={() => handleScroll()}><ArrowUpward/></button>
            </div>
        
        </div>
    );
}

export default Footer;
