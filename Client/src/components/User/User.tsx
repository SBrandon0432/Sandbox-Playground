import React, {useState} from "react";
import './UserS.scss';

const User = (props: any ) => {


  //more tag here
  //add tag
  //other stuffs
  console.log(props.student)
  const studentPicture = props.student.pic;
  const studentName = props.student.firstName;
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

  return (
    <div className = "User">
      <img className="Student-Picture" src = {studentPicture} />
      <div className= "Student-Name" > { studentName } </div>
      <div className="Student-Email" > Email: { studentEmail } </div>
      <div className="Student-Skill" > Skill: { studentSkill } </div>
      <div className="Student-Average"> Average: {studentAverage()}%  </div>
    </div>
  );

}

export default User;