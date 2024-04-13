import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Reducer/UserReducer";
export default configureStore({
   reducer:{ userInfo:userSlice }
})