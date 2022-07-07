import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {logInInsert} from './reportSlice'



export const getBooks = createAsyncThunk('book/getBooks' ,async (_, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch ('http://localhost:3005/books',{
            method:'GET'
        });
        const data = await res.json ();
        return data;
    }catch (error) {
        return rejectWithValue(error.message);
    }
})

export const insertBook = createAsyncThunk('book/insertBook',
async(bookData, thunkAPI) => {
    const {rejectWithValue, getState, dispatch} = thunkAPI;
    try {
        bookData.userName = getState().auth.name;
        const response = await fetch(
        'http://localhost:3005/books',
        {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
        const data = await response.json();
        dispatch(  logInInsert( {name:'inserBooks',status:'success'} )  )
        return data
    }
    catch (error){
        dispatch(logInInsert({name:'inserBooks',status:'faild'}))
        return rejectWithValue(error.message);
    }
})
export const deleteBook = createAsyncThunk('book/deleteBook',
    async(id, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            await fetch(`http://localhost:3005/books/${id}`,
                {
                    method: 'Delete',
                    headers: {
                    'Content-Type': 'application/json',
                },
                }
            )
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
});





const bookSlice = createSlice({
    name:'book',
    initialState:{book:[], isLoading: false, error:null},
    extraReducers:{
    [getBooks.pending]:(state, action)=> {
        state.isLoading = true;
        state.error = null;
    },
    [getBooks.fulfilled]:(state, action)=> {
        state.isLoading = false;
        state.book = [...state.book, ...action.payload];
    },
    [getBooks.rejected]:(state, action)=> {
        state.isLoading = false;
        state.error = action.payload;
    },
    /*********************************/
    [insertBook.pending]:(state, action)=> {
        state.isLoading = true;
        state.error = null;
    },
    [insertBook.fulfilled]:(state, action)=> {
        state.isLoading = false;
        state.book.push(action.payload);  
    },
    [insertBook.rejected]:(state, action)=> {
        state.isLoading = false;
        state.error = action.payload;
    },
    /*******************************************/
    [deleteBook.pending]:(state, action)=> {
        state.isLoading = true;
        state.error = null;
    },
    [deleteBook.fulfilled]:(state, action)=> {
        state.isLoading = false;
        console.log (action);
        state.book = state.book.filter((el) => el.id !== action.payload);
    },
    [deleteBook.rejected]:(state, action)=> {
        state.isLoading = false;
        state.error = action.payload;
    }
    
    }
}) 

export default bookSlice.reducer;