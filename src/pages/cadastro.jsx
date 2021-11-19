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
        nome: '',
        description: ''
    })

    console.log(colecaoId)

    function submit(e) {
        e.preventDefault();
        if ( colecaoId ) {
            api.put("/"+colecaoId, {
                name: data.nome,
                descricao: data.description,
            })
            console.log('put')
        } else {
            api.post('/',
                {
                    name: data.nome,
                    descricao: data.description,
                }
            )
            console.log('post')
        }
    }

    console.log(data.nome);

    return(
        <div className="cadastro-container">
            <form onSubmit={(e) => submit(e)} className='form' >
                <label>
                    nome do curso:
                    <input onChange={e => setData({...data, nome: e.target.value})} id='name' value={data.nome} type='text' name='name' />  
                </label>
                <label>
                    descrição: 
                    <input onChange={e => setData({...data, description: e.target.value})} id='description' value={data.description} type='text' name='description' />
                </label>
                <button>cadastrar</button>
                <button></button>
            </form>
        </div>
    )
}