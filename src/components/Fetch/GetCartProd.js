
import { baseAPI } from "../../Service/BaseAPI"
const GetCartProd = async () => {
    const token = localStorage.getItem("token")
    const res = await baseAPI.get("/api/cart/getmycartproducts",{headers: {Authorization: `Bearer ${token}`}})
    return res
}   


export default GetCartProd