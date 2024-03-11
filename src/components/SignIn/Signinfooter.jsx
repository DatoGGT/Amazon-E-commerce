import styled from "styled-components"

const Links = styled.div`
        display: flex;
        gap: 20px;
        margin-top: 20px;
   a {
        font-size: 13px;
        text-decoration: none;
        color: #0066c0;
    }

`
const Amazoni = styled.div`
    display: block;
    & h4 {
        font-size: 12px;
        color:#555;
        margin-top: 17px;
    }
`

const Signinfooter = () => {
    return (
        <>
            <Links>
                    <a href="#"> Conditions of Use </a>
                    <a href="#"> Privacy Notice </a>
                    <a href="#"> Help </a>
                </Links>
    
                <Amazoni>
                <h4 >© 1996-2023, Amazon.com, Inc. or its affiliates</h4> 
                </Amazoni>
                </>
    )
}

export default Signinfooter





