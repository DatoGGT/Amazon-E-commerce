import styled from 'styled-components'
import OffersSlider from '../Slider/OffersSlider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import productProducts from '../Fetch/ProductProducts'
import { setProductproducts } from '../ProductBox/ProductsSlice'
import { useNavigate } from 'react-router'






const Container = styled.div`
display: flex;
width: 100%;
height: 450px;
border-radius: 5%;
padding-top: 99px;
.allproducts{
    display:flex;
    flex-wrap:wrap;
    margin: 0 auto;
    width: 340px;
    height: 449px;
    gap: 22px;
    background-color:white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    
    } img {
    width: 130px;
    height: 105px;

    } small {
    margin-top:10px;
    }  .toybox {
    margin:0 auto;
    }  h3 {
    padding:10px 0 0 7px;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
    } .SeeMoreLink{
    margin-top: 15px;
    font-size: 14px;
    font-family: cursive;
    font-weight: bold;
} & a{
    color: #125a95;
    text-decoration: none;
} figure {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
}


`



const Newproductbox = () => {
    const getProducts = useSelector((state) => state.products.productProducts)
    const navigateToProd = useNavigate()
    const handlenavigate = (id) =>{
    navigateToProd(`/AboutProducts/${id}`)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        productProducts().then((res)=>{
        dispatch(setProductproducts(res))
        })
        
    },[dispatch])
    const firstFourProducts = getProducts.slice(0,4)
    const secFourProducts = getProducts.slice(4,8)
    const thirdFourProducts = getProducts.slice(8,12)
    const fourthFourProducts = getProducts.slice(13,17)
    return (
        <>
<Container>
        
<div className="allproducts">
            <h3>Last added</h3>
                {firstFourProducts.map((product)=>(
            <figure className="toybox" onClick={()=>handlenavigate(product.id)}>
            <img src={product.images} alt="" />
            <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
            </figure>
                ))}
            <nav className="SeeMoreLink">
                <a href="#">See More</a>
            </nav>
            </div>
            <div className="allproducts">
            <h3>Technics</h3>
                {secFourProducts.map((product)=>(
            <figure className="toybox" onClick={()=>handlenavigate(product.id)}>
            <img src={product.images} alt="" />
            <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
            </figure>
                
                ))}
            <nav className="SeeMoreLink">
                <a href="#">See More</a>
            </nav>
            </div>

            <div className="allproducts">
            <h3>Popular In Your Area</h3>
                {thirdFourProducts.map((product)=>(
            <figure className="toybox" onClick={()=>handlenavigate(product.id)}>
            <img src={product.images} alt="" />
            <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
            </figure>
                
                ))}
            <nav className="SeeMoreLink">
                <a href="#">See More</a>
            </nav>
            </div>
            <div className="allproducts">
            <h3>Top Deal</h3>
                {fourthFourProducts.map((product)=>(
            <figure className="toybox" onClick={()=>handlenavigate(product.id)}>
            <img src={product.images} alt="" />
            <small>{product.name.length > 20 ? product.name.slice(0,20) + '...' : product.name}</small>
            </figure>
                
                ))}
            <nav className="SeeMoreLink">
                <a href="#">See More</a>
            </nav>
            </div>
        
            </Container>
            <OffersSlider/>
            
        </>
        )
}


export default Newproductbox