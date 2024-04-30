import React from 'react';
import {
  Stack,
} from '@mui/joy';
import 'ol/ol.css';
import {Outlet } from 'react-router-dom';


const AccordionItemComponent = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {sidebarOpen && (
        <Stack
          sx={{
            backgroundColor: '#f5f5f5',

            width: 400,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1050,
            overflow: 'auto',
            minHeight: '100%',
          }}
        >
          <Outlet/>
        </Stack>
      )}
      {/* <GeneralMapComponent /> */}
    </>
  );
};

export default AccordionItemComponent;
