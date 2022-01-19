import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
  const [_isClicked, setClick]=useState(false);


  const [note, setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name,value} = event.target;
    setNote(prevNote =>{
      return {...prevNote, [name]:value};
    });    
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();

  }
  function isClicked(){
    setClick(true);
  }

  return  (
  <div>
    <form className="create-note" >
    {_isClicked &&  <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> }
     
      <textarea onClick={isClicked}
       onChange={handleChange}
        name="content"
         placeholder="Take a note..."
          value={note.content}
           rows={_isClicked ? "3":"1"} />
           
      <Zoom in={_isClicked ? true : false}>
      <Fab onClick={submitNote}> <AddIcon /> </Fab>
      </Zoom>
      
    </form>
  </div>
  );

}

export default CreateArea;