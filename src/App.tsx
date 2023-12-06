import React from 'react';
import './App.css';
import {Card} from "./Components/Card/Card";
import cardImage from "./card.jpg";

function App() {
  return (
    <div className="App">
      <Card
          cardImageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          cardContentTitle="One"
          cardContentDescription="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
      />
      <Card
          cardImageUrl={cardImage}
          cardContentTitle="Two"
          cardContentDescription="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
      />
    </div>
  );
}

export default App;
