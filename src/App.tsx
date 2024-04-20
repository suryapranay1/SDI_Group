import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AccordionIndicator from './components/filter';
import TableSortAndSelection from './components/table1';
import ButtonAppBar from './components/tabchild';
import TabsSegmentedControls from './components/tab';
import DataTable from './components/table1';
import DataList from './components/cards';
import BasicGrid from './components/grid';

function App() {
  return (
    <Router>
      <>
        <TabsSegmentedControls />
        <ButtonAppBar />

        <Routes>
          <Route path="/" element={<BasicGrid />}>
            <Route path="/list" element={<DataTable />} />
            <Route path="" element={<DataList />} />
          </Route>
        </Routes>
      </>
    </Router>

  );
}

export default App;