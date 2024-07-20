import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedTab:"add-product",
}
const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers:{
    changeTab:(state,action)=>{
      state.selectedTab = action.payload;
    }
  }
});
export const {changeTab} = tabSlice.actions;
export default tabSlice.reducer;