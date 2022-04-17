import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, noteListChange] = React.useState([]);

  function addNote(item) {
    noteListChange((prevItems) => {
      // console.log([...prevItems, item]);

      return [...prevItems, item];
    });
  }

  function deleteNote(idNum) {
    noteListChange((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== idNum;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {noteList.map((todoItem, index) => (
        <Note
          id={index}
          onClick={deleteNote}
          title={todoItem.title}
          content={todoItem.body}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
