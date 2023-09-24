import {
    Box,
    CssBaseline,
    Container,
    Typography,
    Grid,
    Card,
    Stack,
    CardMedia,
    CardContent,
    Button,
    CardActions
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UploadDocument = () => {

    const navigate = useNavigate();
    // simulate response from backend
    const response = [
        {
            title: "Ordinary Level Certificate",
            description:
                "View or upload your O'Level Certificate.",
            resource: "/home/request-info",
            image: '/olevel.jpeg',
            exists: 'true'
        },
        {
            title: "Resume",
            description: "View or upload your current resume for safekeeping.",
            image: '/doc.png',
            exists: 'false'
        },
    ];

    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    const handleDownload = () => {
        // Get request to download from the backend
    }

    const handleUpload = () => {
        // Post request to upload file
    }

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
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Upload Documents
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="text.secondary"
                            gutterBottom
                        >
                            Here you can upload private documents such as your educational certificate or even your resume for safekeeping.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
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
                <Container sx={{ py: 4 }} maxWidth="lg">
                    <Grid container spacing={4}>
                        {response.map((response) => (
                            <Grid item key={response.title} xs={12} sm={6} md={6}>
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
                                    onClick={handleDownload}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            pt: "56.25%",
                                        }}
                                        image={response.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {response.title}
                                        </Typography>
                                        <Typography>{response.description}</Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button
                                            onClick={response.exists ? handleDownload : handleUpload}
                                            size="small">{response.exists ? "Download" : "Upload"}</Button>
                                    </CardActions>

                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>

    )
}

export default UploadDocument;