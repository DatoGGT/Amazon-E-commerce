import styled from "styled-components"
import DescriptionComponent from "./DescriptionComponent"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import ProductsId from "../Fetch/ProductById"
import { setProductsById } from "../ProductBox/ProductsSlice"
import { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import location from "../Header/images/loca2.jpg"


const Container = styled.div`
display: flex;
width: 100%;

& .Img-Box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    gap: 10px;
    & img {
        border-radius: 6px;
        border-style: solid transparent;
        width: 70%;
        height: 10%;
        cursor: pointer;
    }
} .Bigimg {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 450px;
    height: 400px;
    & img {
        width: 90%;
        height: 90%;
    }
}
& .parent {
    display: flex;
justify-content: center;
width: 20%;
height: auto;
border-radius: 7px;
border: 0.5px solid gray;
background-color:whitesmoke;
}
& .listbut {
    margin-left: 15px;
}
& .ChilDiv{
    display: flex;
flex-direction: column;
width: 75%;
padding-top: 6px;
gap: 18px;
}
.someService{
    display: flex;
    gap: 30px;
} .service{
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 100%;
}   .line {
    width: 90%;
    height: 1px;
    background-color:grey;
} .addtolist {
    width: 80%;
    height: 25px;
    border-radius: 6px;
    border:1px solid gray;
} .instock {
    color: green;
    font-weight: 600;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
} .firstSpan {
    font-size: 13px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: grey;
} .delivery {
    font-size: 15px;
    
} .diliverySpan{
    font-size: 16px;
    font-weight: bolder;
} .deliveryGeo {
    font-size: 13px;
    color:#007188;
    font-family:cursive;
}.locationimg {
    width: 18px;
    height: 18px;
} .locationdiv {
    display: flex;
    gap: 5px;
} #quantity {
    width: 60px;
    height: 20px;
    border-radius: 8px;
    background-color:#777c7d24;
    border: 1px solid gray;
} .buynow {
    width: 100%;
    height: 25px;
    background-color: #fe8717;
    border-radius: 8px;
    border-style: none;
    text-align: center;
} .spani {
    font-size: 13px;
    color: grey;
} .amazoncom {
    font-size: 13px;

} 

`


const AboutProductIMGS = () => {
    const { id } = useParams()
    const dispatch =useDispatch()
    const ProductsID = useSelector((state)=>state.products.productsById)
    const [hoveredImage, setHoveredImage] = useState(null);
    
    
    useEffect(() => {
        ProductsId(id).then((res)=>{
            dispatch(setProductsById(res))
            
        })
    },[id,dispatch])






    
    
    if(!ProductsID.images){
        return <span class="loader"></span>
    }
    return (
        <Container>
            <figure className="Img-Box">
            {ProductsID.images.map((image,index )=>{
                return (
                    <img src={image} 
                    key={index} 
                    alt="img"
                    onMouseOver={() => setHoveredImage(image)}/>
                )
            })}
            </figure>
            <figure className="Bigimg">
                <img src={hoveredImage || ProductsID.images[0]} alt="" />
            </figure>

            <DescriptionComponent />



            <div className="parent">
            <div className="ChilDiv">
            <h2>Price 99evron</h2>
            <span className="firstSpan">No Import Fees Deposit & $18.36 Shipping to Georgia</span>
            <p className="delivery">Delivery <span className="diliverySpan">Friday, January 26</span></p>
            <div className="locationdiv">
        <img src={location} alt=""  className="locationimg"/>
            <span className="deliveryGeo">Delivery To Georgia</span>
            </div>
            <h4  className="instock">In Stock</h4>



<select id="quantity" >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
<Cart />
<button className="buynow">Buy Now</button>
<button className="addtocart" >Add to Cart</button>
<div className="someService">
    <div className="service">
        <span className="spani">Ships from</span>
        <span className="spani">Sold by</span>
        
        
    </div>
    <div className="service">
        <span className="amazoncom">Amazon.com</span>
        <span className="amazoncom">Amazon.com</span>
            
    
    </div>
</div>




</div>
</div>
        </Container>
    )
}

export default AboutProductIMGS