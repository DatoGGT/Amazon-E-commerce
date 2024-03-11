import { baseAPI } from "../../Service/BaseAPI";


const ProductsId = async (id) => {
    const res = await baseAPI.get(`/api/product/products/${id}`)
    return res.data
    
}


export default ProductsId