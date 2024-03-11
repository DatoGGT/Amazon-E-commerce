import { styled } from "styled-components"
import d1 from './productimg/d1.jpg'
import d2 from './productimg/d2.jpg'
import d3 from './productimg/d3.jpg'
import d4 from './productimg/d4.jpg'
import d5 from './productimg/d5.jpg'
import d6 from './productimg/d6.jpg'
import d7 from './productimg/d11.jpg'
import d8 from './productimg/d8.jpg'
import d9 from './productimg/d9.jpg'
import d10 from './productimg/d10.jpg'
import { Link, useParams } from "react-router-dom"





const Container =styled.div`
display: flex;
width: 100%;
height: 436px;
.allproducts{
   display:flex;
flex-direction: column;
margin: 0 auto;
width: 340px;
height: 430px;
gap: 22px;
background-color:white;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
border-radius: 5px;
} img {
   width: 120px;
   height: 105px;
} small {
   margin-top:10px;
} .toys {
   margin:0 auto;
   width:260px;
   height: 310px;
} .toybox {
   margin:14px auto;
}  .toysh3 {
   margin:10px 0 0 7px
} .SeeMoreLink{
   margin-top: 15px;
   font-size: 14px;
   font-family: cursive;
font-weight: bold;
} & a{
color: #125a95;
text-decoration: none;
}  .FourimgDiv {
   display: flex;
flex-direction:column;
   width: 340px;
   height: 430px;
   background-color:white;
   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
   border-radius: 5px;
   margin: 0 auto;
}.FourimgBox {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
}.FlexDiv{
   display: flex;
   margin: 20px auto;
   gap: 35px;
}


`






const SecondBox = () => {
   
   return (
      <>
         <Container>
            <div className="FourimgDiv"> 
            <h3 className="toysh3">Deals in Fashion</h3>
            <div className="FlexDiv">
            <figure className="FourimgBox">
            <Link to="/AboutProducts"><img src={d1} alt=""/></Link>
            <small>Jeans Under 25$</small>
            </figure>
            <figure className="FourimgBox">
            <img src={d3} alt=""  />
            <small>Dresses under 20$</small>
            </figure>
            </div>
            <div className="FlexDiv">
            <figure  className="FourimgBox">
         <img src={d2} alt="" className="firstline"  />
         <small >Tops Under 25$</small> 
         </figure>
         <figure className="FourimgBox">
         <img src={d4} alt="" />
            <small>Shoes under 30$</small>
         </figure>
            </div>
         <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav> 
            </div>


            <div className="FourimgDiv">
            <h3 className="toysh3">Toys Under 25$</h3>
            <figure className="toybox">
               <img src={d5}alt="" className="toys" />
            </figure>
            <nav className="SeeMoreLink">
               <a href="#">Shop Now</a>
            </nav>
            </div>
            <div className="FourimgDiv">
               <h3 className="toysh3">Deals in PCs</h3>
            <figure className="toybox">
            <img src={d6} alt=""  className="toys"/>
            </figure>
            <nav className="SeeMoreLink">
               <a href="#">Shop Now</a>
            </nav>
            </div>


            <div className="FourimgDiv">
            <h3 className="toysh3">Special Host Gifts </h3>
            <div className="FlexDiv">

            <figure className="FourimgBox">
            <img src={d7} alt=""/>
            <small>Tabletop</small>
         </figure>
         <figure className="FourimgBox">
            <img src={d8} alt=""  className="firstline"/>
            <small >Candles</small>
         </figure>
            </div>
         <div className="FlexDiv">
         <figure className="FourimgBox">
            <img src={d9} alt="" className="linetwo2" />
            <small style={{fontSize:"11px"}} className="CoffeAndTable">Coffe And Table Books</small>
         </figure>
         <figure className="FourimgBox">
            <img src={d10} alt="" className="linetwo" />
            <small >Glassware</small>
         </figure>
         </div>
         <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav>
            </div>
         
            </Container>
            </>
    )
}



export default SecondBox