import { useNavigate } from "react-router"
import styled from "styled-components"
import amazon from '../SignIn/signinimg/amazon.webp'
import Signinfooter from "../SignIn/Signinfooter"
import { useState } from "react"
import { baseAPI } from "../../Service/BaseAPI"
import { Link } from "react-router-dom"


const Mainbox = styled.div`
    width: 100%;
    height:737px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    .inputs {
        width: 365px;
    height: 500px;
    background-color: whitesmoke;
    border-radius: 5px;
   border-style: solid;
   border-color: #a9a9a9cd;
   border-width: 1px;
      
    } form {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 5px;
        & input{
            width: 345px;
            height: 29px;
            border-radius: 5px;
            border-color: #0000007b;
            margin: 0 auto;
        } label {
            margin-left: 7px;
        
        } button {
            width: 300px;
    height: 29px;
    border-radius: 10px;
    border-style:unset;
    margin: 10px auto;
    background-color:gold;
    cursor: pointer;
        }
    }
     .createacc {
        display: flex;
        margin:10px 0 10px 10px;
        align-items: center;
    } .privacy {
        display: block;
        margin-left:10px;
        & p  {
            font-size: 14px;
            
        }
        & a {
            font-size: 14px;
            text-decoration: none;
            color: #0066c0
        }

    } .underlines {
        width: 93%;
        height: 1px;
        background-color: #9d999930;
        margin: 10px auto;
    } .businessacc {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        & p {
            font-size:14px;
        } & a {
            font-size:14px;
            text-decoration: none;
            color: #0066c0
        }
    } .alreadyacc {
        display: flex;
        gap: 4px;
        margin-left: 10px;
        & p {
            font-size:14px;
        }
        & a {
            font-size:14px;
            text-decoration: none;
            color: #0066c0
        }
    } .underlines2 {
        margin: 10px auto;
        width: 60%;
        height: 1px;
        background-color: #8e87878a;
        box-shadow: 0 0 20px 1px grey;
        margin-top: 20px;
    }
    
`
const Amazonicon = styled.figure`
    display: flex;
justify-content: center;
width: 100%;
height: 100px;
img {
    width: 103px;
    height: 100%;
}


`

const Register = () => {
    const Signinnavigation = useNavigate();
    const [userRegistration, setUserRegistration] = useState({
        userName: '',
        email: '',
        password: '',
        repassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserRegistration((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        for (const key in userRegistration) {
            if (userRegistration[key].trim() === '') {
                alert("Fill in all inputs");
                return;
            }
        }


        if (userRegistration.password !== userRegistration.repassword) {
            alert("Passwords don't match");
            return; 
        }

        const modifyObj = { ...userRegistration };
        baseAPI.post("api/user/registerUser", modifyObj)
            .then(() => {
                Signinnavigation('/signin');
            })
            .catch((error) => {
                console.error("Registration failed:", error);
        
            });
    };
    
    return (
        <Mainbox>
            <Amazonicon>
                <Link to="/">
                <img src={amazon} alt="" />
                </Link>
            </Amazonicon>
            <div className="inputs">
            <div className="createacc">
            <h2>Create account</h2>
            </div>
            <form >
                <label htmlFor="userName">Your name</label>
                <input type="text" placeholder="First and last name" id="userName" name="userName" autoComplete="on" onChange={handleInputChange}/>
                <label htmlFor="email">Mobile number or email</label>
                <input type="email"  id="email" name="email" autoComplete="on" onChange={handleInputChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="At least 6 characters." id="password" name="password" autoComplete="on" onChange={handleInputChange} />
                <label htmlFor="repassword">Re-enter password</label>
                <input type="password" placeholder="Confirm Password" id="repassword" name="repassword" autoComplete="on" onChange={handleInputChange}/>
                <button type="submit" onClick={handleRegister}>Continue</button>
            </form>
            <div className="privacy">
                <p>By creating an account, you agree to Amazon's</p> <a href="#"> Conditions of Use </a> and <a href="#"> Privacy Notice </a>
            </div>
            <div className="underlines"></div>
            <div className="businessacc">
            <p>Buying for work?</p>
            <a href="#">Create a free business account</a>
            </div>
            <div className="underlines"></div>
            <div className="alreadyacc"> <p>Already have an account?</p> <a href="#" onClick={()=>Signinnavigation("/signin")}>Sign in</a></div>
            </div>
            <div className="underlines2"></div>
            <Signinfooter/>
        </Mainbox>



    )}




export default Register