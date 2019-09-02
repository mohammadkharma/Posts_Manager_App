import React from 'react';
import moment from 'moment';
import '../../styles/notifications.scss';

const Notifications = (props) => {
  const { notifications } = props;
    return(
          <div id='notifications'>
          <h1>Notifications</h1>
          <ul>
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
    )
}

export default Notifications;