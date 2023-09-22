import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar position="relative">
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
