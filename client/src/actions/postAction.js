import * as api from "../api";

export const getPost = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPost() ;
        dispatch({
            type: "FETCH_DATA",
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}

export const createPost = (posts) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(posts)
        dispatch({
            type: "CREATE_POST",
            payload: data
            
        })
    } catch (error) {
        console.log(error)
    }
}

