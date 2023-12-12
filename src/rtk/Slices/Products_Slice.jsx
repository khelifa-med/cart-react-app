import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const Fetch_Products = createAsyncThunk('Products_Slice/Fetch_Products' , async ()=> {

    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()
    console.log(data)
    return data
    
})

export const Products_Slice = createSlice({
    initialState: [],
    name:'Products_Slice',
    reducers: {}
    ,

    extraReducers :(builder)=> {

        // builder.addCase(Fetch_Products.pending , (state,action) =>{
        //   return (<h1>Loding The Data Wait For a Moment...</h1>)
        // })

        // builder.addCase(Fetch_Products.rejected , (state,action) =>{
        //     return console.error('There no data');
        // })

        builder.addCase(Fetch_Products.fulfilled, (state,action)=>{
           return state = action.payload
        })
    }

})

export const {} = Products_Slice.actions

export default Products_Slice.reducer