import React from "react";
import "./style.css";
import NewRegForm from './NewRegForm';
import ExistingRegUser from './ExistingRegUser';

export default function App() {
  return (
    <>
      <label><b>User accounts </b></label> <br/> <br/>
      
      <NewRegForm/>
      <ExistingRegUser />
    </>
  );
}
