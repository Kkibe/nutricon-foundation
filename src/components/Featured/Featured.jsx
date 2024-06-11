import React from 'react';
import './Featured.scss';
import { NavLink } from 'react-router-dom';

import Taxa1 from '../../assets/taxa-finance.png';
import Taxa2 from '../../assets/taxa-business.png';
import Taxa3 from '../../assets/taxa-statistics.png';
import Taxa4 from '../../assets/taxa-s4.png';


const Featured = () => {
    return (
    <section className="featured" id='featured'>
            <h1>How we collaborate</h1>
            <h2>
            The network’s integrated approach and value proposition are inspired by its commitment to comprehensive tax justice solutions for adoption by African countries. As collaborators, TAXA members and partners work together in:
            </h2>
        <div className="wrapper">
            <NavLink to={''} className="item" title='community engagement'>
                <img src={Taxa1} alt='taxa_community_engagements'/>
                <h3 >Community engagement</h3>
            </NavLink>
            <NavLink to={''} className="item" title='taxa policy influencing'>
                <img src={Taxa2} alt='taxa_policy_influencing'/>
                <h3 >Policy influencing</h3>
            </NavLink>
            <NavLink to={''} className="item" title='taxa capacity building'>
                <img src={Taxa3} alt='taxa_capacity_building'/>
                <h3 >Capacity building</h3>
            </NavLink>
            <NavLink to={''} className="item" title='taxa awareness raising'>
                <img src={Taxa4} alt='taxa_awareness_raising'/>
                <h3 >Awareness-raising</h3>
            </NavLink>
        </div>
    </section>
    );
}
export default Featured;