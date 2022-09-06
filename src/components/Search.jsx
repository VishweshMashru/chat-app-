import React from 'react';
import { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';

export const Search = () => {

  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [err, setErr] = useState(false);


  const handleSearch = async() => {

      const q = query(collection(db, "users"), where("displayName", "==" , username));

      try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      }catch(err){
        setErr(true);
      }
      


  }

  const handleKey = (e) => {

    e.code === "Enter" && handleSearch();
    
  }
  return (
    <div className='search'>
        <div className="searchForm">
            <input type={"text"} placeholder='find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)}></input>
            {user && <div className="userChat">
                <img src={user.URL} alt=''></img>
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    </div>
  )
}
