import * as types from './../constants/ActionTypes'


var intialState = {
    name:'',
    status:-1
}
var myReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            action.filter.status=parseInt(action.filter.status)
            return action.filter
        default: return state

    }
}

export default myReducer