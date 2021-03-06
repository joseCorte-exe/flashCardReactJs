import React from 'react';
import { Outlet, Link } from "react-router-dom";

import Logo from "../../assets/logoEricsson.png";

import "./index.css";

export default function Header() {
    return(
        <div className="header-container">
            <img src={Logo} width="100px"/>
            <div className="header-content">
                <Link to="/" className="link">            
                    <a>Home</a>
                </Link>

                <Link to="/courses" className="link">
                    <a>Courses</a>
                </Link>

                <Link to="/cadastro/novo" className="link">
                    <a>Cadastrar curso</a>
                </Link>

                <Link to="/" className="link">
                    <a>Account</a>
                </Link>
            </div>
        </div>
    )
}
