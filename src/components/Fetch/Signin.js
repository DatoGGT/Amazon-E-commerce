import { baseAPI } from "../../Service/BaseAPI";




    const signIn =  (DataObj) => baseAPI.post('/api/User/LogIn', DataObj);

    
    
export default signIn;