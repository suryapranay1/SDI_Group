import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AccordionIndicator from './components/filter';
import TableSortAndSelection from './components/table1';
import ButtonAppBar from './components/tabchild';
import TabsSegmentedControls from './components/tab';
import DataTable from './components/table1';
import DataList from './components/cards';
import BasicGrid from './components/grid';
import AccordionItemComponent from './components/mapaccord';
import CheckboxList from './components/checkbox';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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


    <AccordionItemComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    {/* <CheckboxList/> */}
    </>
    </Router>
  );
}

export default App;