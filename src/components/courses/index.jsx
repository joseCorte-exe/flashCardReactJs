import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

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
                  <Link to={"/cadastro/editar/" + course.colecaoId}>
                    <Card title={course.nome} description={course.descricao} />
                  </Link>
                ))
            }
        </div>
    )
}
