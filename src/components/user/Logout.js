import React from 'react';
import {useDispatch,useUserState} from '../../hooks';


const Logout = () => {
    const dispatch = useDispatch();
    const user = useUserState();
    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({type:'LOGOUT',user})}}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="logout"/>
        </form>
    )
}

export default Logout;