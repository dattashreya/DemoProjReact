import React,{useState} from 'react';

export default function CalcuExample() {

  let inlineStyle = {
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px"
  }
  let inlineStyle2 = {
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px"
  }
  const [num1, setNum1,] = useState('')
  const [num2, setNum2] = useState('')
  const [tot, setTot] = useState('')
  const [totSub, setSubTot] = useState('')

  function hadleClick() {
    setTot(Number(num1)+Number(num2))
  }
  function hadleClickSub() {
    setSubTot(Number(num1)-Number(num2))
  }
  return (
    <>
      <h2>Calculator</h2>
      <label htmlFor="">First value :</label>
      <input 
          type="text"
          name="num1"
          class="form-control"
          placeholder="enter first value"
          onChange={e => {
            setNum1(e.target.value)
          }} />
      <br/>
      <label htmlFor="">Second value :</label>
      <input 
          type="text"
          name="num2"
          class="form-control"
          placeholder="enter second value"
          onChange={e => {
            setNum2(e.target.value)
          }} />
      <br /><br />
      <label htmlFor="">Addition Total : </label>
      <input type="text" class="form-control" placeholder="Total value" value={tot}/>
      <br />
      <button style={inlineStyle} onClick={hadleClick}>click for addition</button>
      <br/><br />
      <label htmlFor="">Subtraction : </label>
      <input type="text" class="form-control" placeholder="Subtract value" value={totSub}/>
      <br />
      <button style={inlineStyle2} onClick={hadleClickSub}>click for subtract</button>
    </>
  );
}
