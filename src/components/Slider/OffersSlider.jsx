
import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import { setOffers } from "../ProductBox/ProductsSlice";
import offers from "../Fetch/Offers";
import c1 from "../Carousell/carouselimg/caru1.jpg"
import c2 from "../Carousell/carouselimg/caru2.jpg"
import c3 from "../Carousell/carouselimg/caru3.jpg"
import c4 from "../Carousell/carouselimg/caru4.jpg"
import c5 from "../Carousell/carouselimg/caru5.jpg"
import c6 from "../Carousell/carouselimg/caru6.jpg"
import c7 from "../Carousell/carouselimg/caru7.jpg"
import c8 from "../Carousell/carouselimg/caru8.jpg"
import c9 from "../Carousell/carouselimg/caru9.jpg"
import c10 from "../Carousell/carouselimg/caru10.jpg"
import c11 from "../Carousell/carouselimg/caru11.jpg"
import c12 from "../Carousell/carouselimg/caru12.jpg"
import c13 from "../Carousell/carouselimg/caru13.jpg"
import c14 from "../Carousell/carouselimg/caru14.jpg"
import c15 from "../Carousell/carouselimg/caru15.jpg"
import c16 from "../Carousell/carouselimg/caru16.jpg"
import c17 from "../Carousell/carouselimg/caru17.jpg"




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



const Offersdiv = styled.div`
background-color:whitesmoke;
width: 97%;
height: 40%;
margin: 40px auto;
border-radius:5px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
& h2 {
    font-weight: bold;
    font-family: cursive;
    
}
.offersimg{
    display: flex !important;
    justify-content: space-around;
    padding-top: 20px;
}.slick-prev:before{
    font-size: 60px;
    }.slick-prev:before, .slick-next:before {
    font-size: 60px;
    font-weight: bold;
    color: #000000da
} .figurewrapper{
    display: flex;
    justify-content: center ;
    align-items: center;
    & figure {
      cursor: pointer;
    }
    }
    img {
    width: 175px;
      height: 190px;
    }.productprice{
    display: flex;
    flex-direction: column;
    } .offersspan{
    display: flex;
    gap: 18px;
    align-items: center;
    padding: 14px 0 0 12px;
    & a {
        text-decoration:none;
        font-size: 15px;
        color: blue;
        font-family: cursive;
    }
    } .oldprice {
    font-size: 14px;
    text-decoration: line-through ;
    color: #434040;
    } .newprice {
    font-size: 18px;
    font-weight: bold;
    color: red;
    } .offersimg2 {
display: flex !important;
gap:20px;
    }


`


const OffersSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <PrevArrow />,
  };
  const offersproduct = useSelector((state) => state.products.offers);
  const dispatch = useDispatch();
  const [backendError, setBackendError] = useState(false);

  useEffect(() => {
    offers()
      .then((res) => {
        if (res && res.length > 0) {
          dispatch(setOffers(res));
        } else {
          setBackendError(true); 
        }
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
        setBackendError(true); 
      });
  }, [dispatch]);

  return (
    <Offersdiv>
      <div className="offersspan">
        <h2>Offers</h2>
        <a href="#">See more</a>
      </div>
      {!backendError ? (
        <Slider {...settings}>
          <div className="offersimg">
            {offersproduct.map((product) => (
              <div className="figurewrapper">
                <figure key={product.id}>
                  <img src={product.image} alt="" />
                  <div className="productprice">
                    <span>
                      {product.name.length > 20
                        ? product.name.slice(0, 20) + "..."
                        : product.name}
                    </span>
                    <span className="newprice">{"$" + product.newPrice}</span>
                    <span>
                      List price:{" "}
                      <small className="oldprice">
                        {"$" + product.oldPrice}
                      </small>
                    </span>
                  </div>
                </figure>
                
              </div>
            ))}
          </div>
          <div></div>
        </Slider>
        
      ) : (
        // Display imported images if there's a backend error
        <Slider {...settings}>
        <div className="offersimg2">
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
      )}
      
    </Offersdiv>
  );
};

export default OffersSlider



