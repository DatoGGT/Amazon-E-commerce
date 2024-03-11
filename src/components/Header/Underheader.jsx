import styled from 'styled-components';
import burgermenuPic from "./images/burger-menu.png"
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import { useSelector } from 'react-redux';
const Underheaderdiv = styled.div`
display: flex;
align-items: center;
    width: 100%;
    height: 35px;
    background-color:#232f3e;
    & img {
        width: 22px;
        height: 23px;
        cursor: pointer;
    } & .navlist{
        color: white; 
        padding-left: 1rem;
    list-style: none;
    display: flex;
    gap:30px;
    align-items: center;
    height: 100%;
    
    
}
        & .navlist li {
        color: white;
        cursor: pointer;
        border: 2px solid transparent;
    } 
        figure {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: white;
        cursor: pointer;
} 
    .navlist li:hover{
    border: 2px  solid white;
    
    }

`
const Underheader = () => {
    

    const [openBurgermenu, setopenBurgermenu] = useState(false)
    const getCategoryNames = useSelector(state => state.products.productCategories)

    const DropBurgermenu = () => {
        setopenBurgermenu(!openBurgermenu)
        
    }
    const handleclose = () => {
        setopenBurgermenu(false)
    }
    return (
        <Underheaderdiv>
    
            {openBurgermenu &&  <BurgerMenu handleclose={handleclose} />}
            <nav>
            <ul  class="navlist">
                
                <figure onClick={DropBurgermenu} >
                <img src={burgermenuPic} alt=""   />
                All
            </figure>
            
                <li>Amazon Basics</li>
                <li>Pet Supplies</li>
                <li>Today's Deal</li>
                <li>Beauty & Personal Care</li>
                <li>Handmade</li>
            </ul>
            </nav>
            
        </Underheaderdiv>
    )
}



export default Underheader