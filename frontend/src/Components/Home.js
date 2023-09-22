import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axiosInstance from "../axios";

const cards = [
  {
    title: "Personal Information",
    description:
      "Retrieve information that you require through a simple verification process.",
    redirect: "/request-info",
  },
  {
    title: "Official Documents",
    description: "View and download copies of government issued documents.",
    redirect: "/request-documents",
  },
  {
    title: "Upload Private Documents",
    description:
      "Upload private documents such as a copy of your latest NRIC, birth certificates and more.",
    redirect: "/upload-documents",
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
          setName(response.data.value)
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []) // call api to set name on login

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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
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
                    window.location.pathname += card.redirect; // redirect to respective pages
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">About</Button>
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
