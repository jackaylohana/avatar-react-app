import React from 'react';

function Avatarlist (props){
return (
    <div className="avatarstyle tc ma4 bg-light-purple dib pa4" >
        <img src={'https://joeschmoe.io//api/v1/${props.name}'} alt="Avatar" />
        <h1 className="tc">{props.name} </h1>
        <h2 className="tc">{props.work}</h2>
    </div>
)
}

export default Avatarlist;