import React, { useState, useEffect } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 7, 12),
      project: "Project A",
      name: "Some Project",
      id: "Task 0",
      type: "project",
      progress: 45,
      isDisabled: false,
      hideChildren: true,
    },
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 7, 2),
      name: "Idea 2",
      id: "Task 1",
      type: "project",
      progress: 45,
      isDisabled: false,
      // hideChildren: false,
      dependencies: ["Task 0"],
    },
    {
      start: new Date(2024, 6, 29),
      end: new Date(2024, 7, 1),
      name: "Idea 3",
      id: "Task 2",
      type: "project",
      progress: 100,
      isDisabled: true,
      // hideChildren: true,
      dependencies: ["Task 1"],
    },
  ]);

  const view = ViewMode.Day; // Example view mode, you can change it

  // Utility functions
  const isEndDateBeforeToday = (endDate: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate < today;
  };

  // Update task styles based on progress and end date
  useEffect(() => {
    const updatedTasks = tasks.map((task) => {
      let updatedStyles = { ...task.styles };

      if (task.progress === 100) {
        updatedStyles = { ...updatedStyles, progressColor: "green" };
      } else if (isEndDateBeforeToday(task.end)) {
        updatedStyles = { ...updatedStyles, progressColor: "red" };
      } else {
        updatedStyles = { ...updatedStyles, progressColor: "#6EACDA" }; // Default color
      }

      return { ...task, styles: updatedStyles };
    });
    setTasks(updatedTasks);
  }, [tasks]);

  const onTaskChange = (task: Task) => {
    // Handle task date changes
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

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
        onDateChange={onTaskChange}
        onProgressChange={onProgressChange}
        onDoubleClick={onDblClick}
        onClick={onClick}
        preStepsCount={2}
        barProgressColor={"black"}
        arrowColor={"red"}
        todayColor={"blue"}
        arrowIndent={10}
        barFill={60}
        rowHeight={50}
        columnWidth={65}
        handleWidth={80}
        // taskHeight={"30"}
        // ganttHeight={500}
        // barCornerRadius={8}
        fontSize={"14"}
      />
    </div>
  );
};

export default GanttChart;
