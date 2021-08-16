import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import './UserS.scss';
import MoreGrades from "../MoreGrades/MoreGrades";
const User = (props: any ) => {


  //console.log(props.student)
  const [studentName, chStudentName] = useState(props.student.firstName);
  const [editName, chName] = useState(false);
  const [moreInfo, chMoreInfo] = useState(false);

  const studentPicture = props.student.pic;
  const studentEmail = props.student.email;
  const studentCompany = props.student.company;
  const studentSkill = props.student.skill
  const studentGrades = props.student.grades;

  const studentAverage = () => {

    let sum = 0;
    for (let grade in studentGrades) {
      let number = Number(studentGrades[grade]);
      sum += number;
    }
    return sum/studentGrades.length;

  }

  if (editName) {
    return (

      <div className = "User">
      <img className="Student-Picture" src = {studentPicture} />
      <div className="User-Info">

      <div className= "Student-Name" > { studentName } </div>

      <form className="Name-Change" onSubmit={(e)=>{
        e.preventDefault();
        chName(false);
      }}>
        <label >
          New Name:
        </label>
        <input  type='text' onChange={ (e) => {
          chStudentName(e.target.value)
        }}/>
        <button type='submit' >Save Changes</button>
      </form>

        <div className="Student-Email" > Email: { studentEmail } </div>
        <div className="Student-Skill" > Skill: { studentSkill } </div>
        <div className="Student-Average"> Average: {studentAverage()}%  </div>
      </div>
    </div>


    );
  }

  else if (moreInfo) {
    return (

      <div className = "User">
      <img className="Student-Picture" src = {studentPicture} />
      <div className="User-Info">
        <div className= "Student-Name" > { studentName } </div>
        <div className="Student-Email" > Email: { studentEmail } </div>
        <div className="Student-Skill" > Skill: { studentSkill } </div>
        <div className="Student-Average"> Average: {studentAverage()}%  </div>
      </div>
        <div className="More-Grades">
          <button onClick={(e)=>{chMoreInfo(false)}} >-</button>
        </div>

        <div className="grades">
         < MoreGrades grades={studentGrades}/>
        </div>

    </div>
    )

  }  else {

    return (
      <div className = "User">
        <img className="Student-Picture" src = {studentPicture} />
        <div className="User-Info">

        <div className= "Student-Name" >
        { studentName }
         <button onClick={() => {
           chName(true);
         }}>:Edit</button>

        </div>
          <div className="Student-Email" > Email: { studentEmail } </div>
          <div className="Student-Skill" > Skill: { studentSkill } </div>
          <div className="Student-Average"> Average: {studentAverage()}%  </div>
        </div>
          <div className="More-Grades">
            <button onClick={(e)=>{chMoreInfo(true)} }>+</button>
          </div>
      </div>
    );
  }


}

export default User;