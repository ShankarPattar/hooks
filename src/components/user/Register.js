import React, {useEffect} from 'react';
import {useInput} from 'react-hookedup';
import {useDispatch,useRegisterApi} from '../../hooks';

const useRegisterEffect =(user,dispatch)=>{
    useEffect(()=>{
        if(user && user.data){
            dispatch({type:'REGISTER', username:user.data.username, password:user.data.password,repeatPassword:user.data.repeatPassword});
        }
},[dispatch,user])
}


const Register= () => {
    const {value:username, bindToInput:bindUserName} = useInput('')
    const {value:password, bindToInput:bindPassword} = useInput('')
    const {value:repeatPassword, bindToInput:bindToRepeatPassword} = useInput('')
    const dispatch = useDispatch();   
    const [user, register] = useRegisterApi();
    useRegisterEffect(user,dispatch);

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