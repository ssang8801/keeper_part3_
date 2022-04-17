import React from "react";

function CreateArea(props) {
  const [state, stateSet] = React.useState({
    title: "",
    body: ""
  });

  function changeHandler(event) {
    const object = event.target.name;
    const value = event.target.value;

    stateSet((prevValue) => {
      if (object === "title") {
        return {
          title: value,
          body: prevValue.body
        };
      } else {
        return {
          title: prevValue.title,
          body: value
        };
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={state.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={(event) => props.add(state)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
