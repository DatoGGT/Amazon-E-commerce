import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { setProductproducts } from "../ProductBox/ProductsSlice"
import productProducts from "../Fetch/ProductProducts"
import styled from "styled-components"
import notfound from "./img/notfound.png"
// ფასების ფილტრის დროს დასჭირდება შეცვლა სტილების
const Parent = styled.div`
display: flex;
padding: 100px 0;
height: 50%;
gap: 20px;
    .child {
    display: flex;
    flex-direction: column;
    padding-top:20px;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 1px;
    border-color:transparent;
    width: 20%;

}
    .aboutProd{
    display: flex;
    justify-content: space-between;
    width: 85%;
    padding: 10px 0;
    & h3 {
        font-size: 17px;
    }
    & p {
        font-size: 15px;
        color: #4f4949;
    }
} .description {
    width: 85%;
    height: 20%;
    & p {
        font-size: 15px;
    }


}
button {
    width: 85%;
    height: 40px;
    border-radius: 5px;
    border-style: none;
    background-color: #facc15;
    color: white;
    cursor: pointer;
    margin: 20px 0;
    font-weight: 500;   

}
button:hover {
background-color: #ebbe06;
}
.Prices{
    display: flex;
    padding:20px 0 0 20px;
    flex-direction: column;
    padding-left: 20px;
    gap: 30px;
    width: 15%;
    height: 400px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius:2px;
    
}
.notfound{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 120px;
}
`


const Category = () => {
    const getCategories = useSelector((state) => state.products.productProducts)
    const navigateToProd = useNavigate()
    const handlenavigate = (id) =>{
        navigateToProd(`/AboutProducts/${id}`)
    }
    const {id} = useParams()
    
    const dispatch = useDispatch()
    useEffect(() => {
        productProducts(id).then((res) => {
            dispatch(setProductproducts(res))
        })
    }, [dispatch,id])
    
    return (
        <Parent>
            <div className="Prices">
                    <h2>Filter by Price</h2>

                <form>
                    <div>

                    <input type="radio" id="under10" name="price" value="under10$" />
                    <label htmlFor="under10"> Under 10$</label> 
                    </div>
                    

                <div>

                    <input type="radio" id="10to20" name="price" value="$10to$20" />
                    <label htmlFor="10to20"> $10 to $20</label>
                </div>
                    

                <div>

                    <input type="radio"  id="20to30" name="price" value="$20to$30"/>
                    <label htmlFor="20to30"> $20 to $30</label>
                </div>
                    

                <div>

                    <input type="radio" id="30to50" name="price" value="$30to$50" />
                    <label htmlFor="30to50"> $30 to $50</label>
                </div>
                    

                <div>

                    <input type="radio" id="50andabove" name="price" value="$50andabove" />
                    <label htmlFor="50andabove"> $50 and above</label>
                </div>
                    
                </form>
                    
                
            </div>

            {getCategories.map((product) => {
        if (product.categoryId === id) {
        return (
        <div className="child" key={product.id}>
        <figure>
            <img src={product.images} alt="" style={{ width: "200px", height: "200px" }} />
        </figure>
        <div className="aboutProd">
            <h4>{product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name}</h4>
            <p>{"$" + product.price}</p>
        </div>
        <div className="description">
            <p>{product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}</p>
        </div>
        <button onClick={() => handlenavigate(product.id)}>See More</button>
        </div>
        );
        } 
    })}
        {getCategories.every(product => product.categoryId !== id) && (
            <figure className="notfound">
                <img src={notfound} alt="" />
            </figure>

    )}

    
        </Parent>
    )
}


export default Category