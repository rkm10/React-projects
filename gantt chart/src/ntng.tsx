import React, { useState, useEffect } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import styled from "styled-components";
import { getData } from "./DashboardApi";

const GanttDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: aliceblue;
`;

const GanttContainer = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: white;
    color: #333;
    font-size: 14px;
  }

  button {
    background-color: #00575d;
    color: white;
    border: none;
    padding: 8px 12px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }

  button:hover {
    background-color: #2a888f;
  }
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;

  .task-name {
    flex: 1;
    text-align: center;
  }

  .task-date {
    width: 20%;
    text-align: center;
  }
`;

interface CustomTask extends Task {
    assignee?: string;
    priority?: string;
}

const GanttChart = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    //data fetching
    const fetchData = async () => {
        let res = await getData();
        let data = res.data.message;
        setDetails(data)
        console.log('API Response:', data);
    }

    //use memo or use callback




    const [tasks, setTasks] = useState<CustomTask[]>([
        // Add the tasks here
        {
            start: new Date(2024, 6, 25),
            end: new Date(2024, 7, 29),
            name: "Q-1 Release",
            id: "Q1Release",
            type: "project",
            progress: 60,
            hideChildren: false,
        },
        {
            start: new Date(2024, 6, 26),
            end: new Date(2024, 7, 5),
            name: "Roadmap",
            project: "Q1Release",
            type: "project",
            id: "Roadmap",
            progress: 45,
            hideChildren: false,
        },
        {
            start: new Date(2024, 7, 1),
            end: new Date(2024, 7, 3),
            name: "Batch Editing",
            project: "Roadmap",
            type: "task",
            id: "BatchEditing",
            progress: 55,
            assignee: "Martin Tamer",
            priority: "High",
            dependencies: ["Roadmap"],
        },
        {
            start: new Date(2024, 7, 4),
            end: new Date(2024, 7, 7),
            name: "PDF Export",
            project: "Roadmap",
            type: "task",
            id: "PDFExport",
            progress: 100,
            assignee: "Rose Fuller",
            priority: "Normal",
            dependencies: ["BatchEditing"],
        },
        {
            start: new Date(2024, 7, 8),
            end: new Date(2024, 7, 10),
            name: "Tree Grid",
            project: "Roadmap",
            type: "task",
            id: "TreeGrid",
            progress: 40,
            assignee: "Fuller King",
            priority: "Critical",
            dependencies: ["PDFExport"],
        },

        // Project 2
        {
            start: new Date(2024, 8, 1),
            end: new Date(2024, 9, 15),
            name: "Q-2 Release",
            id: "Q2Release",
            type: "project",
            progress: 70,
            hideChildren: false,
        },
        {
            start: new Date(2024, 8, 2),
            end: new Date(2024, 8, 15),
            name: "Feature Development",
            project: "Q2Release",
            type: "project",
            id: "FeatureDevelopment",
            progress: 50,
            hideChildren: false,
        },
        {
            start: new Date(2024, 8, 5),
            end: new Date(2024, 8, 12),
            name: "New Feature",
            project: "FeatureDevelopment",
            type: "task",
            id: "NewFeature",
            progress: 30,
            assignee: "John Doe",
            priority: "High",
            dependencies: ["FeatureDevelopment"],
        },
        {
            start: new Date(2024, 8, 13),
            end: new Date(2024, 8, 20),
            name: "Testing",
            project: "FeatureDevelopment",
            type: "task",
            id: "Testing",
            progress: 20,
            assignee: "Jane Smith",
            priority: "Normal",
            dependencies: ["NewFeature"],
        },

        // Project 3
        {
            start: new Date(2024, 10, 1),
            end: new Date(2024, 11, 30),
            name: "Q-3 Release",
            id: "Q3Release",
            type: "project",
            progress: 80,
            hideChildren: false,
        },
        {
            start: new Date(2024, 10, 2),
            end: new Date(2024, 10, 15),
            name: "UI Redesign",
            project: "Q3Release",
            type: "project",
            id: "UIRedesign",
            progress: 60,
            hideChildren: false,
        },
        {
            start: new Date(2024, 10, 5),
            end: new Date(2024, 10, 12),
            name: "Design Mockups",
            project: "UIRedesign",
            type: "task",
            id: "DesignMockups",
            progress: 90,
            assignee: "Emily Clark",
            priority: "High",
            dependencies: ["UIRedesign"],
        },
        {
            start: new Date(2024, 10, 13),
            end: new Date(2024, 10, 20),
            name: "User Feedback",
            project: "UIRedesign",
            type: "task",
            id: "UserFeedback",
            progress: 10,
            assignee: "Michael Brown",
            priority: "Critical",
            dependencies: ["DesignMockups"],
        },
    ]);

    useEffect(() => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => ({
                ...task,
                styles: getUpdatedTaskStyles(task),
            }))
        );
    }, []);

    const getUpdatedTaskStyles = (task: Task) => {
        if (task.progress === 100) {
            return { progressColor: "#80AF81", backgroundColor: "#4CAF50" };
        } else if (isEndDateBeforeToday(task.end)) {
            return { progressColor: "red", backgroundColor: "#E57373" };
        } else {
            return { progressColor: "#6EACDA", backgroundColor: "#64B5F6" };
        }
    };

    const isEndDateBeforeToday = (endDate: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return endDate < today;
    };

    const onTaskChange = (task: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
        );
    };

    const onProgressChange = (task: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
        );
    };

    const onDblClick = (task: Task) => {
        console.log("Task double clicked:", task);
    };

    const onClick = (task: Task) => {
        console.log("Task clicked:", task);
    };

    const onExpanderClick = (task: Task) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === task.id ? { ...t, hideChildren: !t.hideChildren } : t
            )
        );
    };

    const onExpandAll = () => {
        setTasks(prevTasks =>
            prevTasks.map(task => ({
                ...task,
                hideChildren: false,
            }))
        );
    };

    const onCollapseAll = () => {
        setTasks(prevTasks =>
            prevTasks.map(task => ({
                ...task,
                hideChildren: true,
            }))
        );
    };

    // Toggle all tasks between expanded and collapsed
    const toggleAllTasks = () => {
        setTasks(prevTasks =>
            prevTasks.map(task => ({
                ...task,
                hideChildren: !areAllExpanded,
            }))
        );
        setAreAllExpanded(!areAllExpanded); // Toggle the state
    };

    // Calculate the date 10 days back from today
    const viewDate = new Date();
    viewDate.setDate(viewDate.getDate() - 10);

    useEffect(() => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => ({
                ...task,
                styles: getUpdatedTaskStyles(task),
            }))
        );
    }, []);

    const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Day);
    const [showTaskList, setShowTaskList] = useState(false)
    const [listCellWidth, setListCellWidth] = useState<string>("160px")
    const [showDates, setShowDates] = useState(false)
    const [areAllExpanded, setAreAllExpanded] = useState(false); // Track if tasks are expanded

    const handleViewModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setViewMode(event.target.value as ViewMode);
    };

    const handleTaskList = () => {
        setShowTaskList(prevState => {
            const newVisibility = !prevState;
            setListCellWidth(newVisibility ? "160px" : ""); // Adjust listCellWidth based on visibility
            return newVisibility;
        });
    };

    const handleDates = () => {
        setShowDates(prevState => {
            const newShowDates = !prevState;
            const elementsToUpdate = document.querySelectorAll('._34SS0, ._1nBOt');
            elementsToUpdate.forEach(element => {
                if (newShowDates) {
                    element.classList.add("hide-not-first-child");
                } else {
                    element.classList.remove("hide-not-first-child");
                }
            });
            return newShowDates;
        });
    };

    useEffect(() => {
        // Clean up the class on component unmount
        return () => {
            const elementsToUpdate = document.querySelectorAll('._34SS0, ._1nBOt');
            elementsToUpdate.forEach(element => {
                element.classList.remove("hide-not-first-child");
            });
        };
    }, []);

    const renderTask = (task: Task) => (
        <TaskWrapper key={task.id}>
            <div className="task-date">{task.start.toLocaleDateString()}</div>
            <div className="task-name">{task.name}</div>
            <div className="task-date">{task.end.toLocaleDateString()}</div>
        </TaskWrapper>
    );

    return (
        <GanttContainer>
            <ControlContainer>
                <div>
                    {/* <button onClick={onExpandAll}>Expand All</button>
          <button onClick={onCollapseAll}>Collapse All</button> */}
                    <button onClick={toggleAllTasks}>
                        {areAllExpanded ? 'Expand All' : 'Collapse All'}
                    </button>
                    {/* <button onClick={handleTaskList}>
            {showTaskList ? "Hide Task List" : "Show Task List"}
          </button> */}
                    <button onClick={handleDates}>
                        {showDates ? "Show Dates" : "Hide Dates"}
                    </button>
                </div>
                <select onChange={handleViewModeChange} value={viewMode}>
                    <option value={ViewMode.Day}>Day</option>
                    <option value={ViewMode.Week}>Week</option>
                    <option value={ViewMode.Month}>Month</option>
                    <option value={ViewMode.Year}>Year</option>
                </select>
            </ControlContainer>
            <GanttDiv>
                <Gantt
                    tasks={tasks}
                    viewMode={viewMode}
                    viewDate={viewDate}
                    onDateChange={onTaskChange}
                    onProgressChange={onProgressChange}
                    onDoubleClick={onDblClick}
                    onClick={onClick}
                    onExpanderClick={onExpanderClick}
                    ganttHeight={600}
                    rowHeight={50}
                    columnWidth={65}
                    barFill={60}
                    arrowIndent={20}
                    handleWidth={8}
                    fontSize={"14"}
                    listCellWidth={listCellWidth}
                    todayColor={'lightgrey'}

                />
            </GanttDiv>
        </GanttContainer>
    );
};

