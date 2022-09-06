import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
             <span> Jane</span>
             <div className="chatIcons">
                <img src='' alt='Cam'></img>
                <img src='' alt='Add'></img>
                <img src='' alt='More'></img>
             </div>
             
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}
