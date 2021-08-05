import React, {useState} from "react";

const User = (props: any ) => {


  //more tag here
  //add tag
  //other stuffs
  console.log(props.student)
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

  return (
    <div className = "User">
      <img className="Student-Picture" src = {studentPicture} />
      <div className="Student-Email" > { studentEmail } </div>
      <div className="Student-Company" > { studentCompany } </div>
      <div className="Student-Skill" > { studentSkill } </div>
      <div className="Student-Average"> {studentAverage()}%  </div>
    </div>
  );

}

export default User;