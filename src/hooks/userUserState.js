import {useContext} from 'react';
import {StateContext} from '../components/commons/contexts';

const useUserState =()=> {    
    const {state} = useContext(StateContext)
    return state.user
}

export default useUserState;