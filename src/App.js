


import React, { Component } from 'react'
import NavBar from './Component/NavBar.js';
import News from './Component/News.js';
import Counter from './Component/Counter.js';
import Navigation from './Navigation.js';
import Login from './Login.js';
import Home from './Home.js';




export default class App extends Component {
 
  render() {
    function App(){
      let content;
      let isLogin= true
      if(isLogin){
        content = <Home />
      }else{
        content = <Login />
      }
    }
    
    return (
      <div>
      <NavBar/>
      <News/> 
      <Counter/>
      <NavBar/>
      <News/>
      <Navigation/>
      <Login/>
      <Home/>
      </div>
    )
  }
}

