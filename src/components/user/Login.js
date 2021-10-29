import React, {useState,useEffect} from 'react';
import {useInput} from 'react-hookedup';
import {useDispatch,useApiLogin} from '../../hooks'

const useLoginEffect =(user,dispatch,setLoginFailed) =>{

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
    },[user,dispatch,setLoginFailed])
}

const Login=() => {
    
    const [loginFailed, setLoginFailed] = useState(false);
    const {value:username, bindToInput:bindUserName} = useInput('')
    const {value:password, bindToInput:bindPassword} = useInput('')
    const dispatch = useDispatch();    
    const [user,loginUser] = useApiLogin();
    useLoginEffect(user,dispatch,setLoginFailed);

    
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