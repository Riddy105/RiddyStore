import { createSlice, configureStore } from "@reduxjs/toolkit";
import { jewelry, mens_wear, womens_wear, electronics } from "../assets";
const initialState = {
  categories: [
    {
      name: `men's clothing`,
      id: "mens_clothing",
      cover: mens_wear,
    },
    {
      name: `women's clothing`,
      id: "womens_clothing",
      cover: womens_wear,
    },
    {
      name: `electronics`,
      id: "electronics",
      cover: electronics,
    },
    {
      name: `jewelery`,
      id: "jewelry",
      cover: jewelry,
    },
  ],
  products: [],
};
const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    writeProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
