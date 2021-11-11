import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  CLEAR_CART,
  SUBTRACT_QUANTITY,
} from '../actions/actions'

const initialState = {
  cart: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.filter((e) => e.id === action.product.id).length > 0) {
        state.cart.find((e) => {
          if (e.id === action.product.id) {
            e.quantity += 1
            e.price = e.oldPrice * e.quantity
          }
        })
        return { ...state }
      }

      return {
        ...state,
        cart: [...state.cart, action.product],
      }
    case CHANGE_QUANTITY:
      state.cart[action.index].quantity += 1
      state.cart[action.index].price =
        state.cart[action.index].oldPrice * state.cart[action.index].quantity
      return {
        ...state,
        cart: [...state.cart],
      }
    case SUBTRACT_QUANTITY:
      if (state.cart[action.index].quantity > 1) {
        state.cart[action.index].quantity -= 1
        state.cart[action.index].price =
          state.cart[action.index].price - state.cart[action.index].oldPrice
      } else if (state.cart[action.index].quantity === 1) {
        state.cart[action.index].quantity -= 1
        return { ...state, cart: state.cart.filter((e) => e.quantity !== 0) }
      }
      return {
        ...state,
        cart: [...state.cart],
      }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      }

    default:
      return state
  }
}
