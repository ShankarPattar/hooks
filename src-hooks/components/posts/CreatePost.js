import React ,{ useState,useContext,useEffect } from 'react';
import {StateContext} from '../commons/contexts';
import {useResource} from 'react-request-hook';
import {useNavigation} from 'react-navi';
import useUndo from 'use-undo';


const CreatePostComp =() => {
    const {state,dispatch} = useContext(StateContext);
    const {user} = state;
    const [title,onTitleChange] = useState('');
    
    const[undoContent,
        {set:setContent,
            undo,
            redo,
            canUndo,
            canRedo},] = useUndo('');
    const content = undoContent.present;


    const[post,createPost] = useResource(({title,content,user}) => ({url:'/posts',method:'post',data:{title,content,username:user}}))

    const navigation = useNavigation()

    function handleSubmit (){
        createPost({title,content,user});
    }
    
    useEffect(()=>{
        if(post && post.data){
            dispatch({type:'CREATE_POST', ...post.data})
            navigation.navigate(`/posts/${post.data.id}`)
        }
    },[post])
    return (
        <form onSubmit = {e=> { e.preventDefault(); handleSubmit()}}>
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