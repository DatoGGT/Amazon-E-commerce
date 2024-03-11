import styled from 'styled-components'
import Footerlogo from './Footerlogo'
import Bottomfooter from './Bottomfooter'
import { useLocation } from 'react-router'
const FOOTER=styled.footer`
    height: 200px;
& .backTop{
    display: flex;
   justify-content: center;
   align-items: center;
    width: 100%;
    height: 40px;
    border-style: none;
    background-color:#37475a;
    font-size: 14px;
    color: white;
}& .services{
    height: 333px;
display: flex;
justify-content:space-around;
padding-top: 33px;
background-color:#232F3E;
}& p{
    color: white;
    font-size:17px;
}& nav ul li {
    list-style: none;
    box-sizing: border-box;
    padding-top: 8px;
} & a {
    color:#DDD;
    text-decoration: none;
} 

`

const backToTop = () => {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth"
    });
}

const Footer = () => {
    const location = useLocation()
    const hideFooter = ['/SignIn', '/CreateAccount'].includes(location.pathname)
    if(hideFooter) {
        return null
    }
    return (
        <FOOTER>
    <button className='backTop' onClick={backToTop}>Back To Top</button>

      

    <div className='services'>
     <nav>
        <p>Get to Know Us</p>
       <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Amazon</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Amazon Devices</a></li>
        <li><a href="#">Amazon Science</a></li>
       </ul>
     </nav>
     <nav>
        <p>Make Money with Us</p>
        <ul>
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
            <li><a href="#">Host an Amazon Hub</a></li>
            <li><a href="#">›See More Make Money <br /> with Us</a></li>
        </ul>
     </nav>
     <nav>
        <p>Amazon Payment Products</p>
        <ul>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Amazon Currency Converter</a></li>
        </ul>
    </nav>
    <nav>
        <p>Let Us Help You</p>
        <ul>
            <li><a href="#">Amazon and COVID- <br />19</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & <br /> Policies</a></li>
            <li><a href="#">Returns & <br />Replacements</a></li>
            <li><a href="#">Manage Your <br />Content and Devices</a></li>
            <li><a href="#">Amazon Assistant</a></li>
            <li><a href="#">Help</a></li>
        </ul>
    </nav>

    </div>
        <Footerlogo/>
        <Bottomfooter/>
        </FOOTER>
    
    )


    }


export default Footer