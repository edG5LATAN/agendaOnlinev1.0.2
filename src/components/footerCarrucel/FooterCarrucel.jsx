import React from 'react'
import './FooterCarrucel.css'
import { dataSlider } from '../../service/serviceCarrucel/Service.js';

function FooterCarrucel() {
  
  return (
    <div className="slider mb-2" style={{ "--width": "120px", "--height": "120px", "--quantity":"10" }}>
      <div className="list">
        {dataSlider.map((res, index) => {
          return (
            <img key={index} style={{"--position":index+1}} className="item" src={res.image} alt="imagen" />
          );
        })}
      </div>
    </div>
  )
}

export default FooterCarrucel
