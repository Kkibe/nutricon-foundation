import React from 'react';
import './Loader.scss';
export default function Loader() {
  return (
<div className="loader">
  <div className="bit b12" style={{transform: 'rotate(0deg) translateY(-160px)'}} ></div>
  <div className="bit b11" style={{transform: 'rotate(30deg) translateY(-160px)'}}></div>
  <div className="bit b10" style={{transform: 'rotate(60deg) translateY(-160px)'}}></div>
  <div className="bit b9" style={{transform: 'rotate(90deg) translateY(-160px)'}}></div>
  <div className="bit b8" style={{transform: 'rotate(120deg) translateY(-160px)'}}></div>
  <div className="bit b7" style={{transform: 'rotate(150deg) translateY(-160px)'}}></div>
  <div className="bit b6" style={{transform: 'rotate(180deg) translateY(-160px)'}}></div>
  <div className="bit b5" style={{transform: 'rotate(210deg) translateY(-160px)'}}></div>
  <div className="bit b4" style={{transform: 'rotate(240deg) translateY(-160px)'}}></div>
  <div className="bit b3" style={{transform: 'rotate(270deg) translateY(-160px)'}}></div>
  <div className="bit b2" style={{transform: 'rotate(300deg) translateY(-160px)'}}></div>
  <div className="bit b1" style={{transform: 'rotate(360deg) translateY(-160px)'}}></div>
</div>
  );
}