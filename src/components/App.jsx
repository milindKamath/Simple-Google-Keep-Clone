import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNote] = React.useState([]);

  function Addnote(note){
    setNote(prev =>{
      return [...prev, note];
    })
  }

  function deleteNote(id){
    setNote(prev =>{
      return prev.filter((item, index)=>{
        return index != id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={Addnote}/>
      {notes.map((item, index) => {
        return <Note key={index} id={index} onDelete={deleteNote} title={item.title} content={item.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
