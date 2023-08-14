import { createSlice, configureStore } from "@reduxjs/toolkit";
import { jewelry, mens_wear, womens_wear, electronics } from "../assets";
interface CartItemProps {
  category: string;
  image: any;
  title: string;
  price: number;
  quantity: number;
  id: number;
}
type InitialState = {
  categories: any[];
  products: any[];
  cartItems: any[];
  itemsInCart: number;
  totalAmount: number;
};
const initialState: InitialState = {
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
  cartItems: [],
  itemsInCart: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    writeProducts: (state, action) => {
      state.products = action.payload;
    },
    // This reducer action takes an object as a payload when dispatched, this object contains all necessary fields for items in cart i.e Image, title, category, id, quantity...
    // To addToCart, there are two possible scenarios to check and handle. First is that the intended item to add to cart is a new item and doesn't exist yet in cart, the second scenario is that it is an existing item..
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload;
      // Check if item exists, if this returns undefined then it's a new item, else it's an existing one
      const existingItem: any = state.cartItems.find(
        (item: CartItemProps) => item.id === itemToAdd.id
      );
      // In a case where we find an existing Item, we only need to mutate some of its field such as the quantity so that this reflects as though the quantity was increased instead of adding it as a brand new item again..
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + itemToAdd.quantity;
        state.itemsInCart = state.itemsInCart + itemToAdd.quantity;
        state.totalAmount =
          state.totalAmount + itemToAdd.quantity * itemToAdd.price;
      }
      // In a case where existingItem returns undefined (item is a brand new one), we push it to the cartItems array and manipulate other data such as totalAmount and itemsInCart
      if (!existingItem) {
        state.cartItems.push(itemToAdd);
        state.itemsInCart = state.itemsInCart + itemToAdd.quantity;
        state.totalAmount =
          state.totalAmount + itemToAdd.price * itemToAdd.quantity;
      }
    },
    // This reducer action takes the "id" of the item to be deleted as the payload when dispatched, then filters the existing cartItems to return items that doesn't match the id.
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const itemToDelete: any = state.cartItems.find(
        (item: CartItemProps) => item.id === id
      );
      state.cartItems = state.cartItems.filter(
        (item: CartItemProps) => item.id !== id
      );
      state.itemsInCart = state.itemsInCart - itemToDelete.quantity;
      state.totalAmount =
        state.totalAmount - itemToDelete.quantity * itemToDelete.price;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const itemToIncrement: any = state.cartItems.find(
        (item: CartItemProps) => item.id === id
      );
      itemToIncrement.quantity = itemToIncrement.quantity + 1;
      state.totalAmount = state.totalAmount + itemToIncrement.price;
      state.itemsInCart = state.itemsInCart + 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const itemToDecrement: any = state.cartItems.find(
        (item: CartItemProps) => item.id === id
      );
      itemToDecrement.quantity = itemToDecrement.quantity - 1;
      state.totalAmount = state.totalAmount - itemToDecrement.price;
      state.itemsInCart = state.itemsInCart - 1;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
