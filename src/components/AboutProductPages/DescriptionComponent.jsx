import { useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50% ;
    gap: 10px;

    & .F-line-G{
    width:100%;
    height: 1px;
    background-color: gray;
} .BrandAndMore {
    display: flex;
    gap: 70px;

} .List {
    display: flex;
    flex-direction: column;
}

`
const DescriptionComponent = () => {
    const ProductID = useSelector((state) => state.products.productsById)
if(!ProductID.name){
    return <h2>Loading...</h2>
}
    return (
        <Container>
        <h1>{ProductID.name}</h1>
    
        
        <span> <ReactStars count={5} color2={'#ffd700'} edit={true} size={25}   /> </span>
        <small>+500 reviews</small>
        <div className="F-line-G"></div>
        <span>Price: $ {ProductID.price}</span>
        <span>Brand:  {ProductID.brand}</span>
        <span>Model:  {ProductID.model}</span>
        <div className="F-line-G"></div>
            <h2>About Item </h2>
            <p>{ProductID.description}</p>
        
        
        </Container>
    )
}

export default DescriptionComponent