import * as types from './../constants/ActionTypes'

var initinal=false
var myReducer = (state=initinal,action)=>{
    switch(action.type){
        case types.TOOGLE_FORM:
            return !state 
        case types.OPEN_FORM:
            return true
        case types.CLOSE_FORM:
            return false
        default:return state
    }
}
export default myReducer