import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';
import TocIcon from '@mui/icons-material/Toc';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import { Link } from 'react-router-dom';
export default function AppsMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
        sx={{ borderRadius: 40 }}
      >
        <Apps />
      </MenuButton>
      <Menu
        variant="solid"
        invertedColors
        aria-labelledby="apps-menu-demo"
        sx={{
          '--List-padding': '0.1rem',
          '--ListItemDecorator-size': '0.5rem',
          display: 'flex',
          gridTemplateColumns: 'repeat(2, 60px)',
          gridAutoRows: '80px',
          gap: 0.5,
        }}
      >
        <Link to='/list'>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <TocIcon />
          </ListItemDecorator>
          List
        </MenuItem>
        </Link>
        <Link to=''>
        <MenuItem orientation="vertical">
          <ListItemDecorator>
            <ViewDayOutlinedIcon />
          </ListItemDecorator>
          Cards
        </MenuItem>
        </Link>
      </Menu>
    </Dropdown>
  );
}
