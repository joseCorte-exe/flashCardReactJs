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
        name: '',
        descricao: ''
    })

    console.log(colecaoId)

    function submit(e) {
        e.preventDefault();
        if ( colecaoId ) {
            api.put("/"+colecaoId, {
                name: data.name,
                descricao: data.descricao,
            })
            console.log('put')
        } else {
            api.post('/',
                {
                    nome: data.name,
                    descricao: data.descricao,
                }
            )
            console.log(data)
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

    console.log(data.name);

    return(
        <div className="cadastro-container">
            <form onSubmit={(e) => submit(e)} className='form' >
                <label>
                    nome do curso:
                    <input onChange={ e => setData({...data, name: e.target.value})} id='name' value={data.name} type='text' name='name' />  
                </label>
                <label>
                    descrição: 
                    <input onChange={e => setData({...data, descricao: e.target.value})} id='description' value={data.descricao} type='text' name='description' />
                </label>
                <button>cadastrar</button>
                <button onClick={handleDelete} >Deletar curso</button>
            </form>
        </div>
    )
}