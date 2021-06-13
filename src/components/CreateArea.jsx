import React from "react";

function CreateArea(props) {

    const [note, setNote] = React.useState(
        {
            title : "",
            content : ""
        }
    );

    function changeNote(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return {
            ...prevNote,
            [name]: value
            }
        })
    };

    function submitNote(event){
        props.onAdd(note)
        setNote( {
            title : "",
            content : ""
        })
        event.preventDefault();
    }


  return (
    <div>
      <form >
        <input onChange={changeNote} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={changeNote} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
