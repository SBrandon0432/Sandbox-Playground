import React, {useState} from "react";
import "./NameS.scss";

interface Props {
  name: string;
}

const Name = ({ name }: Props) => {
  const [studentName, setStudentName] = useState<string>(name);
  const [showEdit, setShowEdit] = useState<boolean>(false);


  return (
    <div>
      <div className= "Student-Name" >
      { studentName }

      {!showEdit && (
        <button onClick={() => {
          setShowEdit(true);
        }}>
          <img style={{ width: 15, height: 15 }} src="https://image.flaticon.com/icons/png/512/84/84380.png" />
        </button>
        )}
    </div>

    {showEdit && (
      <form className="Name-Change" onSubmit={(e)=>{
        e.preventDefault();
        setShowEdit(false);
      }}>
        <label >
          New Name:
        </label>
        <input  type='text' onChange={ (e) => {
          setStudentName(e.target.value)
        }}/>
        <button type='submit' >Save Changes</button>
      </form>
    )}
  </div>
  )

}

export default Name;