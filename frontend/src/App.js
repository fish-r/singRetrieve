import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RequestInfo from "./Components/RequestInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar position="relative" sx={{ mb: "5%" }}>
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              singRetrieve
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/home/request-info" element={<RequestInfo></RequestInfo>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
