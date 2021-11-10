export const ADD_TO_CART = 'ADD_TO_CART'
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'
export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  }
}

export const addQuantity = (index) => {
  return {
    type: CHANGE_QUANTITY,
    index: index,
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}

export const subQuantity = (index) => {
  return {
    type: SUBTRACT_QUANTITY,
    index: index,
  }
}
