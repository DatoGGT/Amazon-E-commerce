
import { baseAPI } from "../../Service/BaseAPI"
const PostInCart = async (id) => {
    const token = localStorage.getItem("token")
    const res = await baseAPI.post("/api/cart/addincart",{productId:id},{headers: {Authorization: `Bearer ${token}`}})
    return res.data
}   


export default PostInCart