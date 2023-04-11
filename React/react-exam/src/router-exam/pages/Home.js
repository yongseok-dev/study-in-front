import React from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  return (
    <div>
      <h1>홈</h1>

      <p>가장 먼저 보여지는 페이지</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/java">김자바</Link>
        </li>
        <li>
          <Link to="/profile/javascript">잡스</Link>
        </li>
        <li>
          <Link to="/profile/sql">이시퀄</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
