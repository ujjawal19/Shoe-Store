import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ShoeCards from './components/ShoeCards';

function App() {


  return (
    <div className='App'>
      <NavBar />
      <div className='main-container'>
        <div className='sidebar-container'>
          <SideBar/>
        </div>
        <div className='content-container'>

          <ShoeCards />
        </div>
      </div>

    </div>
  );
}

export default App;
