import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoggedIn: false,
    error: null,
    exp:0,
    iat:0,
    email:"",
    nameid:"",
    nbf:0,
    role:"",
    unique_name:"",
    }

const SigninSlice = createSlice({
    name:"SignIn",
    initialState,
    reducers:{
        signInSuccess(state, action) {
            const token = localStorage.getItem("token")
            if(token){
            state.isLoggedIn = true;
            state.error = null;
            }
            
                for(let key in action.payload){
                    state[key] = action.payload[key]
                }
            
        },
        signInFailure(state, action) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        handleLogOut(state)  {
            for(let key in initialState){
                state[key] = initialState[key]
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        }
    }
})



export const { signInSuccess, signInFailure, handleLogOut} = SigninSlice.actions;
export default SigninSlice.reducer




