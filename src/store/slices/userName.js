import { createSlice } from "@reduxjs/toolkit";
const userNameSlice=createSlice({
    name:"userName",
    initialState:{userName:"Shams"},
    reducers:{
        changeUserName:(state,action)=>{
            state.userName=action.payload;
        }
    }
});
export const {changeUserName}=userNameSlice.actions;
export default userNameSlice.reducer;