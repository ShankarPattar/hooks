import {useContext} from 'react';
import {StateContext} from '../components/commons/contexts';

const useDispatch=(context = StateContext)=>{
    const {dispatch} = useContext(context)
    return dispatch
}

export default useDispatch;