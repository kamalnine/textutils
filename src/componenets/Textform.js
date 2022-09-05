import React, { useState } from 'react'

function Textform(props) {
    const[text,setText] = useState("");
    const handleonchange=(event)=>
    {
        setText(event.target.value);

    }
    const handleuppercase=()=>
    {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowercase=()=>
    {
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handlecleartext=()=>
    {
        let newText = "";
        setText(newText);

    }
    const handlecopytext=()=>
  {
    navigator.clipboard.writeText(text);
  }
  const handleextraspaces=()=>
  {
   let newString = text.replace(/\s+/g,' ').trim();
      setText(newString); 
  }
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.title}</h1></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="13" value={text} onChange={handleonchange} style={{backgroundColor : props.mode==='dark'?'#0f0e38':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-3 my-3"  onClick={handleuppercase}>Convert To UpperCase</button>
<button className="btn btn-primary mx-3 my-3" onClick={handlelowercase}>Convert To Lowercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={handlecleartext}>Clear Text</button>
<button className="btn btn-primary mx-3 my-3" onClick={handlecopytext}>Copy Text</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleextraspaces}>Remove Extra Spaces</button>
    </div>
  <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
  <p>Total Count Of Words =  {text.length>0?text.split(" ").length:0}</p>
  <p>Total Count Of Characters = {text.length}</p>
  <p>Total time required to read the text = {text.length>0?0.008*text.split(" ").length:0} Minutes</p>
  <h3>{text.length>0?"Preview":"Enter Something To Preview"}</h3>
  <p>{text}</p>
  </div>
  </>
  )
}

export default Textform
