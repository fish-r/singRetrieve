import * as React from "react";
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

import axiosInstance from "../axios";

const cards = [
  {
    title: "Personal Information",
    description:
      "Retrieve information that you require through a simple verification process.",
    redirect: "/home/request-info",
    image: '/personal.svg'
  },
  {
    title: "Official Documents",
    description: "View and download copies of government issued documents.",
    redirect: "/authorise?callback_uri=/home/request-document",
    image: '/files.jpg'
  },
  {
    title: "Upload Private Documents",
    description:
      "Upload private documents such as a copy of your latest NRIC, birth certificates and more.",
    redirect: "/authorise?callback_uri=/home/upload-document",
    image: '/uploadicon.png'
  },
];

const handleMouseOver = (e) => {
  e.currentTarget.style.transform = "scale(1.05)";
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "scale(1)";
};

export default function Home() {
  React.useEffect(() => {
    axiosInstance
      .get("/api/home")
      .then((response) => {
        if (response.data) {
          setName(response.data.value);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // call api to set name on login

  const [name, setName] = React.useState("");

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
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to singRetrieve! Here you can access your private
              information, government issued documents, and even upload
              sensitive documents for easy access and safekeeping!
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 2,
                    cursor: "pointer",
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    window.location.href = card.redirect; // redirect to respective pages
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Retrieve</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
