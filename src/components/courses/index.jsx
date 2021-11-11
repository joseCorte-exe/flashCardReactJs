import React, { useState, useEffect } from "react";

import Card from "../card/index.jsx"

import axios from 'axios';

import "./index.css";

export default function Courses() {

  const api = axios.create({
    baseURL: "https://api.github.com",
  });

const [ courses, setCourses ] = useState([]);

useEffect(() => {
fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
  .then(response => response.json())
  .then(data => setCourses(data))
}, [])

    return (
        <div className="courses-container">
            {
                courses.map(course => (
                    <Card title={course.nome} description={course.descricao} />
                ))
            }
        </div>
    )
}
