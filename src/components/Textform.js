import React, { useState } from "react";

export default function Textform(props) {
  const convert = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.shAlert("converted to upper case","Success");
  };

  const convertTolover = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.shAlert("converted to lowercase","Success");
  };

  const Clear = () => {
    let newText = "";
    setText(newText);
    props.shAlert("Text cleared ","Success");
  };
  // state hooks
  const [text, setText] = useState("");

  const handelchange = (event) => {
    setText(event.target.value);
  };
  let i = -1;
  function extractEmails(Text) {
    let arr = [];
    i++;
    arr[i] = Text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return arr[i];
  }
  function phone(Text) {
    return Text.match(/[ ]?\d{10}|\(\d{3}\)\s?-\d{6}/);
  }

  const handelCopy=()=>{
    var cTxt=document.getElementById('floatingTextarea');
    cTxt.select();
    navigator.clipboard.writeText(cTxt.value);
    props.shAlert("Copy to clipboard","Success");


  }

  const handelExtraspace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.shAlert("Extra spaces removed","Success");
  }
  return (
    <>
      <div className="container">

        <h1 style={{color: props.mode==="light" ?"black":"white" }}>{props.heading}</h1>

        <textarea
          className="form-control"
          value={text}
          placeholder="Enter the text"
          onChange={handelchange}
          id="floatingTextarea"
          style={{ height: 100, marginTop: 30,color: props.mode==="light" ?"black":"white",backgroundColor:props.mode==='light'?'white':'#16191c'  }}
         
        />

        <button type="button" className="btn btn-success mt-4"onClick={convert}>Uppercase</button>
        <button type="button"className="btn btn-success mt-4 mx-2"onClick={convertTolover}>lowercase</button>
        <button type="button" className="btn btn-success mt-4 mx-2" onClick={Clear}>clear</button>
        <button type="button" className="btn btn-success mt-4 mx-2" onClick={handelCopy}>Copy</button>
        <button type="button" className="btn btn-success mt-4 mx-2" onClick={handelExtraspace}>Remove extra Spaces</button>

      </div>

      <div className="container my-3" style={{color: props.mode==="light" ?"black":"white" }}>
        <div className="row">
          <div className="col">
            <h2 style={{ marginTop: 23}}>Text Information</h2>
            <ul className={`w-75 p-3 list-group `}>
              <li className={`list-item d-flex justify-content-between align-items-center text-${props.mode==='light'?"dark":"light"} my-2`} style={{backgroundColor:props.mode==='light'?"white":"#16191c"}}>
                Words
                <span className="badge bg-primary rounded-pill">
                  {text.split(" ").length}
                </span>
              </li>
              <li className={`list-item d-flex justify-content-between align-items-center text-${props.mode==='light'?"dark":"light"} my-2  `} style={{backgroundColor:props.mode==='light'?"white":"#16191c"}}>
                Charactors
                <span className="badge bg-primary rounded-pill">
                  {text.length - text.split(" ").length + 1}
                </span>
              </li>
              <li className={`list-item d-flex justify-content-between align-items-center text-${props.mode==='light'?"dark":"light"} my-2 `} style={{backgroundColor:props.mode==='light'?"white":"#16191c"}}>
                Time
                <span className="badge bg-primary rounded-pill">
                  {0.008 * text.split(" ").length} mins
                </span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 style={{ marginTop: 23 }}>Contact Information</h2>
            <ul className="list-group list-group-flush my-4">
              <li className="list-group-item" style={{color: props.mode==="light" ?"black":"white",backgroundColor:props.mode==='light'?'white':'#16191c'}}>
                {" "}
                Email address : <p>{extractEmails(text)}</p>
              </li>
              <li className="list-group-item" style={{color: props.mode==="light" ?"black":"white",backgroundColor:props.mode==='light'?'white':'#16191c'}}>
                Phone : <p>{phone(text)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 style={{color: props.mode==="light" ?"black":"white" }}>Preview</h2>
      <p style={{color: props.mode==="light" ?"black":"white" }}>{text}</p>
    </>
  );
}
