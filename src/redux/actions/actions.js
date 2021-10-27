import {
    ADD_TO_CART,
    ADD_TO_FAVORITE,
    REMOVE_FROM_CART,
    REMOVE_FROM_FAVORITE
} from './types'

const addToCart=(product)=>{
  return  {
        type:ADD_TO_CART,
        payload:product   
    }
}

const addToFavorite=(product)=>{
    return  {
          type:ADD_TO_FAVORITE,
          payload:product   
      }
  }

  const removeFromCart=(product)=>{
    return  {
          type:REMOVE_FROM_CART,
          payload:product   
      }
  }
  const removeFromFavorite=(product)=>{
    return  {
          type:REMOVE_FROM_FAVORITE,
          payload:product   
      }
  }
