const userReducer = (state, action) =>{
    switch(action.type){
      case 'LOGIN': 
      case'REGISTER': return action.username;
      case 'LOGOUT' : return '';
      default : return state;
    }
}

const postsReducer = (state, action)=> {
    switch(action.type){
      case 'CREATE_POST' :
      const newPost = { title:action.title, content: action.content, username:action.username, id:action.id};
      return [newPost, ...state];
      case 'FETCH_POSTS' : 
      return [action.posts, ...state];
      default: return state;
    }
}

const errorReducer = (state, action)=> {
    switch(action.type){
        case 'POSTS_ERROR' : return 'Failed posts';
        default: return state;
    }
}


const appReducer = (state, action) => {

    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action),
        error: errorReducer (state.error, action)
    }
    }
    
    export default appReducer;