import React, {useState,useContext,useEffect} from 'react';
import {StateContext} from '../commons/contexts';
import {useResource} from 'react-request-hook';
import {useInput} from 'react-hookedup';

const Login=() => {
    const {dispatch} = useContext(StateContext);
    const [loginFailed, setLoginFailed] = useState(false);
    const {value:username, bindToInput:bindUserName} = useInput('')
    const {value:password, bindToInput:bindPassword} = useInput('')

    const [user,loginUser] = useResource((username,password)=>({
        url:`/users?username=${encodeURI(username)}&password=${encodeURI(password)}`,
        method:'GET'
    }))

useEffect(()=>{
    if(user && user.data){
        if(user.data.length>0){
            setLoginFailed(false);
            dispatch({type:'LOGIN',username: user.data[0].username})
        }
        setLoginFailed(true)
    }
    if(user && user.error){
        setLoginFailed(true)
    }
},[user])
    
return(
    <form onSubmit={e => {e.preventDefault(); loginUser(username,password)}}>
    {loginFailed && <span style={{color:'red'}}>Invalide Creds</span>}
        <label htmlFor='login-username' id='login-username'>Username:</label>
        <input type='text' name='login-name' value={username} {...bindUserName } />
        <label htmlFor='login-password' id='login-password'>Password:</label>
        <input type='text' name='login-password' value={password} {...bindPassword}  />
        <input type="submit" value="Login" disabled = {user.length === 0}/>

    </form>
)

}

export default Login;