import React,{useContext} from 'react';
import {StateContext} from '../commons/contexts';


const Logout = () => {
    const {state, dispatch} = useContext(StateContext);
    const {user} = state;
    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({type:'LOGOUT',user})}}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="logout"/>
        </form>
    )
}

export default Logout;