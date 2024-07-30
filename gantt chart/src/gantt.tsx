import React, { useState } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 7, 1),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ]);

  const [viewDate, setViewDate] = useState<Date>(new Date());

  const view = ViewMode.Day; // Example view mode, you can change it

  const onTaskChange = (task: Task) => {
    // Handle task date changes
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  //   const onTaskDelete = (task: Task) => {
  //     // Handle task deletion
  //     setTasks(tasks.filter((t) => t.id !== task.id));
  //   };

  const onProgressChange = (task: Task) => {
    // Handle progress changes
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const onDblClick = (task: Task) => {
    // Handle double click on task
    console.log("Task double clicked:", task);
  };

  const onClick = (task: Task) => {
    // Handle single click on task
    console.log("Task clicked:", task);
  };

  return (
    <div className="App">
      <Gantt
        tasks={tasks}
        viewMode={view}
        viewDate={viewDate}
        onDateChange={onTaskChange}
        // onTaskDelete={onTaskDelete}
        onProgressChange={onProgressChange}
        onDoubleClick={onDblClick}
        onClick={onClick}
      />
    </div>
  );
};

export default GanttChart;
