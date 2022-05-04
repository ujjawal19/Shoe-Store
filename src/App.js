import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ShoeCards from './components/ShoeCards';
import Filters from './components/Filters';

function App() {

const [filters, setFilters] = useState({});
  return (
    <div className='App'>
      <NavBar />
      <div className='main-container'>
        <div className='sidebar-container'>
          <Filters setFilters={setFilters}/>
        </div>
        <div className='content-container'>
          <ShoeCards filters={filters} />
        </div>
      </div>

    </div>
  );
}

export default App;
