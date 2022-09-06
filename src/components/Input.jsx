import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type={"text"} placeholder='Type Something'/>
      <div className="send">
        <img src='' alt='y'/>
        <input type={"file"} style={{display: "None"}} id='file'></input>
        <label htmlFor='file'>
           <img src='' alt='a'></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
