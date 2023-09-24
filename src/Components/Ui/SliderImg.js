"use client"
import React, { useState } from 'react';
import './slider.css'
import IMAGES from '@/../public/index';



const SliderImg = () => {
    
    const imgs=[
        {id:0,value: IMAGES.img5},
        {id:1,value:"https://owlcarousel2.github.io/OwlCarousel2/assets/img/feature-module.png"},
        {id:2,value:"https://owlcarousel2.github.io/OwlCarousel2/assets/img/feature-modern.png"},
    ];


    const [sliderData,setSliderData]=useState(imgs[0])
    const handleclick = (index)=>{
        const slider=imgs[index];
        setSliderData(slider);
    }

  return (
    <div className='App'>
      <img src={sliderData.value} height="300" width="500" />
      <div className='flex_row'>

        {
          imgs.map((data,i)=>
          <img key={data.id} src={data.value} onClick={()=>handleclick(i)} height="70" width="100" />
          )
        }
        </div>
    </div>
  )
}

export default SliderImg