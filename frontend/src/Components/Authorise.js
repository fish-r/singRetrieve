import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import WebcamCapture from "./Common/WebcamCapture";
import { useLocation, useNavigate } from "react-router-dom";

const Authorise = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSimulateSuccess = () => {
    const queryParams = new URLSearchParams(location.search);
    const callback_uri = queryParams.get("callback_uri");
    navigate(callback_uri, { replace: true }); // use navigate to prevent backing
    // find a way to stop stream
  };
  return (
    <>
      <CssBaseline>
        <main>
          <Container maxWidth="md" sx={{ mt: "2%" }}>
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
              Please look into the camera and follow the instructions
            </Typography>

            <WebcamCapture />

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleSimulateSuccess}>
                Simulate Success
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  window.history.back();
                }}
              >
                Cancel Face Verification
              </Button>
            </Stack>
          </Container>
        </main>
      </CssBaseline>
    </>
  );
};

export default Authorise;
