"use client";
import React from 'react';
import Navbar from '../../components/layout/navbar';
import Box from '@mui/material/Box';
import Sidebar from './sidebar';
import Stack from '@mui/material/Stack';
import Content from './content';

const Layout = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="center">
          <Sidebar />
          <Content />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;