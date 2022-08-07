import React from 'react'
import { Link } from "react-router-dom"
import style from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx"

export default function Nav({ onSearch }) {
    return (
        <nav className={style.container}>
                <div className={style.text}>
            <Link to='/' className={style.link}>
                    <p>Clima</p>
            </Link>
                    <h4>El clima de tus ciudades favoritas</h4>
                </div>
            <Link to="/about" className={style.none}>
                <h3>About me</h3>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}