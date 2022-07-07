import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'auth',
    initialState:{isLogIn:false , name : 'Ahmed Salem'},
    reducers:{
        logIn:(state) => {
            state.isLogIn = !state.isLogIn;
        }
    }
})
export default authSlice.reducer;

export const {logIn} = authSlice.actions;

