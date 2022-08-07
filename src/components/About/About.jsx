import React from "react";
import { Link } from "react-router-dom";
import CopyNav from "../Nav/CopyNav.jsx";
import styles from "./About.module.css";
import img from "../../Images/yo.jpeg";
export default function About() {
  return (
    <div>
      <CopyNav />
      <div className={styles.containerMax}>
        <div className={styles.container}>
          <img src={img} alt="" />
          <h2>Hola, me llamo Santiago Gómez.</h2>
          <p>
            Este es mi primer proyecto en React con Javascript, si queres ver
            mas o contactarme podes hacerlo por mi
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/santiago-gomez-68ba97239/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Linkedin
            </a>{" "}
            o{" "}
            <a
              className={styles.link}
              href="https://github.com/SantiagoGomez1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>¡Muchas Gracias!</p>
        </div>
      </div>
    </div>
  );
}
