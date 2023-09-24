import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axiosInstance from "../axios";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Login = () => {

  const [loginType, setLoginType] = React.useState("singpass")

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // const payload = {

    //   username: data.get('singpassId'),
    //   password: data.get('password'),

    // }
    const payload = {
      username: "ABC", // hardcoded to simulate
      password: "123",
    };
    console.log(payload);

    axiosInstance
      .post("/api/login", payload)
      .then((response) => {
        if (response.data) {
          sessionStorage.setItem("token", response.data.token);
          window.location.pathname = "/home"; // redirect to home page
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CssBaseline>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/hdb.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in with Singpass
            </Typography>


            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >

              <Tab label="Singpass app" onClick={() => { setLoginType("singpass") }} />
              <Tab label="Password login" onClick={() => { setLoginType("password") }} />

            </Tabs>

            {/* Singpass Login */}
            {
              loginType === 'singpass' ? (<Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }} >
                <img src="/singpassLogin.jpg" alt="singpass-login" onClick={handleSubmit} style={{ cursor: 'pointer' }}></img>
              </Box>) : (
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

                  {/* Password login */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Singpass ID"
                    name="username"
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>

                    </Grid>
                  </Grid>
                  {/* Password login end */}
                </Box>
              )
            }

          </Box>
        </Grid>
      </Grid>

    </CssBaseline>
  );
};

export default Login;
