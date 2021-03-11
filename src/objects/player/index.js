import React from 'react';
import './styles.css';
import playerX from '../../assets/X.png';
import playerO from '../../assets/Circle.png';

const Player = ({player}) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`O Jogador ${player.toUpperCase()}`}/>
    </button>
  )
}


export default Player;