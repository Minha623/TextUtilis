import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
         let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const[text, setText] = useState(' ');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert the text Uppercase</button>
<button className="btn btn-secondary " onClick={handleLoClick}>Convert the text Lowercse</button>
    </div> 
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
</>
  )
}
