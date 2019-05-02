import React from 'react'
import Header from './Header/header'
import MessageBody from './MessageBody/messageBody'
import MessageInput from './MessageInput/messageInput';


function Home() {
    return (
        <div className="container">
            <Header />
            <MessageBody />
            <MessageInput />
        </div>
    )
}

export default Home