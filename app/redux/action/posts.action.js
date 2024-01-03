import { getAllPostAPI } from "../../common/api/posts.api"
import { GET_POSTS } from "../ActionTypes"

export const getPosts = () => (dispatch) => {
    getAllPostAPI()
        .then((response) => dispatch({type: GET_POSTS, payload: response.data}))
        .catch((error) => console.log(error))
}