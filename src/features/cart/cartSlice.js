import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: "Mediterranean",
  //       quantity: 2,
  //       unitPice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      // Clear the cart
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

export const getCurrentQuantityById = (pizzaId) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0;

//reselect thư viện giúp giảm số lần tính toán lại giá trị khi state không thay đổi
