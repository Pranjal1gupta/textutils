import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    const[text,setText]=useState("")

    const handelOnChange=(e)=>{
        setText(e.target.value)
    }

    const handelUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }

    const handelLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success");
    }

    const handleCapClick = () => {
        //  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to capitalize","success");
   }

   const handelcopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard !!","success")
   }
    
    const handelclear=()=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text cleared","success");
    }
    
    const handleRevClick = ()=> {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text reversed","success");
      }
    

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak"){
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
      


  return (
    <>
    <div className="container my-3">
        <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
            <h2>{props.heading}</h2>
            <div class="form-group">
            <textarea class="form-control" value={text} onChange={handelOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==="light"?"white":"#343a40c4",color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handelUpClick} disabled={text.length===0}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelLoClick} disabled={text.length===0}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCapClick} disabled={text.length===0}>Convert to Capitalise</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelcopy} disabled={text.length===0}>Copy</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRevClick} disabled={text.length===0}>Reverse</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handelclear} disabled={text.length===0}>Clear</button>
            <button style={{"float":"right"}} type="submit" onClick={speak} className="btn btn-warning my-2" id="toggle" disabled={text.length===0}>Speak</button>

        </div>
    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length>0?text.split(" ").length-1:0} words and {text.length} characters</p>
        {/* <p>{text.split(" ").length>0?text.split(" ").length-1:0} words and {text.length} characters</p> */}
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter some text in the textbox above to preview it.."}</p>
    </div>
  </div>
    </>
  )
}
// defines the type of props used, isrequired define that the field is required
Textform.prototype={heading:PropTypes.string.isRequired}

// sets the default value of props used 
Textform.defaultProps={heading:"TEXT TO ANALYZE"}