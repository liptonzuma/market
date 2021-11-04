import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE
 } from "./actions"

const initialState ={
    cart :[],
    favorite: []
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter(e=> e !== payload)
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorite:state.favorite.concat(action.payload)
            }
        case REMOVE_FROM_FAVORITE:
            return{
                ...state,
                favorite:state.favorite.filter(e=> e !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;