import React, {useState} from 'react';
import './Room.css'
import 'tachyons';

// This is custom Room component.
function Room (){

    // useState is a react thing which returns an array. 
    // index0 is state of object and
    // index1 is used to change and track that change of state.
    let [isLit, setLit] = useState(false);  // initial state of light is falsle means off. 
    let [tempValue, setTemp] = useState(22); // initially temperature value is 22 degrees.

return (
<div>
    <div className={`room ${isLit ? "lit" : "dark"} dib tc`}>
        <h1>the room is {isLit ? "lit" : "dark"}</h1>
    </div>

    <div className="button_style"><button onClick={()=> setLit(!isLit)}>Flip light</button></div>

    <br/>

    <div className={`room ${tempValue < 15 ? "cold" : "hot"} dib tc`}>
        <h1>the current room temperature is {tempValue} °C</h1>
    </div> 
    <div className="button_style">
    <button onClick={()=> setTemp(++tempValue)}>Inc Temp</button>
    <button onClick={()=> setTemp(--tempValue)}>Dec Temp</button>
    </div>
    <h2> {tempValue < 15 ? "The room is cold. Kindly switch on the heater" : "The room is hot. Kindly switch on the AC!"}</h2>
    <h3>NOTE: Below 15 °C, the background color of temperature value will change and will display message of turning on AC.</h3>
</div>
);
}


export default Room;