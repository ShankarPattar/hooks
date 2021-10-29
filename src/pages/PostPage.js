import React,{useEffect} from 'react';
import {useResource} from 'react-request-hook';
import Post from '../components/posts/Post';
import {Link} from 'react-navi';
import FooterBar from './FooterBar';

const PostPage=({id})=> {
    const [post, getPost] = useResource(()=>({
        url:`/posts/${id}`,
        method:'get'
    }))

    useEffect(getPost,[id])
    return (
        <div>
            <div><Link href='/'>Go Back</Link></div>
            {post && post.data ? <Post {...post.data}/>:'Posts Loaading..'}
            <FooterBar/>
        </div>
    )
}
export default PostPage;