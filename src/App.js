import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ShoeCards from './components/ShoeCards';
import Filters from './components/Filters';

function App() {

const [filters, setFilters] = useState({});
const [search, setSearch] = useState("");
  return (
    <div className='App' >
      <NavBar setSearch={setSearch}/>
      <div className='main-container'>
        <div className='sidebar-container'>
          <Filters setFilters={setFilters} filters= {filters} search={search}/>
        </div>
        <div className='content-container' id ='content-container'>
          <ShoeCards filters={filters} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
