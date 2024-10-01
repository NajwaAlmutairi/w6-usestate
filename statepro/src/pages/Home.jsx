import React from 'react'
import Screen from '../component/Screen'
import { useState } from 'react'

function Home({ userObject }) {
    const [userOneText, setUserOneText] = useState('');
    const [userTwoText, setUserTwoText] = useState('');
    const [messages, setMessages] = useState([
    ]);
    const [messagesTwo, setMessagesTwo] = useState([
    ]);
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0'); 
    let minutes = String(date.getMinutes()).padStart(2, '0'); 
    let time = `${hours}:${minutes}`;

    const sendChat = (whoIsSending) => {
        if (whoIsSending === 'userOne' && userOneText.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { message: userOneText, userType: 'sender', whoIsSending: 'userOne' }
            ]);
            setMessagesTwo((prevMessages) => [
                ...prevMessages,
                { message: userOneText, userType: 'receiver', whoIsSending: 'userOne' }
            ]);
            setUserOneText('');
        } else if (whoIsSending === 'userTwo' && userTwoText.trim()) {
            setMessagesTwo((prevMessages) => [
                ...prevMessages,
                { message: userTwoText, userType: 'sender', whoIsSending: 'userTwo' }
            ]);
            setMessages((prevMessages) => [
                ...prevMessages,
                { message: userTwoText, userType: 'receiver', whoIsSending: 'userTwo' }
            ]);
            setUserTwoText('');
        }
    };
    return (
        <>
            <div className="flex justify-evenly bg-[#b1a399] items-center min-h-screen  max-sm:flex-col max-sm:flex-wrap max-sm:gap-4 max-sm:pb-5">
                <Screen userObject={userObject} messageArray={messages} userText={userOneText} setUserText={setUserOneText}
                    sendChat={sendChat} userType='userOne' time={time}
                />
                <Screen userObject={userObject} messageArray={messagesTwo} userText={userTwoText} setUserText={setUserTwoText}
                    sendChat={sendChat} userType='userTwo' time={time}
                />
            </div>
        </>
    )
}

export default Home