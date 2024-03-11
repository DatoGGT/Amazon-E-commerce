import { createSlice } from "@reduxjs/toolkit"


    const ProductsSlice = createSlice({
        name: "products",
        initialState: {
            mostproducts: [],
            latestproducts:[],
            offers:[],
            productProducts: [],
            productCategories: [],
            productsById: [],
            cartItems: [],
        },
        reducers: {
            setProducts(state, action) {
                state.mostproducts = action.payload
            },
            setLatestproduct(state, action) {
                state.latestproducts = action.payload
            },
            setOffers (state, action) {
                state.offers = action.payload
            },
            setProductproducts (state, action) {
                state.productProducts = action.payload
            },
            setproductCategories (state, action) {
                state.productCategories = action.payload
                
            },
            setProductsById (state, action) {
                state.productsById = action.payload
            },
        
        
        } 
    })




    export const { setProducts, setLatestproduct,setOffers, setProductproducts, setproductCategories, setProductsById} = ProductsSlice.actions
    export default ProductsSlice.reducer