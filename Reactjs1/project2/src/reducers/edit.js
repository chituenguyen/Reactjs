import * as types from './../constants/ActionTypes'


var intialState = {
    id:'',
    name:'',
    status:false
}
var myReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.EDIT:
            return action.task
        default: return state

    }
}

export default myReducer