import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
        descricao: ''
    })

    console.log(colecaoId)

    function submit(e) {
        e.preventDefault();
        if ( colecaoId ) {
            api.put("/"+colecaoId, {
                nome: data.nome,
                descricao: data.descricao,
            })
            console.log('put')
        } else {
            api.post('/colecaoId',
            {
                nome: data.nome,
                descricao: data.descricao,
            })
            console.log("post")
        }
    }

    function handleDelete( e ){
        api.delete("/" + colecaoId)

        console.log("curso de id:" + colecaoId + ", excluido")
    }

    useEffect(()=>{
        api.get("/" + colecaoId)
            .then(res => setData(res.data))
    }, colecaoId)

    return(
        <div className="cadastro-container">
            <form onSubmit={(e) => submit(e)} className='form' >
                <label>
                    nome do curso:
                    <input onChange={ (e) => setData({...data, nome: e.target.value})} id='name' value={data.nome} type='text' name='name' />  
                </label>
                <label>
                    descrição: 
                    <input onChange={(e) => setData({...data, descricao: e.target.value})} id='description' value={data.descricao} type='text' name='description' />
                </label>
                <div className='buttons'>
                    <button>cadastrar</button>
                    <button onClick={handleDelete} >Deletar curso</button>
                </div>
            </form>
        </div>
    )
}