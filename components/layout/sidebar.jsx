"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Sidebar = () => {
  return (
    <Box 
      bgcolor="lightgreen" 
      flex={1} 
      p={2} 
      sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}
    >
      <Grid>
        Inilah Sidebar
      </Grid>
    </Box>  
  );
};

export default Sidebar;