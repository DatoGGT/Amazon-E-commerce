import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../ProductBox/ProductsSlice'
import SignInslice from '../SignIn/SignInslice'


export const store = configureStore({
    reducer: { 
        products : ProductsSlice,
        SignIn : SignInslice,
    }
})
