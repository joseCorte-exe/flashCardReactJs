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
              <img src={Senai} width="100px"/>
              <footer>
                  <p>{ props.description }</p>
              </footer>
          </div>
      </div>
  );
}