import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';
import Avatarlist from './Avatarlist';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.StrictMode>
     <Demo name="Jack" age={25}/>,
     <Avatar/>,
  </React.StrictMode>,
  document.getElementById('root')
);





serviceWorker.unregister();
