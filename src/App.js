import React from 'react';
import './App.css';
import Typed from 'react-typed';
import {Github, Gmail, Linkedin} from "@icons-pack/react-simple-icons";
import 'react-typed/dist/animatedCursor.css';

let typedRef;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <Typed
                        startDelay={500}
                        strings={["<h1>Hey there, I'm Jordyn!</h1>"]}
                        typeSpeed={30}
                        onComplete={() => {
                            typedRef.start();
                        }}
                        showCursor={false}
                    />
                </div>
                <Typed className="header-content"
                       typedRef={(typed) => {
                           typedRef = typed;
                       }}
                       strings={["<h3>I'm a developer!</h3>"]}
                       typeSpeed={30}
                       backSpeed={30}
                       smartBackspace={true}
                       stopped={true}
                       showCursor={false}
                >
                </Typed>
                <div className="social-icons">
                    <a href="https://github.com/Huskehhh"><Github/></a>
                    <a href="mailto:me@huskehhh.com"><Gmail/></a>
                    <a href="https://www.linkedin.com/in/jordyn-newnham-222a5a1a4/"><Linkedin/></a>
                </div>
            </header>
        </div>
    );
}

export default App;
