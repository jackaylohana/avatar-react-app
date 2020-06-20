import React from 'react';
import './Avatar.css';
import 'tachyons';

function Avatar (props) {
return <div className="avatarstyle ma3 bg-light-purple dib pa4" >
           <img src="https://joeschmoe.io//api/v1/Jack" alt="Avatar" />
           <h1>{props.name} </h1>
           <h2>{props.work}</h2>
       </div>

}

export default Avatar;