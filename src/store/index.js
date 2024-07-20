import {createSlice,configureStore, combineReducers} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tabReducer from "./tabSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({user:userReducer,tab:tabReducer});
const persistConfig = {
  key:'root',
  version:1,
  storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer:
    persistedReducer
  ,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck:false,
  }),
});
export const persistor = persistStore(store);