import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { postReducer } from "./posts.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postReducer
})