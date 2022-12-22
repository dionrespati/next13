"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Menusetting from './menusetting';

const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between",
})

const Search = styled("div")(({theme}) => ({
  display: "flex",
  backgroundColor: "white",
  padding: "0 5px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center"
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center"
}));

const Navbar = () => {

  const [search, setSearch] = useState("");
  const [userDrawer, setUserDrawer] = useState(false);
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/products/search/${search}`);
  };

  return (
    <>
      <Box sx={{mb: 8}}>
        <AppBar
          position='fixed'
          sx={{
            height: 52,
            justifyContent: "center",
            backgroundColor: "#0e7366"
          }}
        >
          <StyledToolbar>
            <MenuIcon 
              onClick={() => setMenu(!menu)}
            />
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>JuwalanMurah</Typography>
            <Search>
              <form onSubmit={handleSearch}>
                <InputBase 
                  placeholder='Search Product'
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  } 
                  fullWidth
                  onChange={(e) => setSearch(e.target.value)} 
                />
               </form> 
            </Search>
            <Icons>
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
              <Badge badgeContent={1} color="error" >
                <MailIcon />
              </Badge>
              <Badge badgeContent={1} color="error" >
                <NotificationsIcon />
              </Badge>
              <UserBox onClick={() => setUserDrawer(!userDrawer)}>
                <AccountBoxIcon />
              </UserBox>
            </Icons>
          </StyledToolbar>
        </AppBar>  
        <Menusetting 
          userDrawer={userDrawer} 
          setUserDrawer={setUserDrawer}
        />
      </Box> 
    </>
  );
};

export default Navbar;