import {useResource} from 'react-request-hook';


const useApiLogin=()=>{
    return useResource((username,password)=>({
        url:`/users?username=${encodeURI(username)}&password=${encodeURI(password)}`,
        method:'GET'
    }))

}

const useRegisterApi=()=>{
    return useResource((username,password, repeatPassword) => ({
        url: '/users',
        method :'post',
        data : { username,password,repeatPassword }
    }))
}


const useCreatePostsApi =()=>{
    return useResource(({title,content,user}) => ({
        url:'/posts',method:'post',data:{title,content,username:user}}))


}

const useThemesApi=()=>{
    return useResource(() =>({
        url:'/themes',
        method:'get'
    }));

}

export {useApiLogin,useRegisterApi,useCreatePostsApi,useThemesApi}