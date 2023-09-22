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
  return (
    <>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
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
              Album layout
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
            {/* <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                  onClick={() => {}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
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

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This is just a prototype made for the NDI technical assessment. Kindly
          reach out to <a href="https://github.com/fish-r">@fish-r</a> for any
          questions.
        </Typography>
      </Box>
    </>
  );
}
