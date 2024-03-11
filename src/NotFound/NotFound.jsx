import styled from "styled-components"
import notfound from "./img/404.jpg"
import { Link } from "react-router-dom"

const  Parent = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content: center;
    height: 600px;
    padding:20px 0;
    background-image: url(${notfound});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    button{
        width: 200px;
        height: 50px;
        border-radius: 5px;
        border-style: none;
        background-color: #fbf306;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        color: #000000;
        margin-bottom: 60px;
        &:hover{
            
            background-color: #e7e7e7;

        }
    }



`
const NotFound = () => {

    return (
        <Parent>
        <Link to="/"> <button>Back To Home</button></Link>
        </Parent>
    )
}


export default NotFound