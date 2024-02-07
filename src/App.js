import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignUpSuccess from "./components/SignUp_Success";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupsuccess" element={<SignUpSuccess />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
} 

export default App;
