import axios from 'axios';
import { fetchPostData } from './actions';

export const handlePostApi = async ( payload , dispatch )=>{
    dispatch(fetchPostData.pending);
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const data = res.pending;
        console.log(data)
    }catch(error){
        console.log(error)
    }
}