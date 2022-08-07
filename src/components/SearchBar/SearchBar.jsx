import Styles from './SearchBar.module.css'
import React, {useState} from 'react';

export default function SearchBar({onSearch}) {
    const [city,setCity] = useState ('')
    return (
        <div className={Styles.Container}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value = {city}
          onChange={ e =>{
            setCity(e.target.value)
          }}
        />
        <input className={Styles.Boton} type="submit" value="Agregar" />
      </form>
      </div>
    );
  }