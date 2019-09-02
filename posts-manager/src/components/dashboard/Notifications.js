import React from 'react';
import moment from 'moment';
import myWindow from '../../media/window.jpg';
import '../../styles/notifications.scss';

const Notifications = (props) => {
  const { notifications } = props;
    return(
        <div id="notif-window">
          <img src={myWindow} alt=""/>
          <div id='notifications'>
          <h3 id="notif-title">Notifications</h3>
          <ul id="notif-list">
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span id='notif-user'>{item.user } </span>
                  <span id='notif-content'> {item.content}</span>
                  <div id='notif-date'>
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            }) }
          </ul>
    </div>
        </div>
    )
}

export default Notifications;