const Redux = require('redux')
const { combineReducers } = Redux 

const ADD_ENGINEER = 'ADD_ENGINEER'
const REMOVE_ENGINEER = 'REMOVE_ENGINEER'

const engineerById = (state = {}, action ) => {
    const newState = { ...state }
    switch(action.type){
        case ADD_ENGINEER: 
            newState[action.payload.id] = action.payload
            return newState
            
        case REMOVE_ENGINEER: 
            delete newState[action.payload.id]
            return newState

        default: return state
    }
}

const engineerIds = ( state = [], action ) => {
    switch(action.type) {
        case ADD_ENGINEER: return state.concat(action.payload.id)
        case REMOVE_ENGINEER: return state.filter( x => x!== action.payload.id)
        default: return state
    }
}

const engineerReducer = combineReducers({
    engineerById,
    engineerIds
})

export default engineerReducer