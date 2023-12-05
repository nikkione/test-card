import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
  <div>
    <CardImage />
    <CardTitle />
    <CardDescription />
    <CardActions />
  </div>
  );
}

function CardImage(){
  return (
    <div>
    </div>
    );
}

function CardTitle(){
  return (
    <div>
    </div>
    );
}

function CardDescription(){
  return (
    <div>
    </div>
    );
}
function CardActions(){
  return (
    <div>
      <CardActionBtn />
    </div>
    );
}

function CardActionBtn(){
  return (
    <div></div>
    );
}
export default App;
