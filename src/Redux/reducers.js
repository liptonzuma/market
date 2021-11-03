const initialState ={
    cart :[],
    favorite: []
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart:state.cart.filter(e=> e !== payload)
            }
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorite:state.favorite.concat(action.payload)
            }
        case 'REMOVE_FROM_FAVORITE':
            return{
                ...state,
                favorite:state.favorite.filter(e=> e !== action.payload)
            }
    }
}

export default reducer;