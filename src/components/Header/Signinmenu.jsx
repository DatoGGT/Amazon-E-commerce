import orderarrow from "./images/arrow.png"
import React, { useState } from 'react';
import styled from 'styled-components';
import SignDropMenu from "./SignDropMenu";
import { useSelector } from "react-redux";

const ParentDiv=styled.div`
position: relative;
display: inline-block;
& .sigin{
display: flex;
align-items: center;
cursor: pointer;
} & .sigintext{
    color:white;
    font-size: 12px;
} & .sigintext1{
    color:white;
    font-size: 14px;
} & .arrowimg{
    width: 10px;
    height: 7px;
    padding-top: 25px;
}

`
const SiginMenu = styled.div`
position: absolute; 
margin-left: -274px;
background-color: white;
box-shadow: 10px 2px 5px rgba(0, 0, 0, 0.2);
width:509px;
height:auto;
z-index:1;
padding:15px 0;


`


const Signinmenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }
    const dropDown = () => {
        setIsDropdownOpen(true);
    }
const dropDownclose = () => {
    setIsDropdownOpen(false);
}
const token = localStorage.getItem("token")
const unique_name = useSelector((state)=>state.SignIn.unique_name)
    return (
        <ParentDiv>
            <div className="sigin"
            
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
            >
                <div>
                    <p className="sigintext">{token ? `Hello, ${unique_name}` : `Hello, Signin`}</p>
                    <h4 className="sigintext1">Account & Lists</h4>
                </div>
                <div>
                    <img  className="arrowimg" src={orderarrow} alt="" />
                </div>
            </div>
            {isDropdownOpen && (
                <SiginMenu
                
                    onMouseEnter={dropDown}
                    onMouseLeave={dropDownclose}
                >
            
                <SignDropMenu/>
                </SiginMenu>
            )}
        </ParentDiv>
    );
}

export default Signinmenu;
