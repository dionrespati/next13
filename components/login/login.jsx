import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Avatar from '@mui/material/Avatar';

const Login = (props) => {
  const { loginData, setLoginData } = props;

  const [showPassword, setShowPassword] = useState(false);

  const formCSS = {
    marginBottom: 2
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    const newData = {
      ...loginData,
      [name]: value
    };
    setLoginData(newData);
  }

  const {username, password} = loginData;

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
              <LockOpenOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in for Registered User
            </Typography>
            <TextField 
              label={
                <Typography variant="headline" component="h3"> Username </Typography>
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
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}  
              name="username"
              value={username}
              onChange={handleOnChange}
            />
            <TextField 
              name="password"
              value={password}
              
              label={
                <Typography variant="headline" component="h3"> Password </Typography>
              }
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              sx={formCSS}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
                )
              }} 
              
            />
            <Button 
              variant="contained"
              size="large"
              fullWidth
              startIcon={<LoginOutlinedIcon />} 
            >
              Sign In
            </Button>
          </Box>    
        </Grid>
      </Grid>    
    </>
  )
}

export default Login