import React, {useContext} from 'react';
import useWindowSize from '@rehooks/window-size';
import UserBar from '../components/commons/UserBar';
import HeaderComp from '../components/commons/HeaderComp';
import CreatePostComp from '../components/posts/CreatePost';
import ChangeTheme from '../components/commons/ChangeTheme';
import {ThemeContext,StateContext} from '../components/commons/contexts';
import {useTheme, useUserState} from '../hooks'


const HeaderBar = ({setTheme}) =>{

    const {primaryColor} = useTheme();
    const user  = useUserState();
    const {innerWidth} = useWindowSize();
    const mobilePhone = innerWidth < 640; 
    return (
        <div>
            {!mobilePhone && <HeaderComp text="This is Header"/>}
            {!mobilePhone &&<ChangeTheme theme={primaryColor} setTheme={setTheme} />} 
            {!mobilePhone &&<br/>}
            <React.Suspense fallback={'Loaaaaaaading...'}>
            <UserBar />
            </React.Suspense>
            <br/>
            {user && <CreatePostComp />}
        </div>
    )
}

export default HeaderBar;