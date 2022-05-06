import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ShoeCards from './components/ShoeCards';
import Filters from './components/Filters';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';

function App() {

const [filters, setFilters] = useState({});
const [search, setSearch] = useState("");

const [openfilters, setOpenFilters] = useState(false);


const mobile= useCheckMobileScreen()
  return (
    <div className='App' >
      <NavBar setSearch={setSearch} setOpenFilters={setOpenFilters}/>
      <div className='main-container'>
        {(openfilters || !mobile) && <div className='sidebar-container'>
          <Filters setFilters={setFilters} filters= {filters} search={search} setOpenFilters={setOpenFilters}/>
        </div>}
        <div className='content-container' id ='content-container'>
          <ShoeCards filters={filters} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;