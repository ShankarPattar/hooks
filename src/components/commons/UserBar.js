import React from 'react';
import Login from '../user/Login';
import Register from '../user/Register';
import {useUserState} from '../../hooks'


const Logout = React.lazy(()=>import ('../user/Logout'));
const UserBar=()=> {
    const username = useUserState();
    if (username){ 
        return <Logout/>
    }
    else {
        return ( <>
            <Login/>
            <Register/>
        </>)}
    
}
export default UserBar;