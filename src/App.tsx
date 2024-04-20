import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AccordionIndicator from './components/filter';
import TableSortAndSelection from './components/table1';
import ButtonAppBar from './components/tabchild';
import TabsSegmentedControls from './components/tab';
import DataTable from './components/table1';
import DataList from './components/cards';

function App() {
  return (
    <Router>
      <>
        <TabsSegmentedControls />
        <ButtonAppBar />

        <Routes>
          <Route path="/" element={<FiltersAndData />}>
            <Route path="/list" element={<DataTable />} />
            <Route path="" element={<DataList />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

function FiltersAndData() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'roboto' }}>
      <div style={{ width: '15vw' }}>
        <div>
          <h2>Filters</h2>
        </div>
        <div>
          <AccordionIndicator number='First' name='User Type' labels={['Super Admin', 'Admin', 'User']} />
          <AccordionIndicator number='second' name='Roles' labels={['Role1', 'Role2', 'Role3']} />
          <AccordionIndicator number='third' name='Recent Logins' labels={['Login1', 'Login2', 'Login3']} />
        </div>
      </div>
      <div style={{ flexGrow: '1' }}><Outlet /></div>
    </div>
  );
}

export default App;