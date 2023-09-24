import {
  CssBaseline,
  Container,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import axiosInstance from "../axios";
import React, { useEffect, useState } from "react";

const InvalidSessionComponent = () => {
  return (
    <CssBaseline>
      <main>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="left"
            color="red"
            gutterBottom
            mt="3%"
          >
            Invalid Session, kindly {}
            <a href="/login">log in</a> again.
          </Typography>
        </Container>
      </main>
    </CssBaseline>
  );
};

const RouteGuard = (props) => {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/api/verify-token") // verify token on server side
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setAuthed(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <CssBaseline>
      <main>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Box>
      </main>
    </CssBaseline>
  ) : authed ? (
    props.children
  ) : (
    <InvalidSessionComponent /> // Redirect to invalid session
  );
};

export default RouteGuard;
