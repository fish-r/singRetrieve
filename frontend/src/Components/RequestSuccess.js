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
  const [formatted, setFormatted] = useState([])
  const queryParams = new URLSearchParams(location.search);
  const scope = queryParams.get("scope");

  const formatData = (data) => {
    console.log(data)
    const formatted = Object.keys(data).reduce((output, key) => {
      output[key] = data[key].value || data[key].desc || 'NA'
      setFormatted(output)
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
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Requested Information
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {Object.keys(data).map((key) => (
            <div>
              {key}:{data[key]}
            </div>
          ))}
        </Container>
      </main>
    </>
  );
};


export default RequestSuccess