import {
  Box,
  CssBaseline,
  Container,
  Typography,
  Grid, Stack,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const RequestSuccess = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [data, setData] = useState({});
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope");

  const formatData = (data) => {
    console.log(data)
    const formatted = Object.keys(data).reduce((output, key) => {
      output[key] = data[key].value || data[key].desc || 'NA'
      return output
    }, {})
    return formatted;
  }

  useEffect(() => {
    axiosInstance
      .get(`/api/request-info?scope=${scope}`)
      .then((response) => {
        if (response.data) {
          setData(formatData(response.data))
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }, [scope])
  return (
    <>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth="sm" sx={{ mt: "2%" }}>
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Requested Information
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained"
                onClick={() => {
                  navigate('/home/request-info', { replace: true });
                }}>
                Back to Requests
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  navigate('/home', { replace: true });
                }}
              >
                Back to home
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="xs" align="left">
          {Object.keys(data).map((key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="left"
              >
                <Typography variant="h5">
                  {key}:
                </Typography>
                <Typography variant="h6">
                  {data[key]}
                </Typography>
              </Stack>
            </Grid>))}
        </Container>
      </main>
    </>
  );
};


export default RequestSuccess