import {useContext} from 'react';
import {ThemeContext} from '../components/commons/contexts';

const useTheme=()=> {
    return useContext(ThemeContext)
}

export default useTheme;