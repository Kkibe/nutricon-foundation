import React from 'react';
import Taxa1 from '../../assets/taxa-s1.png';
import Taxa2 from '../../assets/taxa-s2.png'
import Taxa3 from '../../assets/taxa-s3.png';
import Taxa4 from '../../assets/taxa-s4.png';

import './Services.scss'
import { NavLink } from 'react-router-dom';

const Data = [
  {
    id:1,
    name: "Learn more",
    title: "Community Engagement and Mobilization",
    img: Taxa1,
    desc: "Build networks of community advocates to amplify voices and drive grassroots movements for change.",
    link: "#"
},

{
    id:2,
    name: "Learn more",
    title: "Transparency and Accountability Initiative",
    img: Taxa2,
    desc: "Monitor and report on government tax collection and expenditure to ensure transparency and hold authorities accountable for tax-related decisions.",
    link: "#"
},

{
    id:3,
    name: "Learn More",
    title: "Advocacy and Policy Reform",
    img: Taxa3,
    desc: "Engage with policymakers to advocate for fair and equitable tax policies. Draft policy recommendations and collaborate with government agencies to implement reforms.",
    link: "#"
},

{
    id:4,
    name: "Learn more",
    title: "Education and Awareness Programs",
    img: Taxa4,
    desc: "Conduct workshops, seminars, and webinars to educate the public about tax rights and responsibilities. Develop and distribute informational materials that explain tax issues and their impact on society.",
    link: "#"
}
        ]
export default function Services() {
  
  function Service({item}) {
  return (
    <div className='service'>
    <img src={item.img} alt={item.title.split(" ").join("_")} />
    <h3>{item.title}</h3>
    <p>
      {item.desc}
    </p>
    <NavLink to="#" title={item.title}>{item.name}<i className="fas fa-chevron-right"></i></NavLink>
  </div>)};
  
  
  return (
    <div className='services'>
      <div className="post-container">
        {
          Data.map(item => {
            return <Service item={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}
