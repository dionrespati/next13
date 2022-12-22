"use client";
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

const Page = () => {
  return (
    <>
      <Box>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We WIll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We WIll never share your email.</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

export default Page;