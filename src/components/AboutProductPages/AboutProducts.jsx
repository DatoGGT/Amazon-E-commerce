import styled from "styled-components"
import AboutProductIMGS from "./AboutProductIMGS"



const MainContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
& .child {
    display: flex;
    margin: 5px 8px;
} 

`


const AboutProducts = () => {


    return (
        <>
                
        <MainContainer>
            <div className="child">
        <AboutProductIMGS/>
        </div>
        </MainContainer>
        </>
    )
}


export default AboutProducts