import cart from "./images/cartimage.png"
import styled from 'styled-components';

const CARTDIV=styled.div`
display: flex;
align-items: center;
position: relative;
& .cartimg{
    width: 50px;
} & .cartspan {
    color: white;
    margin-top: 10px;
}
& .sum{
    color: #fffcfc;
    position: absolute;
    top: 0;
    left:25px;
}

`
const CartMarkup = () => {
    return (
        

        <CARTDIV> 
        <img src={cart} alt="" className="cartimg"/>
        <span className="cartspan">Cart</span>
        <span className="sum">0</span>
    
        </CARTDIV>
        
    )
}


export default CartMarkup