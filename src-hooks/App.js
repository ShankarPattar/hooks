import React, { useReducer, useState} from 'react';
import HeaderBar from './pages/HeaderBar';
import appReducer from './components/reducers/reducers';
import {ThemeContext, StateContext} from './components/commons/contexts';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import {Router, View} from 'react-navi'
import {mount, route} from 'navi';

function App() {
  
  const [theme, setTheme] = useState({primaryColor:'deepskyblue',secondaryColor:'coral'})
  const [state,dispatch] = useReducer(appReducer,  {user:'',  posts:[], error:''})  

  const routes = mount({
    '/': route({view:<HomePage/>}),
    '/posts/:id': route(req=>{
      return { view:<PostPage id={req.params.id}/>}}),
  });


  return (
    <StateContext.Provider value={{state, dispatch}}>
    <ThemeContext.Provider value={theme}>
    <Router routes ={routes}>
    <div style={{padding:30}} id="App" className="App">
      <HeaderBar setTheme={setTheme}/>
        <View/>
    </div>
    </Router> 
    </ThemeContext.Provider>
    </StateContext.Provider>
  );
};
export default App;
