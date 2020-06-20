import React from 'react'
import ReactDom from 'react-dom'
import './Demo.css'



function Demo ({name, age}) {
    return <div className="maindiv_style">
       <h1>Hello {name}! Your age is {age}. </h1> 
       <h2>Before ten years you were {age-10}</h2>
</div>
}

export default Demo;
