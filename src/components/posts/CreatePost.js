import React ,{ useState,useEffect } from 'react';
import {useNavigation} from 'react-navi';
import useUndo from 'use-undo';
import {useUserState, useDispatch, usePostsState, useCreatePostsApi} from '../../hooks';


const CreatePostComp =() => {
    const user = useUserState();
    const dispatch = useDispatch();
    const [title,onTitleChange] = useState(''); 
    const[undoContent,
        {set:setContent,
            undo,
            redo,
            canUndo,
            canRedo},] = useUndo('');
    const content = undoContent.present;

    const navigation = useNavigation();

    const [post,createpost] = useCreatePostsApi()

    useEffect(()=>{
        if(post && post.data){
            dispatch({type:'CREATE_POST', ...post.data})
            navigation.navigate(`/posts/${post.data.id}`)
        }
    },[post])
    return (
        <form onSubmit = {e=> { e.preventDefault();  createpost({title,content,user});}}>
            <div><b>{user}</b></div>
            <div>
                <label htmlFor='create-title'>Title:</label>
                <input type='text' name='create-title' id='create-title' onChange = {e=>onTitleChange(e.target.value)}/>
            </div>
            <label htmlFor='create-title'>Content:</label>
            <textarea  value={content} onChange= { e => setContent(e.target.value)}/>
            <button type="button" onClick={undo} disabled={!canUndo}>Undo</button>
            <button type="button" onClick={redo} disabled={!canRedo}>Redo</button>
            <input type='submit' value='Create'/>
            
        </form>
    )
}

export default CreatePostComp;