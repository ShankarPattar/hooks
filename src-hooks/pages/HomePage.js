import React,{useContext,useEffect} from 'react';
import {useResource} from 'react-request-hook';
import {StateContext} from '../components/commons/contexts';
import PostList from '../components/posts/PostList';

const HomePage=()=> {
    const {state,dispatch} = useContext(StateContext);
    const {user, error} = state;

    const [posts, getPosts] = useResource(()=>({
        url:'/posts',
        method:'get'
        }));
    
        
    useEffect(getPosts,()=>{
        document.title= user? `${user}-React hooks`:'React hooks';
        if(posts && posts.error){
            dispatch({type:'POSTS_ERROR'})
        }

        if(posts && posts.data){
        dispatch({type:'FETCH_POSTS',posts:posts.data.reverse()})
        }},posts);

    return (
        <div>
            {error && <b>{error}</b>}
            <PostList data={posts.data}/>
        </div>
    )
}

export default HomePage;