import React from 'react'
import Contact from '../components/Contact/Contact';
import Faq from '../components/Faq/Faq';
import Image from '../assets/taxa.png';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
<div className='about'>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Taxa Kenya - Fair Taxes, Just Kenya: Unite for Equity and Accountability.</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Taxa Kenya is dedicated to combating tax discrimination and injustices in Kenya. Through education, advocacy, and community engagement, we are committed to advocating for fair and equitable tax policies that benefit all citizens."}/>
          </Helmet>
    <div className="quote">
      <img src={Image} alt="taxa_about_flyer_thumbnail" />
      <div className='content'>
        <p>
        Join us in the fight against tax discrimination and injustices in Kenya. Our mission is to ensure fair and equitable tax policies for all citizens, promote transparency, and hold authorities accountable. Together, we can create a just tax system that supports economic growth and social equity. Learn more and get involved today.
        </p>
      </div>
    </div>
    <div className="quote">
      <div className='content'>
        <p>
        Welcome to our initiative dedicated to combating tax discrimination and injustices in Kenya. We are committed to advocating for fair and equitable tax policies that benefit all citizens, regardless of their socio-economic status. Our work involves raising awareness about the impacts of unfair tax practices, promoting transparency in tax collection and allocation, and holding authorities accountable to ensure that tax revenues are used to improve public services and infrastructure.
        <br />
        <br />
        Tax discrimination not only undermines economic stability but also exacerbates social inequalities. We believe that every Kenyan deserves a tax system that is just, transparent, and conducive to economic growth. Our organization works tirelessly to engage with policymakers, conduct research, and mobilize communities to advocate for reforms that will lead to a more equitable distribution of resources.
        <br />
        <br />
        Join us in our mission to create a fair tax system in Kenya. Through education, advocacy, and community engagement, we can make a difference. Learn more about our work, get involved in our campaigns, and help us build a future where tax justice prevails for the benefit of all Kenyans. Together, we can drive change and ensure that tax policies support sustainable development and social justice.
        </p>
      </div>
    </div>
    <Faq />
    <Contact />
  </div>
  )
}
