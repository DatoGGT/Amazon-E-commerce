import styled from "styled-components"
import avatar from './images/avatar.png'
import { useEffect, useState } from "react"
import MenuCategories from "./MenuCategories";
import { useSelector } from "react-redux";
const BurgerContainter = styled.div`
    width: 400px;
        height: 736px;
        top: 1px;
        background-color: white;
        position: fixed;
        z-index: 2;
        
      & .close {
        font-size: 40px;
        position: absolute;
        top: 1px;
        right: -30px;
        cursor: pointer;
        color: #000000;
        font-weight:bolder;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif 
      } .HelloCostumer {
        height: 50px;
        background-color:#232f3e;
        display: flex;
        align-items: center;
        gap: 10px;
      padding-left: 22px;
        & p {
        color: white;
        font-size: 24px;
      } .avatar {
        border-radius: 18px;
        width: 30px;
        height: 30px;
        
      }
      }
    
`

const BurgerMenu = ({handleclose}) => {
const [showBurgerContainer, setShowBurgerContainer] = useState(true)
const uniqueName = useSelector((state)=> state.SignIn.unique_name)

  const token = localStorage.getItem("token")
    return (
        <>
            {showBurgerContainer && (
        <BurgerContainter>
                <div className="HelloCostumer">
                    <div className="close" onClick={handleclose}>x</div>
                    <img src={avatar} alt="" className="avatar" />
                <p>{token ? `Hello,${uniqueName}` : `Hello, SignIn`}</p>
                </div>
                <MenuCategories/>
        </BurgerContainter>
            )}
    </>
);
};
    




export default BurgerMenu