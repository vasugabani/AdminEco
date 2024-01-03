import { GET_POSTS } from "../ActionTypes"

const initialState = {
    isLoading: false,
    posts: [],
    error: null
}

export const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}