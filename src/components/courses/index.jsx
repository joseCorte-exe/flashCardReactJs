import React, { useState, useEffect } from "react";

import Card from "../card/index.jsx"

import axios from 'axios';

import "./index.css";

export default function Courses() {

    const recipeAuthor = "José";
    const recipeItem = {
    title: "Couse: React with the best",
    date: "32 de julho de 2012",
    description:
      "O melhor curso de React com quem sabe pouco de react, se inscreva agora para não perder essa grande oportunidade, que alias unica e exclusiva",
  };

  const api = axios.create({
    baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes"
  });

  const like = 193;
  const isLiked = true;

    return (
        <div className="courses-container">
            <Card
          />
        </div>
    )
}
