import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://s.yimg.com/ny/api/res/1.2/vy4O3g4FP6OD3efB1zJSdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1OA--/https://s.yimg.com/os/creatr-uploaded-images/2021-12/ce2b70f0-6001-11ec-985f-b6acae078320"
    },
    {
      name: "Jeff Bezoz",
      url: "https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos.jpg"
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: "+ nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }
  
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
          >
            <div 
              style={{backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;
