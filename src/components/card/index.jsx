import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Senai from '../../assets/senai.png'

import Logo from "../../assets/logoEricsson.png";

import './index.css'

export default function Card(props) {

  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    fetch('https://flashcard-api-mayck.herokuapp.com/api/colecoes')
      .then(response => response.json())
      .then(data => setCourses(data))
  }, [])

  return (
      <div class='card-container' >
          <div class='card-content' >
              <h3>{ props.title }</h3>
              <div class='card-image' ></div>
              <footer>
                  <p>{ props.description }</p>
              </footer>
          </div>
      </div>
    // <div className="card-container">
    //   <h2>Cursos</h2>
    //   <div className="content-card">
    //     {courses.map(course => (
    //       <div className="card">
    //         <span>{ course.nome }</span>
    //         <img src={Senai}/>
    //         <p>{ course.descricao }</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}