"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';


const ProductDetail = ({dataProduct}) => {
  const {id, title, description, price, rating, stock, brand, category, thumbnail, images} = dataProduct;
  
  return (
    <Container
      maxWidth="sm"
    >
      <Box
        sx={{
          width: "100%"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card>

            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            asd
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ProductDetail;