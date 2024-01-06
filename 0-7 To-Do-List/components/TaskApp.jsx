import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

function TaskApp() {
  const [toDoList, setToDoList] = useState([]);
  const [taskChangeCount, setTaskChangeCount] = useState(0);
  const [editingTask, setEditingTask] = useState();

  useEffect(() => {
    if (taskChangeCount > 0) {
      localStorage.setItem("tasks", JSON.stringify(toDoList));
    }
  }, [taskChangeCount]);

  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
    setToDoList(localStorageTasks ?? []);
  }, []);

  const addTask = (taskName) => {
    const newTask = {
      taskName,
      checked: false,
      date: new Date().toLocaleString(),
    };
    setToDoList([...toDoList, newTask]);
    setTaskChangeCount((prev) => prev + 1);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
    setTaskChangeCount((prev) => prev + 1);
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDolist) =>
      prevToDolist.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
    setTaskChangeCount((prev) => prev + 1);
  }

  const startEditing = (taskName) => {
    setEditingTask(taskName);
  };

  const editTask = (oldTaskName, newTaskName) => {
    setToDoList((prevToDolist) =>
      prevToDolist.map((task) =>
        task.taskName === oldTaskName
          ? { ...task, taskName: newTaskName, date: new Date() }
          : task
      )
    );
    setEditingTask();
    setTaskChangeCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <h1>Welcome</h1>
        <TaskInput addTask={addTask} setTaskChangeCount={setTaskChangeCount} />
        <div className="toDoList">
          <h5>To-Do-List</h5>
          <ul className="list-items">
            {toDoList.map((item, index) => (
              <TaskItem
                task={item}
                key={index}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
                startEditing={startEditing}
                editTask={editTask}
                isEditing={editingTask === item.taskName}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TaskApp;