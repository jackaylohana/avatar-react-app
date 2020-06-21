import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
import Room from './Room';


function Avatar (props) {
return ( <div>
        <div>
                <Room/>
        </div>
        <span className= "tc"><h1> Welcome to the Avatar World!</h1></span>
        <Avatarlist id="1" name="Jack" work="Software Developer"/>
        <Avatarlist id="2" name="John" work="Web Developer"/>
        <Avatarlist id="3" name="Sam" work="Frontend Developer"/>
        <Avatarlist id="4" name="Rose" work="Backend Developer"/> 
        </div>
)
}

export default Avatar;