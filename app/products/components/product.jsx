
"use client";
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
//import Link from '@mui/material/Link';

const Product = (props) => {
  const { products } = props;

  return (
    <Container
      maxWidth="lg"
    >
      <Box 
        sx={{ 
          flexGrow: 1,
          width: "lg",
          backgroundColor: "red",
          padding: 1
        }}
      >
        <Grid container spacing={2}>
          {products.map(prd => {

            const {id, title, thumbnail, price} = prd;
            let sizeTitle = "h6"
            if(title.length > 15 && title.length  < 20) {
              sizeTitle = "subtitle1";
            } else if(title.length > 20) {
              sizeTitle = "subtitle2";
            }

            return(       
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Card sx={{maxWidth: 250, width: 250}}>   
                  <Image 
                    src={thumbnail}
                    width="250"
                    height="150"
                    alt="alt"
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="subtitle2">
                      {title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography> */}
                    <Typography variant="body2" color="text.primary">
                      Price: $ {price}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button color="success" variant='outlined' size="small" sx={{width: 10}}>
                      <AddShoppingCartIcon />
                    </Button>
                    <Link href={`/products/${id}`}>
                      Detail
                    </Link>
                  </CardActions>
                </Card>
              </Grid>  
            ); 
          })}    
        </Grid>
      </Box>
    </Container>  
  );
};

export default Product;