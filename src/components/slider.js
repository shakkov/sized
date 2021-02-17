import React from 'react'
import './slider.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';





const slider = () => {
 
   
    return (
        <div className='slider'>
        <Splide
        options={ {
            type         : 'loop',
            autoWidth : true,
            autoplay     : true,
            resetProgress: false,
            arrows       : 'slider',
            gap :20,
            interval: 2500,
        } }>
      
        
        <SplideSlide>
          <img src="png/1.png" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="png/2.png" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="png/3.png" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="png/4.png" alt="Image 2"/>
        </SplideSlide>
      </Splide>
      </div>

      
    )
       
}


export default slider
