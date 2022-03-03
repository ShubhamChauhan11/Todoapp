import React from "react";
import "./List.css";
const List = (props) => {
  function deletetask(index) {
    const filteredtask = props.list.filter((ele, ind) => {
      return ind !== index;
    });
    props.setList(filteredtask);
  }
  function edittask(index, task) {
    props.setShowSumbit(!props.showSubmit);
    props.setTodo(task);
    props.setIndex(index);
  }
  return (
    <div className="main">
      <ol>
        {props.list.map((task, index) => {
          return (
            <li>
              {task}
              <div className="btndiv">
                <button
                  className="del"
                  onClick={() => {
                    deletetask(index);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    edittask(index, task);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default List;
