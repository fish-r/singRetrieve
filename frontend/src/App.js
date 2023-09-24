import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RequestInfo from "./Components/RequestInfo";
import Box from "@mui/material/Box";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Authorise from "./Components/Authorise";
import RouteGuard from "./utils/RouteGuard";
import RequestSuccess from "./Components/RequestSuccess";
import RequestDocument from "./Components/RequestDocument";
import UploadDocument from "./Components/UploadDocument";
import NotFound from "./Components/Common/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* app bar */}
        <AppBar position="relative" sx={{}}>
          <Toolbar>

            <Typography variant="h6" color="inherit" noWrap>
              SingRetrieve
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes>

          <Route path="/login" element={<Login></Login>} />

          <Route
            path="/home"
            element={
              <RouteGuard>
                <Home />
              </RouteGuard>
            }
          />

          <Route
            path="/home/request-info?"
            element={
              <RouteGuard>
                <RequestInfo />
              </RouteGuard>
            }
          />

          <Route
            path="/authorise"
            element={
              <RouteGuard>
                <Authorise />
              </RouteGuard>
            }
          />

          <Route
            path="/request-info/success"
            element={
              <RouteGuard>
                <RequestSuccess />
              </RouteGuard>
            }
          />

          <Route
            path="/home/request-document"
            element={
              <RouteGuard>
                <RequestDocument />
              </RouteGuard>
            }
          />

          <Route
            path="/home/upload-document"
            element={
              <RouteGuard>
                <UploadDocument />
              </RouteGuard>
            }
          />

          <Route path="*" element={<NotFound />} />

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
