import amazonLogo from "./images/amazon-logo.png";
import styled from 'styled-components';
import locationIcon from "./images/loca.png";
import SearchBar from "./SearchBar";
import Signin from "./Signinmenu";
import Orders from "./Orders";
import Underheader from "./Underheader";
import Language from "./Language";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { signInSuccess } from "../SignIn/SignInslice";
import { useDispatch } from "react-redux";
import {jwtDecode} from "jwt-decode";
import CartMarkup from "./CartMarkup";





const HEADER=styled.header`
display: flex;
justify-content: space-between;
align-items: center;
gap: 9px;
box-sizing: border-box;
padding:0 10px;
height: 60px;
background-color: #000000;
    & figure {
    width: 120px;
    } & img {
    width: 90%;
    } & .deliver{
        color:lightgray;
    } & .georgia{
        color: white;
    }& .delivertogeorgia{
        margin-right:15px;
    }



`
const LINK=styled.a`
display: flex;
align-items: center;
    text-decoration: none;

`
const LOCATIONICON=styled.div`
padding-top:9px;
width: 20px;
height: 10px;

`

const Header = () => { 
    const location = useLocation();


  const hideHeaderForRoutes = ['/SignIn', '/CreateAccount'].includes(location.pathname);

  if (hideHeaderForRoutes) {
    return null;
  }
    const dispatch = useDispatch();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if(token) {
            const user = jwtDecode(token);

            dispatch(signInSuccess(user));
        }
        
    }, [dispatch])
    
    return (
        <>
<HEADER>
    <Link to="/">
    <figure>
        <img src={amazonLogo} alt="" className="amazonlogo" />
    </figure>
    </Link>

    
        <LINK href="">
    <LOCATIONICON>
        <img src={locationIcon} alt="" />
    </LOCATIONICON>
        <div className="delivertogeorgia">
    <small className="deliver">Deliver to <br /> </small>
    <span className="georgia">Georgia</span>
        </div>
        </LINK>
<SearchBar/>
<Language/>
<Signin/>
<Orders/>
<CartMarkup/>
</HEADER>
<Underheader/>
</>
    )
}








export default Header