import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },

    clearCart: (state, action) => {
      state.splice(0, state.length);
    },

    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const indexToRemove = state.findIndex(item => item.id === idToRemove);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },

  // clearCart reducer already defined in adminSlice. It is used here with the help of extraReducer
  // extraReducers(builder){
  //   builder.addCase(clearCart, ()=>{
  //     return []
  //   })
  // }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer