import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import ButtonAppBar from './tabchild';

export default function TabsSegmentedControls() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent:'space-evenly',backgroundColor: '#71ab8d', }}>
      <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'secondary',}}>
        <TabList
          disableUnderline
          sx={{
            p: 0.2,
            gap: 2,
            bgcolor: '#71ab8d',
            color:'white',
            [`& .${tabClasses.root}`]: { // Apply to all tabs
              borderRadius: '0.5em',
              color: 'black',
            },
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: 'sm',
              borderRadius:'0.5em',
              bgcolor: 'background.surface',
              color:'black'
            },
          }}
        >
          <Tab disableIndicator sx={{fontWeight:500}}>My Content</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>groups</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>organisation</Tab>
          <Tab disableIndicator sx={{fontWeight:500}}>Public</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}
