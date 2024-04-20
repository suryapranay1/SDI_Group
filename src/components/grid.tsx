import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import AccordionIndicator from './filter';
import { Outlet } from 'react-router-dom';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:'transparent',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));
export default function BasicGrid() {
  return (
    <Grid container spacing={0.3} sx={{ flexGrow: 1,height:'100%' }}>
      <Grid xs={2}>
        <Item variant='plain'>
        <Box sx={{ width: '100%',backgroundColor:'none'}}>
      <Stack spacing={2} sx={{  textAlign: 'center',}}>
        <Item>Filters</Item>
        <Item>  <AccordionIndicator number='First' name='User Type' labels={['Super Admin', 'Admin', 'User']} />
          <AccordionIndicator number='second' name='Roles' labels={['Role1', 'Role2', 'Role3']} />
          <AccordionIndicator number='third' name='Recent Logins' labels={['Login1', 'Login2', 'Login3']} /></Item>
      </Stack>
    </Box>
        </Item>
      </Grid>
      <Grid xs={10} >
        <Item><Outlet /></Item>
      </Grid>
    </Grid>
  );
}
