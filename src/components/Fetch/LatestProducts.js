
import { baseAPI } from "../../Service/BaseAPI"
const LatestProducts = async () => {
    const res = await baseAPI.get("/api/product/latestproducts")
  
  return res.data;
    
}

export default LatestProducts