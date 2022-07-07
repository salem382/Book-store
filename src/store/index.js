import { configureStore } from "@reduxjs/toolkit";
import books from './Slice';
import auth from './authSlice';
import report from './reportSlice'
export default  configureStore({
    reducer:{
        books,
        auth,
        report
    }   
})
