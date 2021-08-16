import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import './UserS.scss';
import MoreGrades from "../MoreGrades/MoreGrades";
import Name from "../Name/Name";

interface IStudent {
  firstName: string;
  email: string;
  company: string;
  pic: string;
  skill: string;
  grades: number[];
}

interface Props {
  student: IStudent;
}

const studentAverage = (grades: number[]) => {

  let sum = 0;
  for (let grade in grades) {
    let number = Number(grades[grade]);
    sum += number;
  }
  return sum/grades.length;

}

const User = ({ student }: Props ) => {
  const [moreInfo, chMoreInfo] = useState(false);

  const { firstName, email, company, pic, skill, grades } = student


  return (
    <div className = "User">
      <img className="Student-Picture" src = {pic} />
      <div className="User-Info">

        <Name name={firstName}/>

        <div className="More-Info">
          <div className="Student-Email" > Email: { email } </div>
          <div className="Student-Skill" > Skill: { skill } </div>
          <div className="Student-Average"> Average: {studentAverage(grades)}%  </div>

          <div className="More-Grades-Button">
            <button onClick={(e)=>{chMoreInfo(!moreInfo)} }>{moreInfo ? "-" : "+"}</button>
          </div>
          {moreInfo && (
              <div className="grades">
                <MoreGrades grades={grades}/>
              </div>
          )}
        </div>
      </div>


    </div>
  );
}

export default User;