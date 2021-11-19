import axios from 'axios';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import './style.css'

export default function Cadastro() {

    const { colecaoId } = useParams();

    const api = axios.create({
        baseURL: "https://flashcard-api-mayck.herokuapp.com/api/colecoes"
      });

    const [data, setData] = useState({
        name: '',
        description: ''
    })

    console.log(colecaoId)

    function submit(e) {
        e.preventDefault();
        if ( colecaoId ) {
            api.put("/colecaoId", data)
            console.log('put')
        } else {
            api.post('/',
                {
                    name: data.name,
                    description: data.description,
                }
            )
            console.log('post')
        }
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return(
        <div className="cadastro-container">
            <form onSubmit={(e) => submit(e)} className='form' >
                <label>
                    nome do curso:
                    <input onChange={(e) => handle(e)} id='name' value={setData.name} type='text' name='name' />  
                </label>
                <label>
                    descrição: 
                    <input onChange={(e) => handle(e)} id='description' value={setData.description} type='text' name='description' />
                </label>
                <button>cadastrar</button>
            </form>
        </div>
    )
}