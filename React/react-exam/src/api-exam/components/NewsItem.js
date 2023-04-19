import React from "react";
import styled from "styled-components";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  const NewsItemBlock = styled.div`
    display: flex;
  `;
  return (
    <div>
      <NewsItemBlock>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url}>
              <img src={urlToImage}></img>
            </a>
          </div>
        )}
        <div>
          <h2>
            <a href={url}>{title}</a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemBlock>
    </div>
  );
};

export default NewsItem;
