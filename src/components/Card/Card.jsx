import { Link } from "react-router-dom"
import Style from './Card.module.css'

export default function Card({ humidity, max, name, img, onClose, country }) {
  return (
    <div className={Style.Container}>
      <div>
        <button className={Style.Boton} onClick={onClose}>X</button>
        <div className={Style.link}>
          <h2>{name}</h2>
          <h4>{country}</h4>
        </div>
        <div className={Style.Temp}>  
          <div className={Style.value}>
            <h6>Max</h6>
            <p>{max} º</p>
          </div>
          <div className={Style.value}>
            <h6>Humidity</h6>
            <p>{humidity} %</p>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div >
  )
}