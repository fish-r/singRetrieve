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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RequestDocument = () => {

    const navigate = useNavigate();

    // simulate api call to get available documents
    const cards = [
        {
            title: "Marriage Certificate",
            description:
                "View and download your marriage certificate.",
            redirect: "/home/request-info",
            image: '/com.jpeg'
        },
        {
            title: "Certificate of Entitlement",
            description: "View and download your Certificate of Entitlement(COE).",
            image: '/coe.png'
        },
    ];

    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    const handleDownload = () => {
        // simulate api call to download from the backend
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
                            Available Documents
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="text.secondary"
                            gutterBottom
                        >
                            Here are your official documents from various government services.
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
                        {cards.map((card) => (
                            <Grid item key={card.title} xs={12} sm={6} md={6}>
                                <a download href="/coe.png">
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
                                            image={card.image}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography>{card.description}</Typography>
                                        </CardContent>

                                    </Card>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>

    )
}

export default RequestDocument;