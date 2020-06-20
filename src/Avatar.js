import React from 'react';
import './Avatar.css';
import 'tachyons';

function Avatar (props) {
return  <div> 
        <div><h1> Welcome to the Avatar World!</h1></div>
        <div className="avatarstyle tc ma3 bg-light-purple dib pa2" >
           <img src="https://joeschmoe.io//api/v1/Jack" alt="Avatar" />
           <h1 className="tc">{props.name} </h1>
           <h2 className="tc">{props.work}</h2>
           <button>Subscribe</button>
       </div>
       </div>

}

export default Avatar;