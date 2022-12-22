import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Avatar from '@mui/material/Avatar';
import { checkValidEmail } from '../../module/utility';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';

const Forgotpassword = (props) => {
  const {resetData, setResetData} = props;

  const checkEmail = (event) => {
    const {name, value} = event.target;
    const newData = {
      ...resetData,
      [name]: value
    };
    setResetData(newData);
    return;
  };

  const formCSS = {
    marginBottom: 2
  };

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    const newData = {
      ...resetData,
      [name]: value
    };
    setResetData(newData);
  }

  const { email, phoneNumber } = resetData;
  const ifEmailValid = checkValidEmail(email);
  const phoneValid = phoneNumber.replace(/\D/g,'');
  
  return (    
    <>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockResetOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <TextField 
              type="email"
              name="email"
              placeholder="Email format must be valid"
              value={email}
              error={email !== '' && !ifEmailValid}
              helperText={email !== '' && !ifEmailValid ? "Please provide valid email" : ""}
              onChange={checkEmail}
              label={
                <Typography variant="headline" component="h3"> Email </Typography>
              }
              fullWidth  
              required  
              sx={{
                marginBottom: 2,
                marginTop: 3
              }}    
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}  
            />
            <Typography variant="subtitle2" sx={{marginBottom: 2}}>
              -- OR --
            </Typography>
            <TextField 
                label={
                  <Typography variant="headline" component="h3"> Phone Number </Typography>
                }
                name="phoneNumber"
                fullWidth  
                required
                sx={formCSS}  
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneAndroidOutlinedIcon />
                    </InputAdornment>
                  ),
                }}        
                tabIndex="3"
                placeholder="Only number allowed"
                value={phoneValid}
                onChange={handleOnChange}
              />
            <Button 
              variant="contained"
              size="large"
              fullWidth
              startIcon={<LockResetOutlinedIcon />} 
            >
              Reset Password
            </Button>
          </Box>    
        </Grid>
      </Grid>    
    </>
  );
};

export default Forgotpassword;