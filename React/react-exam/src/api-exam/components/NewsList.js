import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";

const NewsList = () => {
  const NewsListBlock = styled.div`
    // display: flex;
  `;
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // const sample = {
  //   title: "제목",
  //   description: "내용",
  //   url: "https://google.com",
  //   urlToImage: false,
  // };

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {/* <h2 onClick={console.log(1)}>새로고침</h2> */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
