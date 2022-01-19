import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes =>{
            return [...prevNotes, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            });
        });

    }

    

    return (
        <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {/* using arrow function inside the map() function  */}
        {notes.map((note,index)=>{
             return   <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
            })
        }
        
        <Footer />
        </div>
    );
}
export default App;