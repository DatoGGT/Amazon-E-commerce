import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import mostdemand from "../Fetch/MostDemandProducts";
import { setProducts } from "../ProductBox/ProductsSlice";
import c1 from "../Carousell/carouselimg/b1.jpg"
import c2 from "../Carousell/carouselimg/b2.jpg"
import c3 from "../Carousell/carouselimg/b3.jpg"
import c4 from "../Carousell/carouselimg/b4.jpg"
import c5 from "../Carousell/carouselimg/b5.jpg"
import c6 from "../Carousell/carouselimg/b6.jpg"
import c7 from "../Carousell/carouselimg/b7.jpg"
import c8 from "../Carousell/carouselimg/b8.jpg"
import c9 from "../Carousell/carouselimg/b9.jpg"
import c10 from "../Carousell/carouselimg/b10.jpg"
import c11 from "../Carousell/carouselimg/b11.jpg"
import c12 from "../Carousell/carouselimg/b12.jpg"
import c13 from "../Carousell/carouselimg/b13.jpg"
import c14 from "../Carousell/carouselimg/b14.jpg"
import c15 from "../Carousell/carouselimg/b15.jpg"
import c16 from "../Carousell/carouselimg/b16.jpg"
import c17 from "../Carousell/carouselimg/b17.jpg"
import Latestcarousell from "./Latestproductscarousel.jsx";
import { useNavigate } from "react-router";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position:"absolute", right:"90px",}}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
const { className, style, onClick } = props;
return (
  <div
    className={className}
    style={{ ...style, display: "block", position:"absolute", left:"20px", zIndex:"1"}}
    onClick={onClick}
  />
);
}

const Secsliderimg = styled.div `
 
  .Carouselimg {
    display: flex !important;
    gap: 14px;
  } .slick-prev:before{
    font-size: 60px;
  }.slick-prev:before, .slick-next:before {
    font-size: 60px;
    font-weight: bold;
    color: #000000d0;
  }figure{
    display: flex;
    gap: 40px;
    cursor: pointer;
    & img {
      width: 185px;
      height: 195px;
    }
  }  .Carouselimg2 {
    display: flex !important;
    gap: 24px;
  } 

`
const LatestCaroulselDiv = styled.div `
margin-top: 80px;

`


const MostdemandCarousell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
        prevArrow: <PrevArrow />,
  };
  const Getmostdemandcarousel = useSelector((state)=>state.products.mostproducts)
  const dispatch = useDispatch()
  const [backEndError, setBackEndError] = useState(false);
  const navigateToProd = useNavigate()
  const handlenavigate = (id) =>{
    navigateToProd(`/AboutProducts/${id}`)
}
  useEffect(() => {
    mostdemand().then((res)=>{
      if (res && res.length > 0) {
        dispatch(setProducts(res))
      } else {
        setBackEndError(true)
      }
    }) .catch ((error) => {
      console.error("Error fetching data from backend:", error);
      setBackEndError(true)
  })
  },[dispatch])

  return (
    
    <>
    <Secsliderimg>
      {!backEndError? (

    <Slider {...settings}>
      <figure className="Carouselimg">
        {Getmostdemandcarousel.map((product) => (
        <figure onClick={()=>handlenavigate(product.id)}>
        <img src={product.images[1]} alt="" />
        <img src={product.images[3]} alt="" />
      <img src={product.images[2]} alt="" />
        </figure>
      ))}
        
      </figure>
      <div>
      </div>
      
    </Slider>
      ) : (
        // Display imported images if there's a backend error
        <Slider {...settings}>
        <div className="Carouselimg2">
          <img src={c1} alt="Image" />
          <img src={c2} alt="Image" />
          <img src={c3} alt="Image" />
          <img src={c4} alt="Image" />
          <img src={c5} alt="Image" />
          <img src={c7} alt="Image" />
          <img src={c8} alt="Image" />
          <img src={c9} alt="Image" />
          <img src={c10} alt="Image" />
          <img src={c11} alt="Image" />
          <img src={c6} alt="Image" />
          <img src={c12} alt="Image" />
          <img src={c13} alt="Image" />
          <img src={c14} alt="Image" />
          <img src={c15} alt="Image" />
          <img src={c16} alt="Image" />
          <img src={c17} alt="Image" />
          
        </div>
        <div></div>
      </Slider>
      )
    }
    </Secsliderimg>

    <LatestCaroulselDiv>
    <Latestcarousell/>
    </LatestCaroulselDiv>
    </>
  ) }


  export default MostdemandCarousell