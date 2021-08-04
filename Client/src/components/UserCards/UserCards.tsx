import React, { useEffect, useState } from "react";
import  $ from "jquery";
import "./UserCardsS.scss";
import User from '../User/User';


const UserCards = ()  => {

  const [users, changeUsers] = useState([]);

  const getUsers = () => {
    // $.get({
    //   method: "Get",
    //   url: "https://api.hatchways.io/assessment/students",
    //   success: (data) => {
    //     return data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },

    // })
    // .done(() => {
    //   console.log('done')
    // })
  }

  useEffect( () => {

    async function test () {
      const response = await fetch('https://api.hatchways.io/assessment/students');
      const json = await response.json();
      changeUsers(json);
    }
    test();

  }, []);


  console.log(users);

  return (
    <div className = "User-Cards" >
      <div className="User-Card-Single-in-UserCard">

      </div>
    </div>
  );


}


export default UserCards;


