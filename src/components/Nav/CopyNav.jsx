import React from 'react'
import { Link } from "react-router-dom"
import style from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={style.container}>
                <div className={style.text}>
            <Link to='/' className={style.link}>
                    <p>Clima</p>
            </Link>
                    <h4>El clima de tus ciudades favoritas</h4>
                </div>
        </nav>
    )
}