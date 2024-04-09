import React, {useState} from 'react'

export default function TextForm(props) {
    const myStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#212529'
    }
    const btnStyle = {
        backgroundColor: props.mode==='light'?'#add8e6':'#002366',
        color: props.mode==='light'?'black':'white',
        border: '0px'
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.volume = 1; // 0-1
        msg.pitch = 1; // 0-2
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking the text now", "success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text Area cleared", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
      
    const handleOnChange = (event) => {
        // console.log("On Change")
        // We use the below statement because we want the text area to change as per the user. This statement will implement handleOnChange function efficiently. If missing, you won't be able to make edit to the text area parameter.
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // The line below will show an error because we cannot update text variable in this manner, it has to be updated using setText function instead
    // text = "new text";
    // setText("new Text");
    return (
        <>
        <div className={`container my-3`}>
            <h2>{props.heading}</h2>
            <div className="my-3">
                <textarea className="form-control myBox" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here' style={myStyle}></textarea>
            </div>
            <div className="btnGroup">
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={btnStyle}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} style={btnStyle}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeak} style={btnStyle}>Hear the text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear} style={btnStyle}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} style={btnStyle}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces} style={btnStyle}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            {/* text.split(" ") creates an array with all the words and it's length is printed   */}
            <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p>You can read the entire text in approximately <b>{0.008 * (text.split(" ").length -1)}   </b> minutes</p>
            <h3 className='preview'>Preview</h3>
            <p>{text.length>0?text:`Nothing to preview!`}</p>
        </div>
        </>
    )
}
