
import { baseAPI } from "../../Service/BaseAPI"
const Categories = async () => {
    const res = await baseAPI.get("/api/product/categories")
    return res.data
}   


export default Categories