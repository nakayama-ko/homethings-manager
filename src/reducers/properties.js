import { ADD, EDIT, REMOVE, LOAD } from '../actions'

const initialState = { 
    thingsList: [ { name:'foo', location: 'bar', memo:'baz' } ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            alert('ADD')
            return state
        case EDIT:
            return ({
                thingsList: state.thingsList
            })
        case REMOVE:
            alert('REMOVE')
            return state
        case LOAD:
            return ({
                thingsList: state.thingsList
            })
        default:
            return state
    }
}