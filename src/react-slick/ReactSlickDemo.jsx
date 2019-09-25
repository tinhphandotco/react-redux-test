import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_style.css";

export default function ReactSlickDemo() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <div className="ReactSlickDemo">
      <h1>React slick demo</h1>
      <Slider {...settings}>
        {
          Array(6).fill('slick-box').map((className, i) => (
            <div key={i} className='slick-box'>
              <h1>{i}</h1>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
