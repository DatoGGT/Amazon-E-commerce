import { styled } from "styled-components"
import SecondBox from './SecondBox'
import Carousell from '../Carousell/MostDemandCarousell'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "./ProductsSlice"
import mostdemand from "../Fetch/MostDemandProducts"
import { Link, useNavigate } from "react-router-dom";

const Parent = styled.div`
transform: translateY(-27%);
display: flex;
flex-direction: column;
gap: 70px;

`



const Container =styled.div`
display: flex;
width: 100%;

.allproducts{
   display:flex;
   flex-wrap:wrap;
   margin: 0 auto;
   width: 340px;
   gap: 22px;
   background-color:white;
   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
   border-radius: 5px; 
   & h3 {
      padding:10px 0 0 10px ;
      width:100%;
   }
} img {
   width: 125px;
   height: 120px;
margin: 9px 0 0 0;
   cursor: pointer;
   
} figure {
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   
   justify-content: center;
   align-items: center;
} .SeeMoreLink{
   padding:0 0 10px 10px;
   font-size: 14px;
   font-family: cursive;
font-weight: bold;
} & a{
   color: #125a95;
   text-decoration: none;
} 


`


const Carousel = styled.div`
width: 97%;
height: 290px;
margin: 0 auto;
border-radius: 5px;
background-color: whitesmoke;
& .deals {
   margin:13px 0 13px 10px;
& .excitingdeals{
      font-weight: bold;
      font-family: cursive;
   }
}
`



const Productss = () => {
   const Getmostdemand = useSelector((state)=>state.products.mostproducts)
   const LatestProducts = useSelector((state)=>state.products.latestproducts)
   const TopDeal = useSelector((state)=>state.products.offers)
   const DealsAndPromotions = useSelector((state)=>state.products.productProducts)
   const dispatch = useDispatch()
   useEffect(() => {
      mostdemand().then((res)=>{
         dispatch(setProducts(res))
      
      })
      },[dispatch])

const navigate = useNavigate()
const handleNavigate = (id) => {
   navigate(`/AboutProducts/${id}`)
}
const notFound = () => {
   navigate('/*')
}
   return (
<>

   <Parent>
      <Container>
            <div className="allproducts">
            <h3>Most Demand</h3>
               {Getmostdemand.slice(0,4).map((product)=>(
                  <figure onClick={()=>handleNavigate(product.id)}>
                  
                     <img src={product.images} alt="" />
                     <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
                  </figure>
               ))}
               <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav>
            </div>
            <div className="allproducts">
            <h3>Latest Products</h3>
               {LatestProducts.slice(0,4).map((product)=>(
                  <figure onClick={()=>handleNavigate(product.id)}>
                     <img src={product.images} alt="" />
                     <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
                  </figure>
               ))}
               <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav>
            </div>
            <div className="allproducts">
            <h3>Top Deal</h3>
               {TopDeal.slice(0,4).map((product)=>(
                  <figure onClick={()=> notFound()}>
                     <img src={product.image} alt="" />
                     <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
                  </figure>
               ))}
               <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav>
            </div>
            <div className="allproducts">
               <h3>Deals & Promotions</h3>
               {DealsAndPromotions.slice(3,7).map((product)=>(
                  <figure onClick={()=>handleNavigate(product.id)}>
                     <img src={product.images} alt="" />
                     <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
                  </figure>
               ))}
               <nav className="SeeMoreLink">
            <a href="">See More</a>
         </nav>
            </div>
      </Container>
      <SecondBox/> 

      <Carousel>
         <div className="deals">
         <h3 className="excitingdeals">Most Demand Products</h3>
         </div> 
      <Carousell/>
      </Carousel>
      </Parent>
      </>
      )
}


export default Productss

