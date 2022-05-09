import { createSlice } from "@reduxjs/toolkit";
//To use user? in App. We will receive these states from LoginPage, Register and Logout
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:false,
    },
    reducers:{
        login: (state, action)=> {
            state.user = action.payload;
        },
        logout: (state)=> {
            state.user = false;
            
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state:any) => state.user.user; 

export default userSlice.reducer;