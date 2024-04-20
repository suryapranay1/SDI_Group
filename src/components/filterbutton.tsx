import * as React from 'react';
import Menu, { menuClasses } from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// The Menu is built on top of Popper v2, so it accepts `modifiers` prop that will be passed to the Popper.
// https://popper.js.org/docs/v2/modifiers/offset/
interface MenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  menu: React.ReactElement;
  open: boolean;
  onOpen: (
    event?:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  onLeaveMenu: (callback: () => boolean) => void;
  label: string;
}

const modifiers = [
  {
    name: 'offset',
    options: {
      offset: ({ placement }: any) => {
        if (placement.includes('end')) {
          return [8, 20];
        }
        return [-8, 8];
      },
    },
  },
];

function NavMenuButton({
    children,
    menu,
    open,
    onOpen,
    onLeaveMenu,
    label,
    ...props
  }: Omit<MenuButtonProps, 'color'>) {
    const isOnButton = React.useRef(false);
    const isOnMenu = React.useRef(false);
  
    const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        onOpen(event);
      }
    };
  
    const handleMenuMouseEnter = () => {
      isOnMenu.current = true;
    };
  
    const handleMenuMouseLeave = () => {
      isOnMenu.current = false;
      checkCloseMenu();
    };
  
    const checkCloseMenu = () => {
      if (!isOnButton.current && !isOnMenu.current) {
        onLeaveMenu(() => false);
      }
    };
  
    return (
      <Dropdown
        open={open}
        onOpenChange={(_, isOpen) => {
          if (isOpen) {
            onOpen?.();
          }
        }}
      >
        <MenuButton
          {...props}
          slots={{ root: FilterAltOutlinedIcon }}
          slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
          onMouseDown={() => {
            isOnButton.current = true;
          }}
          onClick={() => {
            onOpen();
          }}
          onMouseEnter={() => {
            onOpen();
            isOnButton.current = true;
          }}
          onMouseLeave={() => {
            isOnButton.current = false;
            checkCloseMenu();
          }}
          onKeyDown={handleButtonKeyDown}
          sx={{
            bgcolor: open ? 'neutral.plainHoverBg' : undefined,
            '&:focus-visible': {
              bgcolor: 'neutral.plainHoverBg',
            },
          }}
        >
          {children}
        </MenuButton>
        {React.cloneElement(menu, {
          onMouseEnter: handleMenuMouseEnter,
          onMouseLeave: handleMenuMouseLeave,
          modifiers,
          slotProps: {
            listbox: {
              id: `nav-example-menu-${label}`,
              'aria-label': label,
            },
          },
          placement: 'bottom-start',
          sx: {
            width: 150,
            [`& .${menuClasses.listbox}`]: {
              '--List-padding': 'var(--ListDivider-gap)',
            },
          },
        })}
      </Dropdown>
    );
  }  
export default function MenuIconSideNavExample() {
  const [menuIndex, setMenuIndex] = React.useState<null | number>(null);
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu =
    (index: number) => (getIsOnButton: () => boolean) => {
      setTimeout(() => {
        const isOnButton = getIsOnButton();
        if (!isOnButton) {
          setMenuIndex((latestIndex: null | number) => {
            if (index === latestIndex) {
              return null;
            }
            return latestIndex;
          });
        }
      }, 200);
    };
  return (
    <Sheet>
      <List>
        <ListItem>
          <NavMenuButton
            label="Apps"
            open={menuIndex === 0}
            onOpen={() => setMenuIndex(0)}
            onLeaveMenu={createHandleLeaveMenu(0)}
            menu={
              <Menu onClose={() => setMenuIndex(null)}>
                <MenuItem {...itemProps}>Application 1</MenuItem>
                <MenuItem {...itemProps}>Application 2</MenuItem>
                <MenuItem {...itemProps}>Application 3</MenuItem>
              </Menu>
            }
          >
            <Apps />
          </NavMenuButton>
        </ListItem>
  
      </List>
    </Sheet>
  );
}