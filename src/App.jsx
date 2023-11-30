import { useState } from "react";
import styles from "./App.module.css";
import { Task } from "./Task";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setTask] = useState("");
  // const [color, setColor] = useState("black");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTaskList([...taskList, task]);
  };

  const handleCancel = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleComplete = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };
  // let tasks = [];
  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input onChange={handleChange} />
        <button onClick={handleClick}> Add Task</button>
      </div>
      <div className={styles.List}>
        {taskList.map((item) => {
          return (
            <Task
              taskName={item.taskName}
              complete={item.complete}
              id={item.id}
              handleCancel={handleCancel}
              handleComplete={handleComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
