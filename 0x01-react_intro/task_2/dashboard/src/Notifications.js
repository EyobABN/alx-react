import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils';


export default function Notifications() {
  return (
    <div className="Notifications">
      <button type="button"
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
              style={{display: 'inline-block', width: '15px', height: '15px', float: 'right ', position: 'relative'}}>
        <img src={closeIcon} alt="close icon" style={{height: '15px', width: '15px', margin: '0', position: 'absolute', top: '0', left: '0'}} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li key={1} data-priority="normal">New course available</li>
        <li key={2} data-priority="urgent">New resume available</li>
        <li key={3} data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      
    </div>
  );
}
