import React,{useState} from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');


    const handleUpClick = () =>{
        // console.log('uppercase on clicked');
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase has been converted","success");
    }
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase has been converted","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed","success");

    }

    // const handleExtraSpaces = ()=>{
    //     let newText = text.replace(/\s+/g, ' ').trim();
    //     setText(newText)
    //     }

    // const handlecapitalizeClick= () => {
        
    //     let firstchar = text.charAt(0); // storing the first char of the string
    //     let newText= firstchar.toUpperCase(); // converting that to uppercase
    //     setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

    // } 

    const handleCopyClick = () => {
        const newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard","success");

    }


    const handleClearClick = () => {
        const newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","success");

    }

    const handleonpChange = (event) =>{
        // console.log('handle on change');
        setText(event.target.value);
    }


  return (
      <>
      
      <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.textHeading }</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#0a193d':'white',
        color: props.mode === 'dark'?'white':'#0a193d'}} onChange={handleonpChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-1" onClick={handlecapitalizeClick}>Convert to Capitalize</button> */}
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>


    </div>

    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p> <b>{text.split(" ").length}</b> words <b>{text.length} </b>characters</p>
        <p> <b>{0.008 * text.split("").length}</b>  Read in a Mintues</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text above to preview it here"}</p>

    </div>
      </>
    
  )

}
