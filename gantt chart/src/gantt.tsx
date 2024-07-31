import React, { useState, useEffect } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      start: new Date(2024, 6, 25),
      end: new Date(2024, 7, 29),
      name: "Some Project",
      id: "ProjectSample",
      type: "project",
      displayOrder: 1,
      progress: 45,
      isDisabled: false,
      hideChildren: false,
    },
    {
      start: new Date(2024, 6, 28),
      end: new Date(2024, 7, 8),
      name: "Idea 2",
      project: "ProjectSample",
      type: "project",
      id: "PreProposal",
      displayOrder: 2,
      progress: 45,
      isDisabled: true,
      hideChildren: false,
    },
    {
      start: new Date(2024, 6, 29),
      end: new Date(2024, 7, 8),
      name: "Idea's",
      project: "PreProposal",
      type: "task",
      id: "Task 1",
      displayOrder: 3,
      progress: 45,
      isDisabled: true,
      dependencies: ["PreProposal"],
    },
    {
      start: new Date(2024, 7, 1),
      end: new Date(2024, 7, 3),
      name: "Idea's ",
      project: "ProjectSample",
      type: "task",
      id: "Task 2",
      displayOrder: 4,
      progress: 45,
      isDisabled: true,
      dependencies: ["Task 1"],
    },
    {
      start: new Date(2024, 7, 4),
      end: new Date(2024, 7, 8),
      name: "Idea's",
      project: "ProjectSample",
      type: "task",
      id: "Task 3",
      displayOrder: 5,
      progress: 45,
      isDisabled: true,
      dependencies: ["Task 2"],
    },
    {
      start: new Date(2024, 7, 2),
      end: new Date(2024, 7, 6),
      name: "Idea's",
      project: "ProjectSample",
      type: "task",
      id: "Task 4",
      displayOrder: 5,
      progress: 45,
      isDisabled: true,
      dependencies: ["Task 2"],
    },
    {
      start: new Date(2024, 6, 28),
      end: new Date(2024, 7, 8),
      name: "Idea 3",
      project: "ProjectSample",
      type: "project",
      id: "Proposal",
      displayOrder: 6,
      progress: 45,
      isDisabled: true,
      hideChildren: false,
    },
    {
      start: new Date(2024, 6, 28),
      end: new Date(2024, 6, 30),
      name: "Idea's",
      project: "Proposal",
      type: "task",
      id: "Task 5",
      displayOrder: 7,
      progress: 45,
      isDisabled: true,
      dependencies: ["Proposal"],
    },
    {
      start: new Date(2024, 7, 1),
      end: new Date(2024, 7, 3),
      name: "Idea's ",
      project: "ProjectSample",
      type: "task",
      id: "Task 6",
      displayOrder: 8,
      progress: 45,
      isDisabled: true,
      dependencies: ["Task 5"],
    },
    {
      start: new Date(2024, 7, 4),
      end: new Date(2024, 7, 8),
      name: "Idea's",
      project: "ProjectSample",
      type: "task",
      id: "Task 7",
      displayOrder: 9,
      progress: 45,
      isDisabled: true,
      dependencies: ["Task 6"],
    },
    {
      start: new Date(2024, 7, 2),
      end: new Date(2024, 7, 6),
      name: "Idea's",
      project: "ProjectSample",
      type: "task",
      id: "Task 8",
      displayOrder: 10,
      progress: 100,
      isDisabled: true,
      dependencies: ["Task 6"],
    },
  ]);

  const view = ViewMode.Day; // Example view mode, you can change it

  // Utility functions
  const isEndDateBeforeToday = (endDate: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate < today;
  };

  // Function to update task styles based on progress and end date
  const getUpdatedTaskStyles = (task: Task) => {
    if (task.progress === 100) {
      return { ...task.styles, progressColor: "#80AF81" };
    } else if (isEndDateBeforeToday(task.end)) {
      return { ...task.styles, progressColor: "red" };
    } else {
      return { ...task.styles, progressColor: "#6EACDA" }; // Default color
    }
  };

  useEffect(() => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        styles: getUpdatedTaskStyles(task),
      }))
    );
  }, []);

  const onTaskChange = (task: Task) => {
    // Handle task date changes
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
    );
  };

  const onProgressChange = (task: Task) => {
    // Handle progress changes
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
    );
  };

  const onDblClick = (task: Task) => {
    // Handle double click on task
    console.log("Task double clicked:", task);
  };

  const onClick = (task: Task) => {
    // Handle single click on task
    console.log("Task clicked:", task);
  };

  const onExpanderClick = (task: Task) => {
    // Toggle the hideChildren property for the clicked project
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, hideChildren: !t.hideChildren } : t
      )
    );
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
        // barProgressColor={"#6EACDA"}
        // barProgressColor={"black"}
        barBackgroundSelectedColor={"#053B50"}
        arrowColor={"#102C57"}
        todayColor={"#BB9AB1"}
        arrowIndent={20}
        barFill={60}
        rowHeight={50}
        columnWidth={65}
        handleWidth={8}
        // taskHeight={"30"}
        // ganttHeight={500}
        // barCornerRadius={8}
        fontSize={"14"}
        // rtl={false}
        timeStep={1000 * 60 * 60 * 24}
        onExpanderClick={onExpanderClick}
      />
    </div>
  );
};

export default GanttChart;
