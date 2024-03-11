import { baseAPI } from "../../Service/BaseAPI"


const productProducts = async () => {
    const res = await baseAPI.get("/api/product/products?PageSize=" + 20)
    
  return res.data;
    
}

export default productProducts