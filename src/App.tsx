import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import AccordionIndicator from './components/filter';
import TableSortAndSelection from './components/table1';
import ButtonAppBar from './components/tabchild';
import DataTable from './components/table1';
import DataList from './components/cards';
import BasicGrid from './components/grid';
import AccordionItemComponent from './components/mapaccord';
import CheckboxList from './components/checkbox';
import LandingAccord from './components/Saccro';
import CardVariants from './components/meta-data-card';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (

      <>
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<BasicGrid />}>
            <Route path="/list" element={<DataTable />} />
            <Route path="" element={<DataList />} />
          </Route>
          <Route path='/metaData' element={<CardVariants/>}/>
        </Routes>
        </BrowserRouter>
        {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<AccordionItemComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}>
            <Route path='/Updateside' element={<CheckboxList/>}/>
            <Route path='' element={<LandingAccord sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}></Route>
          </Route>
        </Routes>
        </BrowserRouter> */}
    </>


  );
}

export default App;