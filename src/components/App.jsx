import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";



function App(){
    return (
        <div>
        <Header />
        {/* using arrow function inside the map() function  */}
        {notes.map(note => <Note key={note.id} _title={note.title} _content={note.content} /> )}
        <Footer />
        </div>
    );
}
export default App;