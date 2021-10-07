import React from "react";

import Card from "../card/index.jsx"

import "./index.css";

export default function Courses() {

    const recipeAuthor = "José";
    const recipeItem = {
    title: "Couse: React with the best",
    date: "32 de julho de 2012",
    description:
      "O melhor curso de React com quem sabe pouco de react, se inscreva agora para não perder essa grande oportunidade, que alias unica e exclusiva",
  };

  const like = 193;
  const isLiked = true;

    return (
        <div className="courses-container">
            <Card
            author={ recipeAuthor }
            title={ recipeItem.title }
            date={ recipeItem.date }
            description={ recipeItem.description }
            liked={ true }
            likeCount={ like }
          />
            <Card
            author={ recipeAuthor }
            title={ recipeItem.title }
            date={ recipeItem.date }
            description={ recipeItem.description }
            liked={ true }
            likeCount={ like }
          />
            <Card
            author={ recipeAuthor }
            title={ recipeItem.title }
            date={ recipeItem.date }
            description={ recipeItem.description }
            liked={ false }
            likeCount={ like }
          />
            <Card
            author={ recipeAuthor }
            title={ recipeItem.title }
            date={ recipeItem.date }
            description={ recipeItem.description }
            liked={ true }
            likeCount={ like }
          />
        </div>
    )
}
