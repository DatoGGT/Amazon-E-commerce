import { useNavigate } from "react-router"
import styled from "styled-components"




const PARENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:30px 0 30px 0;
    height: 110px;
    
   
h4{
    font-weight: 400;
    font-size:15px;
    color: #000000;
    line-height: 15px;
} div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
} button {
    width: 14.375rem;
    line-height: 1.625rem;
    margin-block: 0.313rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    color: black;
    text-shadow: rgb(255, 224, 147) 0px 1px 0px;
    border: 1px solid rgb(230, 164, 0);
    border-radius: 0.313rem;
    background: linear-gradient(0deg, rgb(255, 195, 40) 25%, rgb(255, 217, 120) 100%);
}
 a {
    text-decoration: none;
    color: #0404ffb5;
}

`
const Maindiv = styled.div`
width: 99%;
height: 200px;
background-color:whitesmoke;
border-style: solid;
   border-color: #a9a9a9cd;
   border-width: 1px;
   border-radius: 5px;
   .reco {
       display: flex;
       flex-direction: column;
       gap:10px;
   }
  
`



const Signin = () => {
    const NavigateSignin = useNavigate()
    
    return (
        <PARENT>
            <Maindiv>
            <div className="reco">
           <h4>See personalized recommendations</h4>
           <div>
           <button onClick={()=> NavigateSignin("/SignIn")}>Sign in</button>
           </div>
           <small>New costumer? <a href="#">Start here.</a> </small>
            </div>
        </Maindiv>
            
        </PARENT>
    )
}



export default Signin