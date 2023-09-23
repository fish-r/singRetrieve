import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RequestInfo from "./Components/RequestInfo";
import Box from "@mui/material/Box";
import Authorise from "./Components/Authorise";
import RouteGuard from "./utils/RouteGuard";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* app bar */}
        <AppBar position="relative" sx={{ mb: "5%" }}>
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              singRetrieve
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login></Login>} />

          <Route path="/home" element={
            <RouteGuard>
              <Home />
            </RouteGuard>} />

          <Route
            path="/home/request-info"
            element={<RouteGuard><RequestInfo /></RouteGuard>}
          />

          <Route path="/authorise" element={<Authorise></Authorise>} />

        </Routes>

        {/* footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            This is a prototype made for the NDI technical assessment. Kindly
            reach out to <a href="https://github.com/fish-r">@fish-r</a> for any
            questions.
          </Typography>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
