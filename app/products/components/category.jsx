"use client";
import React from 'react';
import Box  from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Category = (props) => {
  const { listCategories } = props;
  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        maxWidth: "200px"
      }}
    >
      <List>
        {listCategories.map(item => {
          return (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Category;