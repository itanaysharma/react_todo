import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          console.log(value);
          setTitle(value);
        }}
      ></input>
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          console.log(value);
          setDescription(value);
        }}
      ></input>
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
