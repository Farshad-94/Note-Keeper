
import React from "react";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import notesArr from "../notes";
import Notes from "./Notes";


function App(){
    return (
        <div>
            <Heading />
            {notesArr.map(note =>(
                <Notes
                    key={note.key}
                    title={note.title}
                    content={note.content}
                 />

            ))}
            <Footer />
        </div>
    );
}

export default App;