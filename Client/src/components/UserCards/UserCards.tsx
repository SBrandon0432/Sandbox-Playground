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
      console.log(json.students)
    }
    getRequest()

  }, [])

    return (
      <div>
        {
          users.map( (person) => {
            return (
              <User student={person} />
            )
          })
        }
      </div>
    );

}

export default UserCards;


