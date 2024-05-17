import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart/cartSlice'; 
import darkModeReducer from './Darkmode/darkModeSlice';



export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    darkMode: darkModeReducer,
    
  },
});
