import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice'; 
import darkModeReducer from './Darkmode/darkModeSlice';
import apiData from './API/apiCallSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    darkMode: darkModeReducer,
    apiData: apiData
  },
});
