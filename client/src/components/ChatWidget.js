import React, {useState, useEffect} from 'react'
import {Widget, addResponseMessage, deleteMessages} from 'react-chat-widget';
import io from "socket.io-client";
import 'react-chat-widget/lib/styles.css';

const socket = io('localhost:8081');
var lastMessageId = 0
export default function ChatWidget() {
    const[socketPayload, setSocketPayload] = useState({})

    // const [lastMessageId, setLastMessageId] = useState(0)
    const [chat, setChat] = useState(null)
    socketPayload['socketID'] = socket.id
    socketPayload['_id'] = '5fb98c466f918558e85bb0d2'

    useEffect(() => {
        socket.on('message', ({ name, message, messageId }) => {
            console.log(lastMessageId, messageId)
            if(lastMessageId !== messageId) {
                // console.log(lastMessageId, messageId, 'inside')
                setChat({ name, message, messageId })
                addResponseMessage(message)
                // setLastMessageId(messageId)
            }
          })
      },[])

    
    const handleNewUserMessage = (newMessage, msgCount) => {
        if (newMessage !== '') {
            const msgID = Math.floor(Math.random() * 10000);
            lastMessageId = msgID
            socket.emit('message', {
                name: 'Test',
                message: newMessage,
                messageId: msgID
            })
        }
    }


    return (
        <div className="ChatWidget">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                /* title and subtitle modify the widget display */
                title={'Let\'s Chat'}
                subtitle={'Connecting doctors and patients'}
            />
        </div>
    )
}
