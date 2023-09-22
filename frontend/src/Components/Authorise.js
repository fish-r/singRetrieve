import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import axiosInstance from "../axios";

const Authorise = () => {
    return (
        <>
            <>
                <CssBaseline>
                    <main>
                        <Container maxWidth="sm">
                            <Typography
                                variant="h4"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Veriface Simulator
                            </Typography>
                            <Typography
                                variant="h8"
                                align="center"
                                color="text.secondary"
                                paragraph
                            >
                                Search, select and add particular queries below or click on a
                                preset
                            </Typography>

                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained" onClick={() => { }}>Retrieve</Button>

                                <Button variant="outlined" onClick={() => {
                                    window.open('https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act')
                                }}>PDPA Guidelines</Button>
                            </Stack>

                        </Container>


                    </main>
                </CssBaseline>
            </>
        </>
    )
}

export default Authorise;