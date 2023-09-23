import { Box, CssBaseline, Container, Typography, Grid, Card, CardActions, CardMedia, CardContent, Button } from "@mui/material";

const RequestSuccess = () => {
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
                <Container sx={{ py: 4 }} maxWidth="md">

                </Container>
            </main>

        </>
    )
}