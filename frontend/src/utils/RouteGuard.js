import { CssBaseline, Container, Typography, CircularProgress } from "@mui/material";
import axiosInstance from "../axios"
import React, { useEffect, useState } from 'react';

const InvalidSessionComponent = () => {
    return (
        <CssBaseline>
            <main>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Invalid Session, kindly log in again.
                    </Typography>

                </Container>
            </main>
        </CssBaseline>
    )
}

const RouteGuard = (props) => {
    const [loading, setLoading] = useState(true)
    const [authed, setAuthed] = useState(false)

    useEffect(() => {
        axiosInstance.get('/api/verify-token')  // verify token on server side
            .then((response) => {
                setLoading(false)
                console.log(response)
                if (response.status === 200) {
                    setAuthed(true)
                }
            }).catch((error) => {
                console.log(error.message)
                setLoading(false)
            })
    }, [])

    return (
        loading ? (
            <CircularProgress />
        ) : (

            authed ?
                props.children : <InvalidSessionComponent />

        )
    )
}



export default RouteGuard;

