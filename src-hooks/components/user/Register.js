import React, {useEffect,useContext} from 'react';
import {useResource} from 'react-request-hook';
import {StateContext} from '../commons/contexts';
import {useInput} from 'react-hookedup';


const Register= () => {

    const [user, register] = useResource((username,password) => ({
        url: 'api/users',
        method :'post',
        data : { username,password,repeatPassword }
    }))

    const {value:username, bindToInput:bindUserName} = useInput('')
    const {value:password, bindToInput:bindPassword} = useInput('')
    const {value:repeatPassword, bindToInput:bindToRepeatPassword} = useInput('')
    const {dispatch} = useContext(StateContext);

useEffect(()=>{
        if(user && user.data){
            dispatch({type:'REGISTER', username, password,repeatPassword});
            alert(user)
        }
},[user])


return(
    <form onSubmit={e => {e.preventDefault(); register(username,password,repeatPassword)}}>
        <label htmlFor='username' id='password-username'>Name:</label>
        <input type='text' name='user-name' {...bindUserName}/>
        <label htmlFor='password-username' id='password-username'>Password:</label>
        <input type='password' name='password-name' {...bindPassword} />
        <label htmlFor='repeat-password' id='repeat-password'>Repeat Password:</label>
        <input type='password' name='repeat-password-name'value={repeatPassword} {...bindToRepeatPassword}/>
        <input type="submit" value="Register" disabled={user.length === 0}/>
    </form>
)

}
export default Register;