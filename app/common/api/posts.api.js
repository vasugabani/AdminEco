import { getRequest } from "../request"

export const getAllPostAPI = () => {
    return getRequest('products')
}