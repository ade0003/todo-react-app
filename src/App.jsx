import { useState } from "react";
import styles from "./App.module.css";
// import { Planet } from "./Planet";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
    // };
    // const handleClick = ()=>{
    //   setTaskList()
  };
  const handleClick = () => {
    setTaskList([...taskList, task]);
  };
  // let tasks = [];
  return (
    <div className={styles.App}>
      <div className={styles.addTask}></div>
      <input onChange={handleChange} />
      <button onClick={handleClick}> Add Task</button>

      <div className={styles.list}>
        {taskList.map((item) => {
          return <h1>{item}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
