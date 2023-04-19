import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NewsList from "./api-exam/components/NewsList";
import Categories from "./api-exam/components/Categories";

function App() {
  return (
    <div className="App">
      <div>
        <Categories></Categories>
        <NewsList></NewsList>
      </div>
    </div>
  );
}

export default App;
