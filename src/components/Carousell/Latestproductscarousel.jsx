import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import LatestProducts from "../Fetch/LatestProducts";
import { setLatestproduct } from "../ProductBox/ProductsSlice";
import c1 from "../Carousell/carouselimg/c1.jpg"
import c2 from "../Carousell/carouselimg/c2.jpg"
import c3 from "../Carousell/carouselimg/c3.jpg"
import c4 from "../Carousell/carouselimg/c4.jpg"
import c5 from "../Carousell/carouselimg/c5.jpg"
import c6 from "../Carousell/carouselimg/c6.jpg"
import c7 from "../Carousell/carouselimg/c7.jpg"
import c8 from "../Carousell/carouselimg/c8.jpg"
import c9 from "../Carousell/carouselimg/c9.jpg"
import c10 from "../Carousell/carouselimg/c10.jpg"
import c11 from "../Carousell/carouselimg/c11.jpg"
import c12 from "../Carousell/carouselimg/c12.jpg"
import c13 from "../Carousell/carouselimg/c13.jpg"
import c14 from "../Carousell/carouselimg/c14.jpg"
import c15 from "../Carousell/carouselimg/c15.jpg"
import c16 from "../Carousell/carouselimg/c16.jpg"
import c17 from "../Carousell/carouselimg/c17.jpg"
import c18 from "../Carousell/carouselimg/c18.jpg"
import c19 from "../Carousell/carouselimg/c19.jpg"
import c20 from "../Carousell/carouselimg/c20.jpg"
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

const Secsliderimg2 = styled.div `
    background-color:whitesmoke;
    width: 100%;
    height: 290px;
    border-radius: 5px;
    & .latestspan {
    padding:10px 0 0 10px;
    }
    .secCarouselimg {
    display: flex !important;
    gap: 14px;
    margin-top: 2px;
    } .slick-prev:before{
    font-size: 60px;
    }.slick-prev:before, .slick-next:before {
    font-size: 60px;
    font-weight: bold;
    color: #000000d0;
    } span{
    font-size: 20px;
  font-weight: bold;
  font-family: cursive;
    } figure {
    display: flex;
    gap: 30px;
    cursor: pointer;
& img {
  width: 185px;
  height: 195px;
    }  

    }.secCarouselimg2 {
    display: flex !important;
    gap: 24px;
    }
    
`



const Latestcarousell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <PrevArrow />,
  };
  const Getlatestproducts = useSelector((state)=>state.products.latestproducts)
  const latestdispatch = useDispatch()
  const [backEndError, setBackEndError] = useState(false);
  const navigateToProd = useNavigate()
  const handlenavigate = (id) =>{
    navigateToProd(`/AboutProducts/${id}`)
}
  useEffect(()=>{
    LatestProducts().then((res)=>{
      if (res && res.length > 0){
        latestdispatch(setLatestproduct(res))
      } else {
        setBackEndError(true)
      }
    })
    .catch((error)=>{
      console.error("Error fetching data from backend:", error);
      setBackEndError(true)
    })
  },[latestdispatch])
  return (
    <>
    <Secsliderimg2>
      <div className="latestspan">
        <span>Latest Products</span>
      </div>
      {!backEndError ? (

    <Slider {...settings}>
      <figure className="secCarouselimg" >
        {Getlatestproducts.map((product) => (
          <figure onClick={()=>handlenavigate(product.id)}>
            <img src={product.images[1]} alt="" />
            <img src={product.images[3]} alt="" />
            <img src={product.images[2]} alt="" />
            <img src={product.images[4]} alt="" /> 
          </figure>
        ))}
        
      </figure>
      <div>
      
      </div>
    </Slider>
      ) : (
 // Display imported images if there's a backend error
 <Slider {...settings}>
 <figure className="secCarouselimg2">
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
   <img src={c18} alt="Image" />
   <img src={c19} alt="Image" />
   <img src={c20} alt="Image" />
   
 </figure>
 <div></div>
</Slider>
      )}
      
    </Secsliderimg2>
   <div>
    
   </div>
    </>
  ) }


  export default Latestcarousell