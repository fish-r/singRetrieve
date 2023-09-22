import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home'

function App() {




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} />
          <Route path='/home' element={<Home></Home>} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
