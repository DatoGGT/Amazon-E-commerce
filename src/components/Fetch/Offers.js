import { baseAPI } from "../../Service/BaseAPI"


const offers = async () => {
    const res = await baseAPI.get("/api/product/offers")
  return res.data;
    
}

export default offers