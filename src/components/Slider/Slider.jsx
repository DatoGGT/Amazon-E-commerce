import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Sliderimg from './SliderImage/card1.jpg'
import Sliderimg2 from './SliderImage/card2.jpg'
import Sliderimg3 from './SliderImage/card3.jpg'
import Sliderimg4 from './SliderImage/card4.jpg'
import Sliderimg5 from './SliderImage/card5.jpg'
import Sliderimg6 from './SliderImage/card6.jpg'
import styled from 'styled-components'

const Sliderimgs = styled.div `
width: 1518px;
height: 600px;
box-shadow: 0 3px 20px lightblue ;
mask-image: linear-gradient(black 59%, transparent 100%);
img {
    width: 100%;
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 90px;
    color: #000000;
    opacity: 1;
    line-height: 1;
    
}


    
`

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position:"absolute", right:"90px", top:"146px", zIndex:"1"}}
        onClick={onClick}
      />
    );
  }
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute", left:"20px",top:"144px", zIndex:"1"}}
      onClick={onClick}
    />
  );
}

const SimpleSlider = () => {    
    const settings = {
        infinite: true,
        dots:false,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <>
        <Sliderimgs>

        <Slider {...settings}>

          <div className='sliderimages'>
        <img src={Sliderimg} alt=""  />
          </div>
          <div className='sliderimages'>
            <img src={Sliderimg2} alt="" />
          </div>
          <div className='sliderimages'>
            <img src={Sliderimg3} alt="" />
          </div>
          <div className='sliderimages'>
            <img src={Sliderimg4} alt="" />
          </div>
          <div className='sliderimages'>
            <img src={Sliderimg5} alt="" />
          </div>
          <div className='sliderimages'>
            <img src={Sliderimg6} alt="" />
          </div>
          
        </Slider>

      </Sliderimgs>
      </>
    );
    
}


export default  SimpleSlider