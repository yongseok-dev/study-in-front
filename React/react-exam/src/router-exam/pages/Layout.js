import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
        <ul>
          <li>
            <button onClick={goBack}>뒤로가기</button>
          </li>
          <li>
            <button onClick={goArticles}>게시글 목록</button>
          </li>
          <li>
            <button onClick={goArticles}>게시글 목록</button>
          </li>
        </ul>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
