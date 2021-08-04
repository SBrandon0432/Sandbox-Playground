import React, { useState } from "react";
import  $ from "jquery";
import "./UserCardsS.scss";
import User from '../User/User';


const UserCards = ()  => {

  const [users, changeUsers] = useState(null);
  //filter goes in here

  const getUsers = () => {

    //ideally we would call our server with our info

    $.get({
      method: "Get",
      url: " https://api.hatchways.io/assessment/students ",
      success: (users) => {
        changeUsers(users);
        console.log(users);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
 // getUsers();

  return (
    <div className = "User-Cards">
      <div className="User-Card-Single-in-UserCard">
        < User/>
      </div>
    </div>
  );


}


export default UserCards;