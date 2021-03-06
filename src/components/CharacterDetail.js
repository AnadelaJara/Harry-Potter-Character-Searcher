import { Link } from "react-router-dom";
import Shield from '../images/Logo-Hogwarts.png';
import Gryffindor from '../images/gryffindor.png';
import Hufflepuff from '../images/hufflepuff.png';
import Ravenclaw from '../images/ravenclaw.png';
import Slytherin from '../images/slytherin.png';


const CharacterDetail = (props) => {

  const getSpecies = () => {
    if (props.character.species === "human") {
      return <p>Humano <i className="far fa-user"></i></p>;
    } else if (props.character.species === "half-giant") {
      return <p>Medio-gigante</p>;
    } else if (props.character.species === "werewolf") {
      return <p>Hombre-lobo</p>;
    } else if (props.character.species === "goblin") {
      return <p>Duende</p>;
    } else if (props.character.species === "ghost") {
      return <p>Fantasma <i className="fas fa-ghost"></i></p>;
    } else if (props.character.species === "house-elf") {
      return <p>Elfo doméstico</p>;
    } else if (props.character.species === "poltergeist") {
      return <p>Poltergeist</p>;
    } else if (props.character.species === "giant") {
      return <p>Gigante</p>;
    } else if (props.character.species === "centaur") {
      return <p>Centauro</p>;
    } else if (props.character.species === "half-human") {
      return <p>Medio-humano</p>;
    } else if (props.character.species === "owl") {
      return <p>Búho</p>;
    }
  };

  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : " Hombre";
  };

  const getStatus = () => {
    if (props.character.status && props.character.gender === 'female') {
      return <p>Viva  < i className="fas fa-heartbeat" ></i ></p>
    } else if (props.character.status && props.character.gender === 'male') {
      return <p>Vivo  < i className="fas fa-heartbeat" ></i ></p>
    } else if (!props.character.status && props.character.gender === 'female') {
      return <p>Muerta <i className="fas fa-skull"></i></p>
    } else if (!props.character.status && props.character.gender === 'male') {
      return <p>Muerto <i className="fas fa-skull"></i></p>
    }
  };

  const getShield = () => {
    if (props.character.house === 'Gryffindor') {
      return Gryffindor;
    } else if (props.character.house === 'Hufflepuff') {
      return Hufflepuff;
    } else if (props.character.house === 'Ravenclaw') {
      return Ravenclaw;
    } else if (props.character.house === 'Slytherin') {
      return Slytherin;
    }
  };

  return (
    <section >
      <div className="container__link">
        <Link className="link__back" to="/">Volver</Link>
      </div>
      <div className="container__details">

        <img className="container__details--img" src={props.character.image !== "" ? props.character.image : Shield}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <div className="container__details--text">
          <h2>{props.character.name}</h2>
          <p className="container__details--text__status">{getStatus()}</p>
          <p className="container__details--text__status">{getSpecies()}</p>
          <p className="container__details--text__status">{getGender()}</p>
          <p className="container__details--text__status" > {props.character.house}</p >
          <p className="container__details--text__status" > {props.character.alternate_names}</p >
          <img
            className="shield"
            src={getShield()}
            alt={`Escudo de la casa ${props.character.house}`}
            title={`Escudo de la casa ${props.character.house}`}
          />
        </div >
      </div >
    </section >
  )
}

export default CharacterDetail;