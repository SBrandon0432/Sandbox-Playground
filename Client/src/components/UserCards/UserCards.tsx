import React, { useEffect, useState } from "react";
import "./UserCardsS.scss";
import User from '../User/User';


const UserCards = (props: any)  => {


  const [users, changeUsers] = useState([]);

  useEffect( () => {
    async function getRequest () {
      const response = await fetch('https://api.hatchways.io/assessment/students');
      const json = await response.json();
      changeUsers(json.students);
    }
    getRequest()

  }, [])
    return (
      <div className="Users-map">
        {
          users.map( (person, index) => {
            return (
              <User student={person} key={index} />
            )
          })
        }
      </div>
    );

}

export default UserCards;


