import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ViewMore.css'
import { display, flexbox } from '@mui/system';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

export default function ViewMore() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [showContent, setShowContent] = useState(false);

    const handleViewMore = () => {
      setShowContent(true);
    };
  return (
    <div className='view'>
          <div className='d-flex justify-content-center mt-1' >
      {!showContent && (
        <button onClick={handleViewMore} className='btn btn-dark ps-4 pe-4 pt-2 pb-2'>View More</button>
      )}

    </div>
    {showContent && (
        <div>
         <div className="slider-container-1 container p-4" >
         <Slider {...settings}>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.c1uD1MYRWe-qDmB7iZNjBgHaE9?w=293&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.IeVGEpKL7jrrJEavM73IogHaEk?w=271&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.xZy01t2g2X1yYA_GaCG7zQHaEL?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.FsU55nWtsX9BrIt7AF1Z8wHaDz?w=336&h=179&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.6n0VEqDia5AhJf7oS4v79gHaEH?w=299&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
           <div className='shadow  more-cards'>
            <img src="https://th.bing.com/th/id/OIP.u-tb5F1JyJNkuxXTCiQMjAHaEo?w=238&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""   className='image-in-carousel'/>
             <h3  className='text-light ps-4 pt-2'>headings</h3>
             <p className='ps-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
              <div className='ps-4 pt-2 pb-4'>
             <button className='btn btn-secondary '>Click Here</button>
             </div>
           </div>
          
           
         </Slider>
       </div>
       </div>
      )}
    </div>
  )
}
