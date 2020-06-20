import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.StrictMode>
     <Demo name="Jack" age={25}/>,
     <Avatar id="1" name="Jack" work="Software Developer" />, 
     <Avatar id="2" name="John" work="Web Developer"/>, 
     <Avatar id="3" name="Sam" work="Frontend Developer"/>, 
     <Avatar id="4" name="Rose" work="Backend Developer"/>, 
  </React.StrictMode>,
  document.getElementById('root')
);





serviceWorker.unregister();
