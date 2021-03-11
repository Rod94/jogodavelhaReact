import React from 'react';
import './styles.css';


const Card = (props) => {
  return (
  <article className="game-card">
    {props.children}
  </article>)
}


export default Card;