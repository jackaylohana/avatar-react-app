import React from 'react'
import ReactDom from 'react-dom'



function Demo ({name, age}) {
    return <div>
       <h1>Hello {name}! Your age is {age}. </h1> 
       <h2>Before ten years you were {age-10}</h2>
</div>

}

export default Demo;
