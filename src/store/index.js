import {createSlice,configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const authSlice = createSlice({
  name: 'user',
  initialState: [],

});




export const store = configureStore({
  reducer:{
    user:userReducer,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck:false,
  }),
});