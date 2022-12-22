"use client";
import { React } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid><Typography>Fetching Data, please wait..</Typography></Grid>
      <LinearProgress />
    </Box>
  );
}