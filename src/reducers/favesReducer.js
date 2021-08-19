import { TOGGLE_FAVES, ADD_FAVE, REMOVE_FAVE } from './../actions/favesActions' 

const initialState = {
    favorites:[],
    displayFavorites:false
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_FAVE:
            const newFave = {...action.payload}
            return {
                ...state, favorites:[...state.favorites,newFave]
            }
        case REMOVE_FAVE:
            return {
                ...state, favorites:state.favorites.filter(fave => fave.id !== action.payload)
            }
        case TOGGLE_FAVES:
            return {
                ...state, displayFavorites: !state.displayFavorites
            }
        default:
            return state
    }
}

export default reducer