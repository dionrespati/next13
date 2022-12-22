import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import { checkValidEmail, checkStrengthPassword } from '../../../module/utility';


const Signup = (props) => {
  const { signUpData, setSignUpData} = props;

  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const formCSS = {
    marginBottom: 2
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    const newData = {
      ...signUpData,
      [name]: value
    };
    setSignUpData(newData);
  }
  
  const handleSubmit = () => {
    if(!ifEmailValid) {
      setShowErrorMessage('Email is required or Invalid Email Format');
      return;
    }
    
    if(!checkUsername)   {
      setShowErrorMessage('Username is required, minimum chars is 8');
      return;
    } 

    if(!validPassword) {
      setShowErrorMessage('Password is Required or Invalid Password Format');
      return;
    }

    if(phoneNumber === null || phoneNumber === '' || phoneNumber === undefined)  {
      setShowErrorMessage('Phone Number is required');
      return;
    }
    setShowErrorMessage('');
  };

  const {email, username, phoneNumber, password } = signUpData;
  const checkUsername = username && username.length >= 8;
  const ifEmailValid = checkValidEmail(email);
  const validPassword = checkStrengthPassword(password) === 5;
  const phoneValid = phoneNumber.replace(/\D/g,'');

  return (
    <>
      <Grid container spacing={1}>
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
                <PersonOutlineIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register for New User
              </Typography>
              <TextField 
                label={
                  <Typography variant="headline" component="h3"> Email</Typography>
                }
                type="email"
                name="email"
                fullWidth  
                required
                error={email !== '' && !ifEmailValid}
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
                tabIndex="1"
                placeholder="Email format must be valid"
                value={email}
                onChange={handleOnChange}
                helperText={email !== '' && !ifEmailValid ? "Please provide valid email" : ""}
              />
              <TextField 
                label={
                  <Typography variant="headline" component="h3"> Username </Typography>
                }
                name="username"
                fullWidth  
                required
                sx={formCSS}   
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}       
                tabIndex="2"
                placeholder="Minimum chars is 8"
                value={username}
                onChange={handleOnChange}
                error={username!== '' && !checkUsername}
                helperText={username!== '' && !checkUsername ? "Minimum Chars for username is 8" : ""}
              />
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
              <TextField 
                label={
                  <Typography variant="headline" component="h3"> Password </Typography>
                }
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                sx={formCSS}
                error={password  !== '' && !validPassword}
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
                  ),
                  maxLength: 10
                }} 
                tabIndex="4"
                value={password}
                onChange={handleOnChange}
                helperText={password !== '' && !validPassword ? "Minimal 8 - 10 char, must contain special char, uppercase and number" : ""}
              />
              
              <Button 
                variant="contained"
                size="large"
                fullWidth
                startIcon={<AppRegistrationOutlinedIcon />}
                onClick={handleSubmit}
                sx={formCSS}
              >
                Sign Up
              </Button>
              
          </Box>  
        </Grid>
      </Grid>
      <Grid>
        {showErrorMessage !== '' && (
          <Alert 
            severity="error" 
            variant="standard">
            {showErrorMessage}
          </Alert>
        )}     
      </Grid>
      
    </>
  )
}

export default Signup;