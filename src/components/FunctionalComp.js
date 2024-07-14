// this show you how to create function component in react

import React, { Fragment, useEffect, useRef, useState } from "react"
import Input from './Input';



function  HelloWorld(props) {

  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);

  // People useState
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  // refs 
  const firstNameRef = useRef();
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);

  const toggleButton = () => {
    if(isTrue) {
      setIsTrue(false);
      return
    }
    setIsTrue(true);
  };

  useEffect(() => {
    console.log("useEffect is Fired");
    let people = [

      {
        id: 1,
        firstName: "Sinthorn", 
        LastName: "P.",
        dob: "1980-12-11"
      },{
        id: 2,
        firstName: "Na Phansa", 
        LastName: "P.",
        dob: "1980-12-11"
      }
    ];

    setCrowd(people)
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // การเพิ่มข้อมูลเข้าไปใน array list
    // 1. ตรวจข้อข้อมูลที่ได้รับจาก form ว่าถูกต้องตรงตามเงื่อนไขหรือไม่ เช่น ข้อมูลต้องไม่ว่าง
    // 2. สร้างตัวแปรขึ้นมาเก็บข้อมูล
    // 3. เพิ่มข้อมูลเข้าไปใน array ปัจจุบัน ด้วย concat หรือ ใช้ฟังค์ชั่นหรือเมทอดที่มีให้มาใน array เช่นฟังค์ชั่น add 
    // 4. setState ข้อมูลให้ state เพื่ออัพเดทให้เป็นล่าสุด 
    // let newFirstName = firstName, newLastName = lastName, newDob = dob;
    if(firstName !== "") {
      addPerson(firstName, lastName, dob);
      console.log(firstName, lastName, dob);
    }
  };


  const addPerson = (newFirstName, newLastName, newDob) => {
    let newPerson = {
      id: crowd.length + 1,
      firstName: newFirstName,
      lastName: newLastName,
      dob: newDob
    }

    let newList = crowd.concat(newPerson);

    const sortedList = newList.sort((a, b) => {
      if(a.firstName < b.firstName ) {
        return -1;
      }else if(a.firstName > b.lastName) {
        return 1;
      }else{
        return 0;
      }
    }); 

    setCrowd(sortedList);
    setFirstName("");
    setLastName("");
    setDob("");

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dobRef.current.value = "";

  };

  return (
    <Fragment>
      <hr/>
      <br/>
      <div className="h1-green" >{props.msg}</div>

      {isTrue && 
        <frameElement>
          <p>isTrue is {isTrue? "true" : "false" }</p>
        </frameElement>
      }

      <a href="#!" className="btn btn-secondary" onClick={toggleButton}>Toggle is { isTrue? "true" : "false" } </a>
      <hr/>
        <div>First Name: {firstName} </div>
        <div>Last Name: {lastName}</div>
        <div>DOB: {dob}</div>
      <hr/>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="first-name">First Name: {firstName} </label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        ref={firstNameRef}
        className="form-control"
        autoComplete="first-name-new"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input 
        title="Last Name" 
        type="text" 
        id="last-name" 
        ref={lastNameRef}
        className="form-control" 
        onChange={(event) => setLastName(event.target.value)}
      />

      <Input 
        title="Date Of Birth" 
        type="date" 
        id="date-of-birth" 
        ref={dobRef}
        className="form-control" 
        onChange={(event) => setDob(event.target.value)}
      />

      <input title="Submit" type="submit" name="submit" className="btn btn-success" />

    </form>

    <hr />
    <h1>People</h1>
    <hr/>
      <ul>
        {
          crowd.map((p) => (
            <li key={p.id} >{p.firstName} {p.lastName} {p.dob} </li>
          ))
        }
      </ul>

    </Fragment>
    
  )
}

export default HelloWorld;