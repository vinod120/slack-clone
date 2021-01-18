import React from 'react'
import './Messages.css';
const Messages = ({message, timestamp, user, userimage}) => {
    return (
        <>
            <div className="message">
                <img src={userimage} alt="user_avatar"/>
                <div className="message_info">
                    <h4>
                        {user} <span className="message_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                    </h4>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}

export default Messages
