"use client";
import React from 'react';
import List  from '@mui/material/List';
import Box  from '@mui/material/Box';
import ListItem  from '@mui/material/ListItem';
import ListItemText  from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LockResetIcon from '@mui/icons-material/LockReset';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LogoutIcon from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Drawer from '@mui/material/Drawer';
import ReceiptIcon from '@mui/icons-material/Receipt';

import { useRouter } from 'next/navigation';

const Menusetting = ({userDrawer, setUserDrawer}) => {

  const router = useRouter();

  const setPageTo = async (evt, param) => {
    evt.preventDefault();
    router.push(param);
  }
  
  return (
    <>
      <Drawer
        anchor='right'
        open={userDrawer}
        onClose={() => setUserDrawer(false)}
      >
        <Box 
          role="presentation"
          sx={
            { width: '100%', maxWidth: 600, bgcolor: 'background.paper' }
        }>
          <List>
            <ListItem disablePadding onClick={(event) => setPageTo(event, `user/changepassword`) }>
              <ListItemButton>
                <ListItemIcon>
                  <LockResetIcon />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
              </ListItemButton>
            </ListItem>
          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="History Transaction" />
              </ListItemButton>
            </ListItem>
          
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="User Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>  
      </Drawer>
    </>
  );
};

export default Menusetting;