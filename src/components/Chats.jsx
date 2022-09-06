import React from 'react'

export const Chats = () => {
  return (
    <div className="chats">
        <div className="userChat">
                <img src='https://images.pexels.com/photos/12172737/pexels-photo-12172737.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load' alt=''></img>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p> Hello </p>
                </div>
            </div>
            <div className="userChat">
                <img src='https://images.pexels.com/photos/12172737/pexels-photo-12172737.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load' alt=''></img>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
            <div className="userChat">
                <img src='https://images.pexels.com/photos/12172737/pexels-photo-12172737.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load' alt=''></img>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
    </div>
  )
}
