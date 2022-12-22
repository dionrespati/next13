"use client";
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { width } from '@mui/system';

const NoData = ({message}) => {
  return (
    <>
      <Container
        maxWidth="lg"
      >
        <Box
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            backgroundColor: "blue",
            padding: 0.5
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Alert severity="error">{message}</Alert>
            </Grid>
          </Grid>
        </Box>
      </Container>    
    </>
  );
};

export default NoData;