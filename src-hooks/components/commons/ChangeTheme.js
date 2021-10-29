import React, {useEffect} from 'react';
import {useResource} from 'react-request-hook';

const ThemeItem =({theme,active,onclick})=>{
    return (
        <div>
        <span onClick ={onclick} style={{cursor:'pointer', paddingLeft:10, fontWeight: active? 'bold':'normal'}}>Primary</span>
        <span onClick ={onclick} style={{color: theme.secondaryColor}}>Secondary</span>
        </div>
    )
}

const isActive=(t, theme)=>{
    return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor
}

const ChangeTheme =({theme,setTheme})=>{

        const [themes, getThemes] = useResource(() =>({
            url:'/themes',
            method:'get'
        }));
        const {data, isLoading} = themes;

        useEffect(getThemes,[]);

        return (
            <div> 
            <span> {isLoading && 'Loading....'} </span>
                Change Theme : {data && data.map((t,i)=> {
                    return <ThemeItem theme={t} active={isActive(t, theme)} onclick = {()=>setTheme(t)} key = {'theme-'+ i}/>
                })}                                                 
            </div>
            )       
}
export default ChangeTheme;