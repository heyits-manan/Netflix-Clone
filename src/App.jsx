import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import RegEmail from "./components/Signup/RegEmail/Reg";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/regemail" element={<RegEmail />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
