import styled from 'styled-components';
import footerlogo from './footerimages/amazonfooter.png'
import {BsGlobe} from 'react-icons/bs'
import footerflag from './footerimages/footerflag.png'
const CONTAINER=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
    width: 100%;
    height: 90px;
    background-color:#232f3e;
& .footerflagimg{
    width: 30px;
} & .BetweenFooter{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 30px;
    border:2px solid gray;
    font-size: 16px;
    border-radius: 5px;
    color: #c8c5c5;
} & .footeramazonlogo{
    box-sizing: border-box;
    padding-right: 50px;
} & .amazonlogofot {
    width: 80%;
}

`

const Footerlogo = () => {
    return (
        <CONTAINER>
            <figure className='footeramazonlogo'>
                <img src={footerlogo} alt=""  className='amazonlogofot'/>
            </figure>

            <div className='BetweenFooter'>
        <BsGlobe/>
        <small>English</small>
            </div>

            <div className='BetweenFooter'>
                <small>$ USD - U.S. Dollar</small>
            </div>

            <div className='BetweenFooter'>
                <img src={footerflag} alt="" className='footerflagimg'/>
                <small>United States</small>
            </div>
        </CONTAINER>
    )
}



export default Footerlogo