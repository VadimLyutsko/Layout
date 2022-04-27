import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import Works from "./works/Works";

function App() {
    return (
        <div className='App'>
           <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
