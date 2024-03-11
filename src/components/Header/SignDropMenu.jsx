
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { styled } from "styled-components"
import { handleLogOut } from "../SignIn/SignInslice"



const SignInnerTxt = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    & .customerdiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
& .signin{
    width: 50%;
    height: 30px;
    border-radius: 7px;
    border-style: none;
    background-color:#FFD814;
    cursor: pointer;
} & .newcustomer{
    font-size: 13px;
    margin-top: 10px;
    color:#353434;
} & .starthere{
    font-size: 12px;
    color:#0611ee;
} & .flinediv{
    width: 90%;
    height: 1px;
    background-color: #bdb6b6;
    margin-top: 5px;
} & .firstlist ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin:18px 0 0 25px;
    gap: 5px;
    
}
    & .seclinediv {
        width: 2px;
        height: 250px;
        margin-top: 7px;
        background-color: #bdb6b6;
    } & .forlist {
    display: flex;
    width: 100%;
    gap: 80px;
    } & .secondlist ul{
        display: flex;
    flex-direction: column;
        list-style: none;
        gap: 5px;
        font-size: 14px;
    }
    .signout{
        width: 40%;
        font-size: 13px;
        border-radius: 2px;
        border-style: none;
        cursor: pointer;
    }

`





const SignDropMenu = () => {

    
    const dispatch=useDispatch()
    const NavigateToSignIn=useNavigate()
    const token = localStorage.getItem("token")
    
    return (
        <SignInnerTxt>
            <div className="customerdiv">
            
        
        <button className="signin" onClick={() => NavigateToSignIn("/SignIn")}>Sign in</button>
    
        <p className="newcustomer">New Customer? <a className="starthere">Start Here.</a></p>
        <div className="flinediv"></div>
            </div>

        <div className="forlist">
        <nav className="firstlist">
            <ul>
                <li>Your Lists</li>
                <li>Create a List</li>
                <li>Find a List Or Registry</li>
            </ul>
        </nav>
<div className="seclinediv"></div>
<div>
<nav className="secondlist">
    <ul>
    <li>Your Account</li>
    <li>Account</li>
    <li>Orders</li>
    <li>Recommendations</li>
    <li>Browsing History</li>
    <li>Watchlist</li>
    <li>Video Purchases & Rentals</li>
    <li>Kindle Unlimited</li>
    <li>Content & Devices</li>
    <li>Subscribe & Save Items</li>
    <li>Memberships & Subscriptions</li>
    <li>Music Library</li>
    {token && <button className="signout" onClick={() => dispatch(handleLogOut())}>&#x2971;Sign out</button>}
    </ul>
</nav>

        
</div>

        </div>

        </SignInnerTxt>
    )
}
export default SignDropMenu


















