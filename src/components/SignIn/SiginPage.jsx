
import styled from 'styled-components'
import icon from './signinimg/amazon.webp'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Signinfooter from './Signinfooter'
import { useDispatch, useSelector } from 'react-redux'
import signIn from '../Fetch/Signin'
import { jwtDecode } from 'jwt-decode'
import { signInSuccess } from './SignInslice'
import { Link } from 'react-router-dom'

const ParentDiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 410px;
& .terms {
    display: flex;
    flex-direction: column;
}
& .SignText {
    display: flex;
    flex-direction: column;
    gap: 13px;
}
.signbox {
    width: 365px;
    height: 440px;
    background-color: whitesmoke;
    border-radius: 5px;
   border-style: solid;
   border-color: #a9a9a9cd;
   border-width: 1px;
    
} .content {
    display: flex;
    flex-direction: column;
    margin: 34px 0 0 34px;
} figure{
    display: flex;
    height:100%;
}
input {
    width: 300px;
    height: 29px;
    border-radius: 5px;
    border-color: #0000007b;
    box-shadow: 0 0 1px 1px aqua;
    
    margin-top:5px;
} button {
    width: 300px;
    height: 29px;
    border-radius: 10px;
    border-style:unset;
    margin-top:9px;
    background-color:gold;
    cursor: pointer;
    
} p {
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.5;
} a {
        text-decoration: none;
        color: #0066c0;
        font-weight: 600;
        cursor: pointer;
    }  .help {
        display: flex;
        align-items: center;
        width: 100%;
        height: 25px;
        margin-top: 20px;
    } .helpdrop {
        margin-left: 40px;
    } .underline {
        margin: 10px auto;
        width: 80%;
        height: 1px;
        background-color: #8e87878a;
    } .buy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 34px;
        gap: 10px;
    } & h2 {
        font-size: 15px;
    } 
  
`
const Imgdiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100px;
img {
    width: 100%;
    height: 100%;
}

`
const Newacc = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    width: 100%;
    height: 174px;
    margin-top: 50px;
    button {
        width: 300px;
        height: 29px;
        border-radius: 7px;
        border-style:unset;
        margin-top:13px;
        cursor: pointer;
        border-style: solid;
        background-color:white;
   border-color: #a9a9a9cd;
   border-width: 2px;
    } h5 {
        font-size: 15px;
        color: #808080df;
    } .underline2 {
        margin: 10px auto;
        width: 60%;
        height: 1px;
        background-color: #8e87878a;
        box-shadow: 0 0 20px 1px grey;
        margin-top: 20px;
    } 
 
`
const Mainbox = styled.div`
height: 735px;
background-color: white;
    
`
const HelpDropdown = styled.div`
  .helpdrop {
    display: block;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }.dropdownmenu {
      height: auto;
        display: flex;
        flex-direction: column;
        & span {
            padding-top: 20px;
        }
        &  a {
      display: block;
      text-decoration: none;
      color: #333;
      padding: 5px 0 0 40px;
      font-size: 13px;
      color:#0066c0 ;
      &:hover {
        text-decoration: underline;
      }
    } 
    } 
 
`;



const SiginPage = () => {

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);}
        const NavigateRegister = useNavigate();

        const handleNavigate = () =>{
        NavigateRegister('/CreateAccount')
        }


        const dispatch = useDispatch()
const handleSigin = async () => {
    const user = await signIn(userLogin)
    if (user.data.jwt) {

        localStorage.setItem('token', user.data.jwt)

        const token = jwtDecode(user.data.jwt)
        

        dispatch(signInSuccess(token))
        
        window.location.href = '/'
    }
}


const handleChange = (e) => {
    e.preventDefault()
}


const handleInput = (e) => {
    const { name, value } = e.target
    setUserLogin({ ...userLogin, [name]: value })
}

    return (
        <Mainbox>
        <Imgdiv>
            <figure>
        <Link to='/'>
                <img src={icon} alt="" />
                </Link>
            </figure>
            </Imgdiv>
        <ParentDiv>
            <div className='signbox'>
                <form className='content' onSubmit={handleChange}>
                <div className='SignText'>
            <h1>Sign in</h1> 
            <span>Email or mobile phone number</span>
            </div>
            <input type="text"  onChange={handleInput} name="email" value={userLogin.email} autoComplete=''/>
            <input type="password" onChange={handleInput} name="password" value={userLogin.password}/>
            <button onClick={handleSigin}>Continue</button>
            <div className='terms'>
            <p>By continuing, you agree to Amazon's <a href="#">Conditions of  Use and <br /> Privacy Notice.</a></p>   

            </div>
                </form>
                
                <HelpDropdown showDropdown={showDropdown}>
         
          <div className='dropdownmenu'>
          <span className='helpdrop' onClick={toggleDropdown}>Need help?</span>
            {showDropdown && <a href='#'>Forgot your password?</a>}
            {showDropdown && <a href='#'>Other issues with Sign-In</a>}
            </div>
         
        </HelpDropdown>
                
                <div className='underline'></div>
                <div className='buy'>
                    <h2>Buying for work?</h2>
                    <a href="">Shop on Amazon Business</a>
                </div>
            </div>
        </ParentDiv>
                <Newacc>
                   <h5>New to Amazon?</h5> 
                   <button onClick={handleNavigate}>Create your Amazon account</button>
                   <div className='underline2'></div>
                   <Signinfooter/>
                </Newacc>
        </Mainbox>
        
    )
}



export default SiginPage