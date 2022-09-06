import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src='https://images.pexels.com/photos/12172737/pexels-photo-12172737.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load' alt=''></img>
            <span> Just now</span>
        </div>
        <div className="messageContent">
            <p> Hello </p>
            <img></img>
        </div>
    </div>
  )
}
