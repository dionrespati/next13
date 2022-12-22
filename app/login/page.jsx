"use client";
import React, {useState} from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from './components/login';
import Signup from './components/signup';
import Container from '@mui/material/Container';
import Forgotpassword from './components/forgotpassword';


const LoginSignIn = () => {

  const [activeTab, setActiveTab] = useState("1");

  const [resetData, setResetData] = useState({
    email: '',
    phoneNumber: ''
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [signUpData, setSignUpData] = useState({
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
  });

  const handleChangeTab = (event, newValue) => {
    return setActiveTab(newValue);
  };

  return (
    <>
      <Container
        maxWidth="sm"
      >
        <Paper
          variant="outlined"
          style={{
            padding: 1,
            width: "100%"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TabContext value={activeTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                    <Tab label="Sign In" value="1" />
                    <Tab label="Sign Up" value="2" />
                    <Tab label="Forgot Password" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Login 
                    loginData={loginData}
                    setLoginData={setLoginData}
                  />
                </TabPanel>
                <TabPanel value="2">
                  <Signup 
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                  />
                </TabPanel>
                <TabPanel value="3">
                  <Forgotpassword 
                    resetData={resetData}
                    setResetData={setResetData}
                  />
                </TabPanel>
              </TabContext>
            </Grid>  
          </Grid> 
        </Paper>
      </Container>  
    </>
  );
};

export default LoginSignIn;