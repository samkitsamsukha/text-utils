import React, {useState} from 'react'

export default function TextForm(props) {
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
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Hear the text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            {/* text.split(" ") creates an array with all the words and it's length is printed   */}
            <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
            <p>You can read the entire text in approximately <b>{0.008 * (text.split(" ").length -1)}   </b> minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:`Enter your text in the space above to preview it.`}</p>
        </div>
        </>
    )
}
