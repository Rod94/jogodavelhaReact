import React, { useLayoutEffect } from 'react';
import './styles.css';
import Card from '../../objects/card';
import Player from '../../objects/player';


const Hashtag = () => {
  return (     
      <Card>
        <ul className="hashtag">
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="x"/></li>
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="x"/></li>
          <li className="item"><Player player="o"/></li>
          <li className="item"><Player player="x"/></li>
        </ul>
      </Card> 
    
)
}



export default Hashtag;