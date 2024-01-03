import { INCREMENT_COUNTER } from "../ActionTypes"

export const increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER})
}