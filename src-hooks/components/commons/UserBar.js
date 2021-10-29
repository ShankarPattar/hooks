import React,{useContext} from 'react';
import Login from '../user/Login';
import Register from '../user/Register';
import {StateContext} from './contexts';


const Logout = React.lazy(()=>import ('../user/Logout'));
debugger;
const UserBar=()=> {
const {state} = useContext(StateContext);
const {username} = state;

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