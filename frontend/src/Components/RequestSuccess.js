import {
  Box,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../axios";

const RequestSuccess = () => {

  const location = useLocation();
  const [data, setData] = useState({});

  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope");

  useEffect(() => {
    axiosInstance
      .get(`/api/request-info?scope=${scope}`)
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });


    console.log(data)
  }, [])
  return (
    <>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Requested Information
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md"></Container>
      </main>
    </>
  );
};


export default RequestSuccess