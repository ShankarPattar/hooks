import React from 'react';
import Post from './Post';

const PostList = ({data})=> {
        return (<div>{data && data.map((p,i)=> <Post {...p} short={true} key={`${p.title + i}`}/>)}</div>) 
}        

export default PostList;