import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [serchParams, setSerchParams] = useSearchParams();
  const detail = serchParams.get("detail");
  const mode = serchParams.get("mode");

  const onToggleDetail = () => {
    setSerchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSerchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 사용된 페이지</p>
      <p>detail:{detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>toggle detail</button>
      <br></br>
      <button onClick={onIncreaseMode}>mode+1</button>
      {/* <p>쿼리스트링: {location.search}</p> */}
    </div>
  );
};

export default About;
