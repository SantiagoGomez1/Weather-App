import { Link } from "react-router-dom"
import Style from './Card.module.css'

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={Style.Container}>
      <div>
        <button className={Style.Boton} onClick={onClose}>X</button>
        <div className={Style.link}>
          <h4>{name}</h4>
        </div>
        <div className={Style.Temp}>
          <div>
            <h6>Max</h6>
            <p>{max}º</p>
          </div>
          <div>
            <h6>Min</h6>
            <p>{min}º</p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div >
  )
}