import React , { useContext, useEffect, useReducer } from "react";
import { useGlobalContext , AppContext } from "./context/ContextApi";
import { initialState, postReducer } from "./context/postReducer";
import {fetchPostData} from './context/actions'


function ContextCheck(){

    // const api = 'https://jsonplaceholder.typicode.com/posts/1'
// const firstName = useContext(AppContext)
const firstName  = useGlobalContext()

    const [state, dispatch ] = useReducer(postReducer,initialState)

// useEffect(()=>{
// dispatch(fetchPostData())
// },[])
    console.log(state)

console.log(firstName)
    return(
        <>
                <h2>This is context</h2>
        </>
    )
}
export default ContextCheck;