import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import './Chat.css';
import db from '../firebase';
import Messages from './Messages';
import ChatInput from './ChatInput';
const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }
        db.collection("rooms")
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', "asc")
            .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())))
    }, [roomId])
    // console.log(roomDetails)
    console.log(roomMessages)
    return (
        <>
            <div className="chat">
                {/* <h2>You are in the {roomId} room</h2> */}
                <div className="chat_header">
                    <div className="chat_headerLeft">
                        <h4 className="chat_channelName">
                            <strong>#{roomDetails?.name}</strong>
                            <StarBorderOutlinedIcon />
                        </h4>
                    </div>
                    <div className="chat_headerRight">
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </div>
                </div>

                <div className="chat_messages">
                    {/* Messages */}
                    {roomMessages.map(({ message, timestamp, user, userimage }) => (
                        <Messages
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userimage={userimage}
                        />
                    ))}
                </div>
                
                <ChatInput channelName = {roomDetails?.name} channelId ={roomId} /> 

            </div>
        </>
    )
}

export default Chat
