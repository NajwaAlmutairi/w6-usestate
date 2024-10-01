import React from 'react'

function Chat({ userType, message, whoIsSending, userObject,messTime }) {

    const user = { name: '', avatar: '' };

    if (whoIsSending === 'userOne') {
        user.name = userObject.firstName;
        user.avatar = (userObject.firstGender === 'male' ? "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            : "https://w7.pngwing.com/pngs/832/40/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png")
    } else if (whoIsSending === 'userTwo') {
        user.name = userObject.secondName;
        user.avatar = (userObject.secondGender === 'male' ? "https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
            : "https://cdn-icons-png.flaticon.com/512/4140/4140073.png")
    }
    return (
        <>
            {userType === 'receiver' && message ?
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User avatar"
                                src={user.avatar} />
                        </div>
                    </div>
                    <div className="chat-header">{user.name}</div>
                    <div className="chat-bubble bg-[#2a2d43] text-white max-w-[12rem] min-w-[1vw] break-words p-2 rounded-lg ">
                        {message}</div>
                    <div className="chat-footer">{messTime}</div>
                </div>
                : userType === 'sender' && message ?
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User avatar"
                                    src={user.avatar} />
                            </div>
                        </div>
                        <div className="chat-header">{user.name}</div>
                        <div className="chat-bubble bg-[#2c6e49] text-white max-w-[12rem] min-w-[4vw] break-words p-2 rounded-lg">{message}</div>
                        <div className="chat-footer">{messTime}</div>
                    </div>
                    : ''
            }
        </>
    )
}

export default Chat