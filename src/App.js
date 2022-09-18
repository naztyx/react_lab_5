import React from 'react';
import './App.css';

import SignUp from './components/sign-up/sign-up' //import signup class
import SignIn from './components/sign-in/sign-in' //import signin class

import Home from './components/home/home';

import {BrowserRouter, Route, Routes} from 'react-router-dom' //import routing modules

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
      <h1>CHATSCRUM</h1>
        <Routes>                       
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>          
        </Routes>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
