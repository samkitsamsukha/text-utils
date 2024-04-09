import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import introJs from 'intro.js';

function App() {
  const [mode, setMode] = useState('light'); // state variable which tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //Alert is an OBJECT
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#424242';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "secondary");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "primary");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils Application" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text which has to be analysed" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

const intro = introJs();
intro.setOptions({
  steps:[
    {
      title: 'Welcome to Text-Utils',
      intro: 'This is a simple text utility website'
    },
    {
      element: document.querySelector('.home'),
      title: 'Home Page',
      intro: 'This is the main page of the website where you can perform text-utility applications'
    },
    {
      element: document.querySelector('.about'),
      title: 'About Us',
      intro: 'Head over to this page to read about the website and the author'
    },
    {
      element: document.querySelector('.toggleMode'),
      title: 'Dark/Ligh Mode',
      intro: 'Use this switch to toggle dark / light mode'
    },
    {
      element: document.querySelector('.myBox'),
      title: 'Text Area',
      intro: 'You can write your own text here and perform several operations on it'
    },
    {
      element: document.querySelector('.btnGroup'),
      title: 'Operation',
      intro: 'Click on any of the  buttons to perform the suitable operations'
    },
    {
      element: document.querySelector('.preview'),
      title: 'Text Preview',
      intro: 'This space will provide you a preview of your text'
    }
],
// dontShowAgain: true,
});
intro.start();

export default App;
