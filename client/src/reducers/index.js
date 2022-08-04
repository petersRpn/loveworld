import { combineReducers } from "redux"
import posts from './postReducer'

const reducer = combineReducers({
    posts,
})

export default reducer;