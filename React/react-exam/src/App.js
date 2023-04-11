import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./router-exam/pages/About";
import Home from "./router-exam/pages/Home";
import Profile from "./router-exam/pages/Profile";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile/:username" element={<Profile></Profile>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
