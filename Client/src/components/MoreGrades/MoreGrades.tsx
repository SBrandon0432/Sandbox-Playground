import React, {useState} from "react";
import "./MoreGradesS.scss"


const MoreGrades = (props: any) => {

  const grades = props.grades;
  console.log(grades);

  return grades.map( (grade: number, index: any) => {
    return (
      <div className="grade-MoreGrades" key={Math.random()}>
        Test{index+1}:  {grade}%
       </div>
  )});




}

export default MoreGrades;