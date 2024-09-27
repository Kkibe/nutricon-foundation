import React from 'react';
import Taxa1 from '../../assets/wdd.png';
import Taxa2 from '../../assets/eat_well_feel_well.png'
import Taxa3 from '../../assets/1/5.png';
import Taxa4 from '../../assets/2/8.png';

import './Services.scss'
import { NavLink } from 'react-router-dom';

const Data = [
  {
    id:1,
    name: "Learn more",
    title: "Expert Nutrition Advice",
    img: Taxa2,
    desc: "Our blog provides evidence-based nutrition tips tailored to various dietary needs. Whether you're managing diabetes, looking to lose weight, or simply aiming for a healthier lifestyle, our expert guidance will help you make informed food choices.",
    link: "#"
},

{
    id:2,
    name: "Learn more",
    title: "Comprehensive Fitness Routines",
    img: Taxa1,
    desc: "Explore a variety of fitness routines designed for all fitness levels, from beginners to advanced. We offer detailed workout plans, exercise tutorials, and tips to keep you motivated and engaged in your fitness journey.",
    link: "#"
},
{
  id:3,
  name: "Learn more",
  title: "Holistic Health Resources",
  img: Taxa4,
  desc: "Our commitment to your well-being extends beyond nutrition and fitness. We provide resources on mental health, stress management, and holistic wellness practices to support a balanced and healthy lifestyle. Join our community and empower yourself with the tools you need for a healthier life.",
  link: "#"
},
{
    id:4,
    name: "Learn More",
    title: "Diabetes Management Strategies",
    img: Taxa3,
    desc: "We specialize in offering practical strategies for effective diabetes management. Learn about dietary adjustments, exercise recommendations, and lifestyle changes that can help you maintain stable blood sugar levels and improve your overall health.",
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
