import React from 'react';
import Post from './Post';
import {usePostsState} from '../../hooks';

const PostList = ()=> {
        const posts = usePostsState();
        return (<div>{posts && posts.map((p,i)=> <Post {...p} short={true} key={`${p.title + i}`}/>)}</div>) 
}        

export default PostList;