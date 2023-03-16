import React, {useState} from 'react'
// import copy from "copy-to-clipboard"

export default function TextForms(props) {
      const handleOnChange = (event)=>{
            setText(event.target.value);
      }
      const handleUpClick=()=>{
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase", "success");
      }
      
      const handleLowClick =() =>{
            // console.log("Button was clicked");
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "success");
      }
      const handleClearClick =() =>{
            // console.log("Button was clicked");
            let newText = "";
            setText(newText);
            props.showAlert("Text has been cleared", "success");
      }

      const handleCopy = ()=>{
            navigator.clipboard.writeText(text);
            props.showAlert("Text has been copied", "success");
      }
      const[text,setText] = useState("enter text here")
          
      // const handleCopyText = (e) => {
      //          setText(e.target.value);
      //       } 
            
      // const copyToClipboard = () => {
      //          copy(text);
      //          alert(`You have copied "${text}"`);
      //       }
  return (
      <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="9"></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element!==""}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
