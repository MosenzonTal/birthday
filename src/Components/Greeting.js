import React from "react";
import song from './bruno.mp3'


function Greeting() {

  return (
    <div>
      <h1>Sucess</h1>

      <audio controls autoPlay={true}  width="50" height="50">
        <source src={song} type="audio/mp3"></source>
        </audio>      


    </div>
  );
}

export default Greeting;
