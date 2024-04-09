import React from 'react'
import { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })
    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#212529':'#ececec'
    }

    return (
        <>
        <div className='container'>
            <h2 className='my-5' style={{color:props.mode==='dark'?'#ffdb00':'#6879d0'}}>About Us</h2>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                           <b>Analyze Text</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>This website is a text utility application which will help users in entering the text and then performing multiple operations. Some operations include - converting from uppercase to lower case and vice versa, text to speech, copy and clear, remove extra spaces. There is a provision for text summary section which gives an idea on number of words and characters and average reading time followed by the preview section.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <b>References</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>This website is a part of the tutorial project from the React Course, by Code With Harry. It incorporates some extra modifications by me.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <b>Contact Options</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>In case of any issue, you can reach out at <br />Ph - 9239089089 <br />Email - samkitsamsukha7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
