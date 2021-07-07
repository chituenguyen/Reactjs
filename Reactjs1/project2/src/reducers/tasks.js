import * as types from './../constants/ActionTypes'
var IdFunction = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}
var findIndex = (tasks, id) => {
    var result = -1
    tasks.forEach((item, index) => {
        if (item.id === id) {
            result = index
        }
    }
    )
    return result
}
var data = JSON.parse(localStorage.getItem('tasks'))
var intialState = data ? data : []
var myReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            if (action.task.id) {
                var newTask = {
                    id: action.task.id,
                    name: action.task.name,
                    status: action.task.status === 'true' ? true : false
                }
                var id = action.task.id
                var index=findIndex(state, id)
                state[index]=newTask
            }
            else {
                var newTask = {
                    id: IdFunction(),
                    name: action.task.name,
                    status: action.task.status === 'true' ? true : false
                }
                state.push(newTask)
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.UPDATE_STATUS:
            var id = action.id
            var index = findIndex(state, id)
            if (index !== -1) {
                var newItem = {
                    id: state[index].id,
                    name: state[index].name,
                    status: !state[index].status
                }
                state[index] = newItem
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        case types.DELETE:
            var id = action.id
            var index = findIndex(state, id)
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default: return state
    }
}

export default myReducer