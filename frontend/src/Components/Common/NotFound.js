import {
    CssBaseline,
    Container,
    Typography,
} from "@mui/material";

const NotFound = () => {
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
                        404: Not found
                    </Typography>
                </Container>
            </main>
        </CssBaseline>
    )
}

export default NotFound