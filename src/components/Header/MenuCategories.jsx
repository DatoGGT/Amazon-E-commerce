import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import productCategories from "../Fetch/Categories"
import { setproductCategories } from "../ProductBox/ProductsSlice"
import { useNavigate, useParams } from "react-router"

const Parentdiv = styled.div`  
display: flex;
flex-direction: column;
justify-content: center;
gap: 29px;

& nav ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    font-size: 18px;
    cursor: pointer;
    & h2 {
        padding: 15px 0 0 30px;
    }
} nav ul li {
    padding-left: 30px;
    height: 35px;
    
}
nav ul li:hover {

    background-color: #8080804a;
}

`






const MenuCategories = () => {

        const getCategories = useSelector((state) => state.products.productCategories)
        const dispatch = useDispatch()


        useEffect(() => {
            productCategories().then((res) => {
                dispatch(setproductCategories(res))
            })
        }, [dispatch])

        
        

    
        const navigate = useNavigate()
    const navigateToCategory = (categoryId) => {
        navigate(`/Category/${categoryId}`)
    }
        
    return (

        <Parentdiv>
            <nav>
                <ul>
                <h2>Categories</h2>
                    {getCategories.map((category,index) => (
                        <li onClick={() => navigateToCategory(category.id)} key={index}>{category.name}</li>
                        
                    ))}
                    
                </ul>
            </nav>

        </Parentdiv>
    )
}





export default MenuCategories




