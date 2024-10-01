import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Chat from '../component/Chat';

function Screen(props) {
    return (
        <>
             <div className='text-center'>
                <h2 className="text-xl font-bold mt-4 mb-2 text-white">{props.userType === 'userTwo' ?  props.userObject.secondName : props.userObject.firstName }</h2>
                <div className={`mockup-phone ${props.userType === 'userTwo' ? 'border-[#ffffb3]' : ''}`}>
                    <div className="camera"></div>
                    <div className="display">
                        <div className="bg-[url('https://e0.pxfuel.com/wallpapers/722/149/desktop-wallpaper-message-background-whatsapp-message-background-thumbnail.jpg')] artboard-demo phone-1 flex flex-col h-[500px] w-[320px]">
                            <div className="flex-1 overflow-y-auto w-[95%] p-5 space-y-2">
                                {props.messageArray.map((msg, index) => (
                                    <Chat key={index} message={msg.message} userType={msg.userType} whoIsSending={msg.whoIsSending} userObject={props.userObject} 
                                    messTime={props.time} />
                                ))}
                            </div>
                            <div className="join flex items-center">
                                <textarea
                                    value={props.userText}
                                    onChange={(e) => props.setUserText(e.target.value)}
                                    placeholder="Type your text here"
                                    className="textarea textarea-bordered join-item w-full max-w-xs pl-10 bg-[#e0e1dd] text-[#171738] text-lg h-12 resize-none focus:outline-none"
                                ></textarea>

                                <div className="tooltip" data-tip="send">
                                    <button
                                        onClick={() => props.sendChat(props.userType)}
                                        className="btn join-item w-full max-w-xs h-12 pr-10 rounded-full flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon icon={faLocationArrow} className='text-gray-700 text-[1.6rem]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Screen