import React from 'react';
import './styles.css';
import Card from '../../objects/card';
import Player from '../../objects/player';


const Hashtag = () => {
  return ( 
      <Card>
        <Player player="o"/>
        <Player player="o"/>
        <Player player="x"/>
        <Player player="o"/>
      </Card> 
)
}



export default Hashtag;