import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./router-exam/pages/About";
import Home from "./router-exam/pages/Home";
import Profile from "./router-exam/pages/Profile";
import Articles from "./router-exam/pages/Articles";
import Article from "./router-exam/pages/Article";
import Layout from "./router-exam/pages/Layout";
import NotFound from "./router-exam/pages/NotFound";
import MyPage from "./router-exam/pages/MyPage";
import Login from "./router-exam/pages/Login";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/profile/:username"
            element={<Profile></Profile>}
          ></Route>
          <Route path="/articles" element={<Articles></Articles>}>
            <Route path=":id" element={<Article></Article>}></Route>
          </Route>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="mypage" element={<MyPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
