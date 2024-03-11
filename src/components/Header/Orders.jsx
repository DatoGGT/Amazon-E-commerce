import styled from "styled-components"

 const Parentdiv = styled.div`
 & p {
    color: white;
 }
 & h4 {
    color: white;
 }

 `




const Orders = () => {
    return (
        <Parentdiv>
            <p>Returns</p> 
            <h4>& Orders</h4>
        </Parentdiv>
    )
    
}



export default Orders