import { useState } from "react";
import List from "./components/List";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [showSubmit, setShowSumbit] = useState(false);
  const [index, setIndex] = useState();

  function addtask() {
    const tasks = [...list];
    tasks.push(todo);
    setTodo("");
    setList(tasks);
  }
  function submittask() {
    const newtask = [...list];
    newtask[index] = todo;
    setList(newtask);
    setTodo("");
    setIndex();
    setShowSumbit(!showSubmit);
  }
  console.log(list);
  document.body.style = "background: skyblue;";
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <input
          type="text"
          placeholder="type task here"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        {!showSubmit ? (
          <button className="add" onClick={addtask}>
            Add
          </button>
        ) : (
          <button className="submit" onClick={submittask}>
            Submit
          </button>
        )}
        <List
          list={list}
          setList={setList}
          setTodo={setTodo}
          showSubmit={showSubmit}
          setShowSumbit={setShowSumbit}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}
