"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Navbar from '../../components/layout/navbar';

export default function ProductTemplate({ children }) {
  return (
    <> 
      <Box>
        <Navbar />
        <Stack direction="row" justifyContent="center">
          {children}
        </Stack>
      </Box>
    </>
  );
};
  