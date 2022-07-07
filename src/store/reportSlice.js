import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name:'report',
    initialState:{logs:[]},
    reducers:{
        logInInsert:(state, action) => {
            state.logs.push(action.payload);
        }
    }
})
export default reportSlice.reducer;

export const {logInInsert} = reportSlice.actions;
