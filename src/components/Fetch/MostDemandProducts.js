import { baseAPI } from "../../Service/BaseAPI"


const mostdemand = async () => {
    const res = await baseAPI.get("/api/product/mostdemandproducts")
  return res.data;
    
}

export default mostdemand