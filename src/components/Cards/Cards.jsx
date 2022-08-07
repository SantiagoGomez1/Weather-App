import Card from "../Card/Card";
import Styles from "./Cards.module.css"



export default function Cards({cities, onClose}) {
    if(cities){
      return (
        <div className={Styles.Cards}>
          {cities.map(c => <Card
              key={c.id}
              country={c.country}
              max={c.max}
              humidity={c.humidity}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
              /> )}
        </div>
      );
    } else {
      return(
        <div>Sin ciudades</div>
      )
    }
  }