import React from "react";

const Categories = () => {
  const categories = [
    { name: "all", text: "전체보기" },
    { name: "business", text: "비즈니스" },
    { name: "entertainment", text: "엔터테인먼트" },
    { name: "health", text: "건강" },
    { name: "sciene", text: "과학" },
    { name: "sport", text: "스포츠" },
    { name: "technology", text: "기술" },
  ];
  return (
    <div>
      {categories.map((c) => (
        <div key={c.name}>{c.text}</div>
      ))}
    </div>
  );
};

export default Categories;
