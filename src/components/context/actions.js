import { FETCH_POST, FETCH_POST_ERROR, FETCH_POST_START, FETCH_POST_SUCCESS } from "./types";

export const fetchPostData = {
    pending:{
        type:FETCH_POST_START,
        status:'Post are loading'
    },
    success:(result)=>(
        {
            type:FETCH_POST_SUCCESS,
            payload:result,
        }
    ),
    error:{
        type:FETCH_POST_ERROR,
        status:'Post loading failed'
    }
}