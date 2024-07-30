import React, { useState, useEffect } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 6, 28),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54" },
    },
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 7, 5),
      name: "Idea 2",
      id: "Task 1",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54" },
    },
  ]);

  const [viewDate, setViewDate] = useState<Date>(new Date());

  const view = ViewMode.Day; // Example view mode, you can change it

  // Utility function to check if the end date is earlier than today
  const isEndDateBeforeToday = (endDate: Date) => {
    const today = new Date();
    // Remove the time part of today's date
    today.setHours(0, 0, 0, 0);
    return endDate < today;
  };

  // Update task styles if the end date is before today
  useEffect(() => {
    const updatedTasks = tasks.map((task) => {
      if (isEndDateBeforeToday(task.end)) {
        return {
          ...task,
          styles: {
            ...task.styles,
            backgroundColor: "red",
          },
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }, [tasks]);

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
        // viewDate={viewDate}
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
