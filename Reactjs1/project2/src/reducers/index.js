import {combineReducers} from 'redux';
import tasks from './tasks'
import isDisplay from './isDisplay'
import edit from './edit'
import filter from './filter'
const myReducer =combineReducers({
    tasks,
    isDisplay,
    edit,
    filter
});
export default myReducer