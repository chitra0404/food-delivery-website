import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"userInfo",
    initialState:{
        user_data:{
            phonenumber:"",
            name:"",
            email:"",
            password:""
        }
    },
    reducers:{
        loginUser:(state,action)=>{
            state.user_data=action.payload
        },
        logoutUser:(state,action)=>{
            state.user_data={phonenumber:"",name:"",email:"",password:""}
        }      
    }
})

export const {loginUser,logoutUser}=userSlice.actions;

export default userSlice.reducer;