export default GanttChart;




end = expected_end_date || team_end_date || stage_end_date
start = expected_start_date || team_start_date || stage_start_date
progress = team_progress || stage_progress || task_progress
name = project_name || subject

for example PROJ_0006 is a project with teams as sub projects with names indexed and for the single team team_end_date team_start_date and team_progress is given, and inside team we have stages which are ares sub sub projects with names indexed stage_end_date stage_progress stage_start_date inside stage tasks indexed with numbers and inside that subject as name and depends_on contains same now this is the work flow.
bellow given sample fetched data, and if any of the fields are null fill with random details.and this is one project i have mutiple projects simliar i want to map this

{ "PROJ-0006": { "project_name": "Raji project", "status": "Open", "expected_start_date": "2024-08-08", "expected_end_date": "2024-09-30", "is_active": "Yes", "teams": { "Acquisition": { "stages": { "Pre Proposal": { "tasks": [{ "task_name": "PROJ-0006", "name": "0e462e130d", "status": "Pending Review", "is_type": "Project", "sub_status": "Not yet started", "exp_start_date": "2024-09-13", "exp_end_date": "2024-09-15", "priority": "Low", "subject": "raj ", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "305b718b9c", "status": "Completed", "is_type": "Project", "sub_status": "Completed", "exp_start_date": "2024-08-13", "exp_end_date": "2024-09-16", "priority": "Low", "subject": "testing", "depends_on": [], "task_progress": 100 }, { "task_name": "PROJ-0006", "name": "3151d7e2d4", "status": "Completed", "is_type": "Project", "sub_status": "Completed", "exp_start_date": "2024-02-01", "exp_end_date": "2024-03-02", "priority": "Medium", "subject": "sample 4", "depends_on": [], "task_progress": 100 }, { "task_name": "PROJ-0006", "name": "445e81cfe9", "status": "", "is_type": "Project", "sub_status": "", "exp_start_date": "2024-08-05", "exp_end_date": "2024-09-07", "priority": "Medium", "subject": "ACQ task 2", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "6f4d99cb07", "status": "", "is_type": "Project", "sub_status": "", "exp_start_date": "2024-08-05", "exp_end_date": "2024-09-07", "priority": "Low", "subject": "Sample", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "824f02ba6b", "status": "Pending Review", "is_type": "Project", "sub_status": "Not yet started", "exp_start_date": "2024-08-04", "exp_end_date": "2024-08-14", "priority": "Low", "subject": "test for parent ", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "8bf9606025", "status": "Completed", "is_type": "Project", "sub_status": "Awaiting response", "exp_start_date": "2024-08-16", "exp_end_date": "2024-08-24", "priority": "High", "subject": "sadfas", "depends_on": [], "task_progress": 100 }, { "task_name": "PROJ-0006", "name": "9d1122a222", "status": "Pending Review", "is_type": "Project", "sub_status": "Not yet started", "exp_start_date": "2024-09-13", "exp_end_date": "2024-09-15", "priority": "Low", "subject": "raj ", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "ad248c1226", "status": "Completed", "is_type": "Project", "sub_status": "In progress", "exp_start_date": "2024-08-06", "exp_end_date": "2024-08-10", "priority": "Low", "subject": "ACQ task 1", "depends_on": [{ "task_name": "ad248c1226", "name": "f89fc9aeaf", "status": "Completed", "is_type": "Task", "sub_status": "", "exp_start_date": "2024-04-20", "exp_end_date": "2024-04-22", "priority": "Low", "subject": "Sample", "progress": 100 }], "task_progress": 100 }, { "task_name": "PROJ-0006", "name": "eb90b1b32f", "status": "Pending Review", "is_type": "Project", "sub_status": "Not yet started", "exp_start_date": "2024-08-13", "exp_end_date": "2024-08-16", "priority": "Medium", "subject": "raj Test", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "ee75965074", "status": "Pending Review", "is_type": "Project", "sub_status": "Not yet started", "exp_start_date": "2024-08-13", "exp_end_date": "2024-08-14", "priority": "Low", "subject": "bala test 1", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "f2030b2dad", "status": "Overdue", "is_type": "Project", "sub_status": "", "exp_start_date": "2024-02-01", "exp_end_date": "2024-03-02", "priority": "Medium", "subject": "sample 4", "depends_on": [], "task_progress": 0 }, { "task_name": "PROJ-0006", "name": "f89fc9aeaf", "status": "Completed", "is_type": "Project", "sub_status": "", "exp_start_date": "2024-04-20", "exp_end_date": "2024-04-22", "priority": "Low", "subject": "Sample", "depends_on": [], "task_progress": 100 }], "stage_progress": 38.4615384615385, "stage_start_date": "2024-02-01", "stage_end_date": "2024-09-16" }, "Contract": { "tasks": [{ "task_name": "PROJ-0006", "name": "b1fc22a576", "status": "Overdue", "is_type": "Project", "sub_status": null, "exp_start_date": "2024-08-05", "exp_end_date": "2024-08-08", "priority": "Low", "subject": "Task 1", "depends_on": [{ "task_name": "b1fc22a576", "name": "445e81cfe9", "status": "", "is_type": "Task", "sub_status": "", "exp_start_date": "2024-08-05", "exp_end_date": "2024-09-07", "priority": "Medium", "subject": "ACQ task 2", "progress": 0 }, { "task_name": "b1fc22a576", "name": "ad248c1226", "status": "Completed", "is_type": "Task", "sub_status": "In progress", "exp_start_date": "2024-08-06", "exp_end_date": "2024-08-10", "priority": "Low", "subject": "ACQ task 1", "progress": 100 }], "task_progress": 50 }], "stage_progress": 50, "stage_start_date": "2024-08-05", "stage_end_date": "2024-08-08" } }, "team_progress": 44.2307692307692, "team_start_date": "2024-02-01", "team_end_date": "2024-09-16" }, "Construction": { "stages": { "Pre Proposal": { "tasks": [{ "task_name": "PROJ-0006", "name": "82fd81ab8c", "status": "Open", "is_type": "Project", "sub_status": "In progress", "exp_start_date": null, "exp_end_date": null, "priority": "Low", "subject": "Task 2", "depends_on": [], "task_progress": 0 }], "stage_progress": 0, "stage_start_date": null, "stage_end_date": null } }, "team_progress": 0, "team_start_date": null, "team_end_date": null }, "Design": { "stages": { "Pre Proposal": { "tasks": [{ "task_name": "PROJ-0006", "name": "fcbd2cd19d", "status": "Open", "is_type": "Project", "sub_status": "Awaiting response", "exp_start_date": null, "exp_end_date": null, "priority": "Low", "subject": "Task 3", "depends_on": [], "task_progress": 0 }], "stage_progress": 0, "stage_start_date": null, "stage_end_date": null } }, "team_progress": 0, "team_start_date": null, "team_end_date": null } } } }
